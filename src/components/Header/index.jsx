import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Logo from "../../assets/Logo.svg";
import IconWhatsapp from "../../assets/IconWhatsapp.svg";
import IconLinkedln from "../../assets/IconLinkedln.svg";
import IconGitHub from "../../assets/IconGitHub.svg";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container">
      <div className="containerContato">
        <a href="https://wa.me/551434049999">
          <img src={IconWhatsapp} width={25} height={25} alt="WhatsApp" />
        </a>
        <h6>(14) 3404-9999</h6>
        <h6>|</h6>
        <h6>suporte@teste.com.br</h6>
        <h6>|</h6>
        <h6>Siga-nos:</h6>

        <a href="https://www.linkedin.com/in/marcos-felipe-gava-093910263/">
          <img src={IconLinkedln} width={25} height={25} alt="LinkedIn" />
        </a>

        <a href="https://github.com/FelpaGava">
          <img src={IconGitHub} width={25} height={25} alt="GitHub" />
        </a>
      </div>

      <header className="containerHeader">
        <div className="Logo">
          <img src={Logo} width={100} height={100} alt="Logotipo" />
          <h3>WebLocalize</h3>
          <div className="Links">
            <BrowserRouter>
              <Nav variant="pills">
                <Nav.Link as={Link} to="/">
                  Página inicial
                </Nav.Link>
                <Nav.Link as={Link} to="/cadastrarLocal">
                  Cadastrar local
                </Nav.Link>
                <Nav.Link as={Link} to="/sobre">
                  Sobre
                </Nav.Link>
              </Nav>
            </BrowserRouter>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
