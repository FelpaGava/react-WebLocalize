import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useAxios } from "../hooks/useAxios";
import api from "../../services/api";
import { Modal, Button } from "react-bootstrap";

import IconLixeira from "../../assets/Lixeira.svg";
import IconInfo from "../../assets/Info.svg";

import "./style.css";

function Home() {
  const { data, error } = useAxios("Locais/ListarLocais");
  const { data: cidadesData, estadosData } = useAxios("Cidades/ListarCidades");

  const [searchTerm, setSearchTerm] = useState("");
  const [locais, setLocais] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [localSelecionado, setLocalSelecionado] = useState(null);
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

  const deletarLocal = async () => {
    try {
      await api.delete(`Locais/DeletarLocal/${localSelecionado.id}`);
      setLocais(locais.filter((local) => local.id !== localSelecionado.id));
      setShowConfirmModal(false);
    } catch (error) {
      console.error("Erro ao deletar local:", error);
    }
  };

  const confirmarExclusao = (local) => {
    setLocalSelecionado(local);
    setShowConfirmModal(true);
  };

  const abrirModal = (local) => {
    setLocalSelecionado(local);
    setShowModal(true);
  };

  const locaisFiltrados = locais.filter(
    (local) =>
      local.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      local.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      local.cidadeNome.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* 🔍 Barra de pesquisa sempre visível */}
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />

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
            locaisPaginados.map((local) => (
              <tr key={local.id}>
                <td>{local.id}</td> {/* 🔄 Agora exibe o ID real do banco */}
                <td>{local.nome}</td>
                <td>{local.descricao}</td>
                <td>{local.endereco}</td>
                <td>{local.cidadeNome}</td>
                <td>{local.estadoNome}</td>
                <td>
                  <button onClick={() => confirmarExclusao(local)}>
                    <img
                      src={IconLixeira}
                      width={20}
                      height={20}
                      alt="Excluir"
                    />
                  </button>
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

      {/* 📄 Paginação */}
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

      {/* Modal de Informações */}
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

      {/* Modal de Confirmação de Exclusão */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir o local{" "}
          <strong>{localSelecionado?.nome}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancelar
          </Button>
          <Button variant="danger" onClick={deletarLocal}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
