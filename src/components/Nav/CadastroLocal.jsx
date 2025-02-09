import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../services/api"; // Importando a instância do axios
import { useAxios } from "../hooks/useAxios";
import "./style.css";

function CadastroLocal() {
  const { data: estadosData, error: estadosError } = useAxios(
    "Estados/ListarEstados"
  ); // Puxando estados cadastrados

  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState(""); // Agora cidade será o nome da cidade
  const [estado, setEstado] = useState(""); // Estado selecionado
  const [errorMessage, setErrorMessage] = useState("");

  // Função para abrir o modal
  const handleShow = () => setShowModal(true);

  // Função para fechar o modal e limpar os dados inseridos
  const handleClose = () => {
    setShowModal(false);
    // Limpa os campos ao fechar
    setNome("");
    setDescricao("");
    setEndereco("");
    setCidade("");
    setEstado("");
    setErrorMessage(""); // Limpa qualquer mensagem de erro
  };

  const handleCadastrar = async () => {
    if (!nome || !descricao || !endereco || !cidade || !estado) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    // Função auxiliar para tentar cadastrar o local duas vezes
    const tentarCadastrarLocal = async (tentativa = 1) => {
      try {
        let cidadeID;

        // Normalizar o nome da cidade removendo espaços extras
        const cidadeTrimmed = cidade.trim();

        console.log("Buscando cidade por nome:", cidadeTrimmed);

        // Tentar encontrar a cidade primeiro
        const cidadeResponse = await api.get(
          `Cidades/BuscarCidadePorNome/${cidadeTrimmed}`
        );

        console.log("Resposta da busca da cidade:", cidadeResponse.data);

        // Verificar se a cidade foi encontrada
        if (
          cidadeResponse.data.status === false ||
          !cidadeResponse.data.dados
        ) {
          console.log("Cidade não encontrada, criando uma nova cidade...");

          // Se não encontrar a cidade, cria-la
          const cidadeData = {
            nome: cidadeTrimmed,
            estadoID: estado,
          };

          console.log("Criando cidade com dados:", cidadeData);

          const criarCidadeResponse = await api.post(
            "Cidades/CriarCidade",
            cidadeData
          );

          console.log(
            "Resposta da criação da cidade:",
            criarCidadeResponse.data
          );

          if (
            criarCidadeResponse.data.status === false ||
            !criarCidadeResponse.data.dados
          ) {
            // Exibir a mensagem do erro específico da API
            setErrorMessage(
              criarCidadeResponse.data.mensagem || "Erro ao cadastrar a cidade."
            );
            return;
          }

          // Obter o ID da cidade criada
          cidadeID = criarCidadeResponse.data.dados.cidadeID;
        } else {
          // Se a cidade já existe, usar o ID retornado
          cidadeID = cidadeResponse.data.dados.cidadeID;
        }

        console.log("ID da cidade:", cidadeID);

        // Agora, cadastrar o local com o cidadeID
        const local = {
          nome,
          descricao,
          endereco,
          cidadeID, // Usando o ID da cidade
          estadoRelacao: {
            estadoID: estado, // Estado selecionado
          },
        };

        console.log("Dados enviados para cadastro do local:", local);

        // Cadastrar o local
        const response = await api.post("Locais/CriarLocal", local);

        console.log("Resposta do cadastro do local:", response.data);

        if (response.data.status === false) {
          setErrorMessage(
            response.data.mensagem || "Erro desconhecido ao cadastrar local."
          );
          return;
        }

        handleClose(); // Fechar o modal após o cadastro
        // Limpar os campos após o cadastro bem-sucedido
        setNome("");
        setDescricao("");
        setEndereco("");
        setCidade("");
        setEstado("");
        setErrorMessage(""); // Limpar a mensagem de erro

        alert("Local cadastrado com sucesso!");
      } catch (error) {
        console.error("Erro ao cadastrar local:", error);
        if (error.response) {
          console.error("Resposta da API:", error.response.data);
          setErrorMessage(
            error.response.data.mensagem ||
              "Erro desconhecido ao cadastrar local."
          );
        } else {
          setErrorMessage("Erro desconhecido ao cadastrar local.");
        }

        // Se a primeira tentativa falhar, tenta novamente
        if (tentativa === 1) {
          console.log("Tentativa 1 falhou, tentando novamente...");
          tentarCadastrarLocal(2); // Chama a função novamente, agora na segunda tentativa
        }
      }
    };

    // Começa a primeira tentativa de cadastro
    tentarCadastrarLocal(1);
  };

  if (estadosError) {
    console.error("Erro ao carregar estados:", estadosError);
    return <p>Erro ao carregar os estados. Tente novamente mais tarde.</p>;
  }

  // Log para depuração
  useEffect(() => {
    console.log("Dados de estados:", estadosData);
  }, [estadosData]);

  if (
    !estadosData ||
    !estadosData.dados ||
    !estadosData.dados.$values ||
    estadosData.dados.$values.length === 0
  ) {
    return <p>Carregando estados...</p>;
  }

  return (
    <div className="cadastroContainer">
      <div className="Title">
        <h5>Instruções para o Cadastro de Novo Local</h5>
      </div>
      <p>
        Para cadastrar um novo ponto turístico, clique no botão abaixo. Você
        precisará preencher alguns campos obrigatórios:
      </p>
      <ul>
        <li>
          <strong>Nome:</strong> Informe o nome do ponto turístico.
        </li>
        <li>
          <strong>Descrição:</strong> Forneça uma breve descrição sobre o local,
          destacando suas principais características ou atrações.
        </li>
        <li>
          <strong>Endereço:</strong> Coloque o endereço completo do local (rua,
          número, bairro, etc.).
        </li>
        <li>
          <strong>Cidade:</strong> Especifique a cidade onde o ponto turístico
          está localizado.
        </li>
        <li>
          <strong>Estado:</strong> Selecione o estado onde o local está situado
          a partir da lista de estados.
        </li>
      </ul>

      <div className="cadastroContainer">
        <p>
          Após preencher todas as informações, clique no botão "Cadastrar" para
          registrar o ponto turístico no sistema. Caso algum campo obrigatório
          não seja preenchido, um alerta será exibido para que você possa
          corrigir.
        </p>
      </div>

      <Button variant="primary" onClick={handleShow}>
        Cadastrar Novo Local
      </Button>

      {/* Modal para preencher as informações do novo local */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Novo Local</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && <p className="textDanger">{errorMessage}</p>}
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome do Local</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                maxLength="100"
                placeholder="Digite o nome do local"
              />
            </Form.Group>

            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                maxLength="100"
                rows={3}
                placeholder="Digite uma descrição do local"
              />
            </Form.Group>

            <Form.Group controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                maxLength="100"
                placeholder="Digite o endereço do local"
              />
            </Form.Group>

            <Form.Group controlId="formCidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Digite o nome da cidade"
              />
            </Form.Group>

            <Form.Group controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                as="select"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="">Selecione o estado</option>
                {estadosData.dados.$values.map((estado) => (
                  <option key={estado.estadoID} value={estado.estadoID}>
                    {estado.nome}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>

          <Button variant="success" onClick={handleCadastrar}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CadastroLocal;
