import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../services/api"; 
import { useAxios } from "../hooks/useAxios";
import "./style.css";

function CadastroLocal() {
  const { data: estadosData, error: estadosError } = useAxios(
    "Estados/ListarEstados"
  ); 

  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState(""); 
  const [estado, setEstado] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");

  
  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
    setNome("");
    setDescricao("");
    setEndereco("");
    setCidade("");
    setEstado("");
    setErrorMessage(""); 
  };

  const handleCadastrar = async () => {
    if (!nome || !descricao || !endereco || !cidade || !estado) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    
    const tentarCadastrarLocal = async (tentativa = 1) => {
      try {
        let cidadeID;

      
        const cidadeTrimmed = cidade.trim();

        console.log("Buscando cidade por nome:", cidadeTrimmed);

     
        const cidadeResponse = await api.get(
          `Cidades/BuscarCidadePorNome/${cidadeTrimmed}`
        );

        console.log("Resposta da busca da cidade:", cidadeResponse.data);

        if (
          cidadeResponse.data.status === false ||
          !cidadeResponse.data.dados
        ) {
          console.log("Cidade não encontrada, criando uma nova cidade...");

       
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
    
            setErrorMessage(
              criarCidadeResponse.data.mensagem || "Erro ao cadastrar a cidade."
            );
            return;
          }

       
          cidadeID = criarCidadeResponse.data.dados.cidadeID;
        } else {
          cidadeID = cidadeResponse.data.dados.cidadeID;
        }

        console.log("ID da cidade:", cidadeID);

  
        const local = {
          nome,
          descricao,
          endereco,
          cidadeID,
          estadoRelacao: {
            estadoID: estado, 
          },
        };

        console.log("Dados enviados para cadastro do local:", local);


        const response = await api.post("Locais/CriarLocal", local);

        console.log("Resposta do cadastro do local:", response.data);

        if (response.data.status === false) {
          setErrorMessage(
            response.data.mensagem || "Erro desconhecido ao cadastrar local."
          );
          return;
        }

        handleClose(); 
        setNome("");
        setDescricao("");
        setEndereco("");
        setCidade("");
        setEstado("");
        setErrorMessage(""); 

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

      
        if (tentativa === 1) {
          console.log("Tentativa 1 falhou, tentando novamente...");
          tentarCadastrarLocal(2);
        }
      }
    };

    
    tentarCadastrarLocal(1);
  };

  if (estadosError) {
    console.error("Erro ao carregar estados:", estadosError);
    return <p>Erro ao carregar os estados. Tente novamente mais tarde.</p>;
  }


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
