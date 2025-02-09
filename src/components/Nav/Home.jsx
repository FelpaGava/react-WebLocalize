import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useAxios } from "../hooks/useAxios";
import "./style.css";

function Home() {
  const { data, error } = useAxios("Locais/ListarLocais");
  const { data: cidadesData, estadosData } = useAxios("Cidades/ListarCidades");

  const [searchTerm, setSearchTerm] = useState(""); 
  const [locais, setLocais] = useState([]); 
  const [paginaAtual, setPaginaAtual] = useState(1); 

  
  useEffect(() => {
    console.log("Dados Locais:", data);
    console.log("Dados Cidades:", cidadesData);
    console.log("Dados Estados:", estadosData);

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

      setLocais(locaisAtualizados);
    }
  }, [data, cidadesData, estadosData]);

  if (error) {
    return <p>Erro ao carregar locais. Tente novamente mais tarde.</p>;
  }

  if (!data || !data.dados || !Array.isArray(data.dados.$values)) {
    return <p>Carregando locais...</p>;
  }

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
          placeholder="Pesquisar por nome, descrição ou cidade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
        />
      )}

      <Table striped bordered hover size="sm" className="tableLocais" >
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>Estado</th>
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhum local encontrado</td>
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
    </div>
  );
}

export default Home;
