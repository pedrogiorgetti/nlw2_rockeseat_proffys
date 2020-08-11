import React from "react";

import "./styles.css";
import logoImg from "../../../assets/images/logo.svg";
import purpleHeartIcon from "../../../assets/images/icons/purple-heart.svg";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";

const Register: React.FC = () => {
  return (
    <div id="register-page-container">
      <div className="main-content">
        <div className="form">
          <div className="backButton">
            <Link to="/">
              <img src={backIcon} alt="Voltar" />
            </Link>
          </div>
          <fieldset>
            <legend>Cadastro</legend>
            <p>Preencha os campos abaixo para começar</p>
            <form action="">
              <div className="input-group">
                <div className="input-field">
                  <input type="first-name" />
                  <label>Nome</label>
                </div>
                <div className="input-field">
                  <input type="last-name" />
                  <label>Sobrenome</label>
                </div>
                <div className="input-field">
                  <input type="email" />
                  <label>E-mail</label>
                </div>
                <div className="input-field">
                  <input id="password" type="password" />
                  <label htmlFor="password">Senha</label>
                </div>
              </div>
              <button type="submit">Concluir cadastro</button>
            </form>
          </fieldset>
        </div>
        <div className="background">
          <div>
            <img src={logoImg} alt="Proffy" />
            <span className="subtitle">Sua plataforma de estudos online.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
