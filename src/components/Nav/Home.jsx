import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useAxios } from "../hooks/useAxios";
import api from "../../services/api";
import { Modal, Button } from "react-bootstrap"; // Importando o Modal e Button do react-bootstrap

import IconLixeira from "../../assets/Lixeira.svg";
import IconInfo from "../../assets/Info.svg"; // Importando o ícone de informações

import "./style.css";

function Home() {
  const { data, error } = useAxios("Locais/ListarLocais");
  const { data: cidadesData, estadosData } = useAxios("Cidades/ListarCidades");

  const [searchTerm, setSearchTerm] = useState("");
  const [locais, setLocais] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [showModal, setShowModal] = useState(false); // Estado para controle do modal
  const [localSelecionado, setLocalSelecionado] = useState(null); // Estado para armazenar o local selecionado
  const itensPorPagina = 5;

  useEffect(() => {
    if (data && data.dados && Array.isArray(data.dados.$values)) {
      const locaisAtualizados = data.dados.$values.map((local) => {
        const cidade = cidadesData?.$values?.find(
          (cidade) => cidade.cidadeID === local.cidadeID
        );
        const estado = estadosData?.$values?.find(
          (estado) => estado.estadoID === cidade?.estadoID
        );
        return {
          ...local,
          cidadeNome: cidade ? cidade.nome : "Cidade não encontrada",
          estadoNome: cidade ? cidade.estadoNome : "Estado não encontrado",
        };
      });

      // Ordenando os locais de forma decrescente (pela propriedade id)
      const locaisOrdenados = locaisAtualizados.sort((a, b) => b.id - a.id);

      setLocais(locaisOrdenados);
    }
  }, [data, cidadesData, estadosData]);

  if (error) {
    return <p>Erro ao carregar locais. Tente novamente mais tarde.</p>;
  }

  if (!data || !data.dados || !Array.isArray(data.dados.$values)) {
    return <p>Carregando locais...</p>;
  }

  // Função para deletar um local
  const deletarLocal = async (id) => {
    try {
      await api.delete(`Locais/DeletarLocal/${id}`); // Usando o api para deletar o local
      setLocais(locais.filter((local) => local.id !== id));
    } catch (error) {
      console.error("Erro ao deletar local:", error);
    }
  };

  // Função para abrir o modal e exibir as informações do local
  const abrirModal = (local) => {
    setLocalSelecionado(local);
    setShowModal(true); // Mostra o modal
  };

  const locaisFiltrados =
    paginaAtual === 1
      ? locais.filter(
          (local) =>
            local.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            local.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
            local.cidadeNome.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : locais;

  const totalPaginas = Math.ceil(locaisFiltrados.length / itensPorPagina);
  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const locaisPaginados = locaisFiltrados.slice(
    indiceInicial,
    indiceInicial + itensPorPagina
  );

  const mudarPagina = (numeroPagina) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      setPaginaAtual(numeroPagina);
    }
  };

  return (
    <div className="table">
      <div className="TituloLista">
        <h5>Lista de Locais</h5>
      </div>

      {paginaAtual === 1 && (
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
        />
      )}

      <Table striped bordered hover size="sm" className="tabelaLocais">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {locaisPaginados.length > 0 ? (
            locaisPaginados.map((local, index) => (
              <tr key={local.id}>
                <td>{indiceInicial + index + 1}</td>
                <td>{local.nome}</td>
                <td>{local.descricao}</td>
                <td>{local.endereco}</td>
                <td>{local.cidadeNome}</td>
                <td>{local.estadoNome}</td>
                <td>
                  {/* Botão de excluir */}
                  <button onClick={() => deletarLocal(local.id)}>
                    <img
                      src={IconLixeira}
                      width={20}
                      height={20}
                      alt="Excluir"
                    />
                  </button>
                  {/* Botão para abrir o modal */}
                  <button onClick={() => abrirModal(local)}>
                    <img src={IconInfo} width={20} height={20} alt="Info" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Nenhum local encontrado</td>
            </tr>
          )}
        </tbody>
      </Table>

      {totalPaginas > 1 && (
        <div className="paginacao">
          <button
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            Anterior
          </button>

          <span>
            Página {paginaAtual} de {totalPaginas}
          </span>

          <button
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
          >
            Próximo
          </button>
        </div>
      )}

      {/* Modal para exibir a ficha do local */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{localSelecionado?.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Descrição:</strong> {localSelecionado?.descricao}
          </p>
          <p>
            <strong>Endereço:</strong> {localSelecionado?.endereco}
          </p>
          <p>
            <strong>Cidade:</strong> {localSelecionado?.cidadeNome}
          </p>
          <p>
            <strong>Estado:</strong> {localSelecionado?.estadoNome}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
