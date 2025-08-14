import React, { useContext, useState } from "react";
import styles from "./AuthorizationPage.module.css";
import LogoSVG from "../../components/LogoSVG";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const ROLE = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
} as const;

function AuthorizationPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { authStore } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log("Попытка входа:", { email, password });

    await authStore.login(email, password);
    
    if (authStore.role === ROLE.ADMIN) {
      console.log("переход на страницу AdminPage");
      navigate('/admin');
    }
    else if (authStore.role === ROLE.MANAGER) {
      console.log("переход на страницу ManagerPage");
      navigate('/manager');
    }
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