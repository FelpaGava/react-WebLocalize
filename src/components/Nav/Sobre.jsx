import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Sobre() {
  return (
    <Container className="cadastroContainer">
      <div className="sobreContainer">
        <div className="Title">
          <h2>Sobre o Projeto</h2>
        </div>
        <p>
          O <strong>WebLocalize</strong> é uma plataforma desenvolvida para
          facilitar a localização e o cadastro de pontos turísticos em
          diferentes cidades. O objetivo do projeto é fornecer uma maneira
          eficiente e acessível para que usuários possam explorar locais de
          interesse, bem como contribuir com novos cadastros para ampliar a base
          de dados.
        </p>
        <p>
          Este sistema foi construído utilizando tecnologias modernas, como{" "}
          <strong>React </strong>
          para o front-end e <strong> C# .NET</strong> para o back-end,
          garantindo uma experiência fluida e de alto desempenho. Além disso, o
          banco de dados <strong>SQL Server</strong> foi escolhido para
          armazenar e gerenciar as informações de maneira organizada e segura.
        </p>
        <p>
          O projeto também visa demonstrar habilidades em desenvolvimento web,
          incluindo a integração de API, manipulação de dados com{" "}
          <strong>Entity Framework</strong> e a implementação de boas práticas
          de código. A interface foi projetada para ser intuitiva,
          proporcionando uma navegação simples e eficiente.
        </p>
        <p>
          Esperamos que o <strong>WebLocalize</strong> possa ser útil para quem
          deseja conhecer novos destinos e contribuir para o enriquecimento do
          mapeamento de locais turísticos.
        </p>
      </div>
    </Container>
  );
}

export default Sobre;
