import React, { useState } from "react";
import "./AuthorizationPage.css";
import LogoSVG from "../../components/LogoSVG";
import { useNavigate } from "react-router-dom";

function AuthorizationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log("Попытка входа:", { email, password });
    navigate('/admin');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        <div className="auth-title">
          <LogoSVG/>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Введите пароль"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthorizationPage;