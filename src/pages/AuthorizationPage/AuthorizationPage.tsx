import React, { useState } from "react";
import styles from "./AuthorizationPage.module.css";
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
    <div className={styles.container}>
      <div className={styles.card}>
        
        <div className={styles.title}>
          <LogoSVG/>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Введите пароль"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthorizationPage;