import React from "react";

import "./styles.css";
import logoImg from "../../../assets/images/logo.svg";
import purpleHeartIcon from "../../../assets/images/icons/purple-heart.svg";

const Login: React.FC = () => {
  return (
    <div id="login-page-container">
      <div className="main-content">
        <div className="background">
          <div>
            <img src={logoImg} alt="Proffy" />
            <span className="subtitle">Sua plataforma de estudos online.</span>
          </div>
        </div>
        <div className="form">
          <fieldset>
            <legend>Fazer login</legend>
            <form action="">
              <div className="input-group">
                <div className="input-field">
                  <input type="email" />
                  <label>E-mail</label>
                </div>
                <div className="input-field">
                  <input id="password" type="password" />
                  <label htmlFor="password">Senha</label>
                </div>
              </div>
              <div className="actions">
                <div className="checkbox-container">
                  <input type="checkbox" />
                  <span>Lembrar-me</span>
                </div>
                <div className="forgot-password">
                  <a href="">Esqueci minha senha</a>
                </div>
              </div>
              <button type="submit">Entrar</button>
            </form>
          </fieldset>

          <div className="footer">
            <div>
              <p>
                Não tem conta?
                <br />
                <a href="">Cadastre-se</a>
              </p>
              <span>
                É de graça <img src={purpleHeartIcon} alt="Coração roxo" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
