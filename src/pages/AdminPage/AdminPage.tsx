import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminPage.module.css";
import Header from "../../components/Header/Header";

function AdminPage() {
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
      navigate('/admin/sopd');
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
      navigate('/admin/letter');
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
      <Header roleName="администратора"/>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.title}>Управление документами</h2>
          
          <form onSubmit={handleSOPDNavigation} className={styles.form}>
            <div className={styles.description}>
              <h3>Согласие на обработку персональных данных (СОПД)</h3>
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={isLoading}
            >
              {isLoading ? "Загрузка..." : "Редактировать СОПД"}
            </button>
          </form>

          <form onSubmit={handleTemplateNavigation} className={styles.form}>
            <div className={styles.description}>
              <h3>Шаблон письма для отправки кандидату</h3>
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={isLoading}
            >
              {isLoading ? "Загрузка..." : "Редактировать шаблон"}
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

export default AdminPage;