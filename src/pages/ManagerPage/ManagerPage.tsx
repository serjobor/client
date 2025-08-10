import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ManagerPage.module.css";
import Header from "../../components/Header";

function ManagerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSOPDNavigation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Здесь будет логика перехода на страницу редактирования СОПД
    console.log("Переход на страницу редактирования СОПД");
    // Имитация загрузки
    setTimeout(() => {
      setIsLoading(false);
      // логика перехода на страницу редактирования СОПД
      navigate('/');
    }, 1000);
  };

  const handleTemplateNavigation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Здесь будет логика перехода на страницу редактирования шаблона
    console.log("Переход на страницу редактирования шаблона письма");
    // Имитация загрузки
    setTimeout(() => {
      setIsLoading(false);
      // логика перехода на страницу редактирования шаблона письма
      navigate('/');
    }, 1000);
  };

  const handleLogout = () => {
    // Здесь будет логика выхода из аккаунта
    console.log("Выход из аккаунта администратора");
    // Очистка токенов, редирект на страницу авторизации и т.д.
    navigate('/auth');
  };

  return (
    <div className={styles.container}>
      <Header roleName="менеджера"/>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.title}>Управление кандидатами</h2>
          
          <form onSubmit={handleSOPDNavigation} className={styles.form}>
            <div className={styles.description}>
              <h3>Просмотр отправленных писем</h3>
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={isLoading}
            >
              {isLoading ? "Загрузка..." : "Отправленные письма"}
            </button>
          </form>

          <form onSubmit={handleTemplateNavigation} className={styles.form}>
            <div className={styles.description}>
              <h3>Отправить новые письма кандидату/кандидатам</h3>
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={isLoading}
            >
              {isLoading ? "Загрузка..." : "Отправить письма"}
            </button>
          </form>
        </div>
      </div>

      <button 
          onClick={handleLogout} 
          className={styles.logoutbtn}
          disabled={isLoading}
        >
          Выйти
        </button>
    </div>
  );
}

export default ManagerPage;