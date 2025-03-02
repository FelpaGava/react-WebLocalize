import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Logo from "../../assets/Logo.svg";
import IconWhatsapp from "../../assets/IconWhatsapp.svg";
import IconLinkedln from "../../assets/IconLinkedln.svg";
import IconGitHub from "../../assets/IconGitHub.svg";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="containerContato">
        <a href="https://wa.me/551434049999">
          <img src={IconWhatsapp} width={25} height={25} alt="WhatsApp" />
        </a>
        <h6>(14) 99809-8934</h6>
        <h6>|</h6>
        <h6>marcosfelipegava@gmail.com</h6>
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
            <Nav variant="pills" activeKey={location.pathname}>
              <Nav.Link as={Link} to="/" eventKey="/" className="nav-item">
                Página inicial
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cadastrarLocal"
                eventKey="/cadastrarLocal"
                className="nav-item"
              >
                Cadastrar local
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sobre"
                eventKey="/sobre"
                className="nav-item"
              >
                Sobre
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
