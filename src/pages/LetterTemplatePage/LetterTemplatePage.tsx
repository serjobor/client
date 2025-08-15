import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LetterTemplatePage.module.css";
import Header from "../../components/Header";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

function LetterTemplatePage() {
  const navigate = useNavigate();
  const { adminStore } = useContext(Context);
  const [templateSubject, setTemplateSubject] = useState(adminStore.templateSubject);
  const [templateBody, setTemplateBody] = useState(adminStore.templateBody);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Здесь будет логика сохранения текста шаблона письма
    console.log("Попытка сохранения шаблона темы письма:", templateSubject);
    console.log("Попытка сохранения шаблона тела письма:", templateBody);
    
    try {
      await adminStore.saveLetterTemplate(templateSubject, templateBody);
      console.log("Попытка сохранения шаблона письма удалась!");
      navigate('/admin');
    } catch (error) {
      console.log("Попытка сохранения шаблона письма НЕ удалась!", error);
      alert("Попытка сохранения шаблона письма НЕ удалась!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToAdmin = () => {
    // Навигация обратно на страницу администратора
    console.log("Возврат на страницу администратора");
    navigate('/admin');
  };

  return (
    <div className={styles.container}>
      <Header roleName="администратора"/>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.title}>Редактирование шаблона письма для отправки кандидатам</h2>
          
          <form onSubmit={handleSave} className={styles.form}>
            <div className={styles.group}>
              <label htmlFor="text" className={styles.label}>
                Текст шаблона темы письма:
              </label>

              <input
                id="input"
                value={templateSubject}
                onChange={(e) => setTemplateSubject(e.target.value)}
                className={styles.input}
                placeholder="Введите текст шаблона темы письма..."
              />

              <label htmlFor="text" className={styles.label}>
                Текст шаблона письма:
              </label>

              <textarea
                id="text"
                value={templateBody}
                onChange={(e) => setTemplateBody(e.target.value)}
                className={styles.textarea}
                placeholder="Введите текст шаблона письма..."
                rows={25}
              />
            </div>
            
            <div className={styles.buttons}>
              <button 
                type="button" 
                onClick={handleBackToAdmin}
                className={styles.exit}
                disabled={isLoading}
              >
                Назад
              </button>
              
              <button 
                type="submit" 
                className={styles.save}
                disabled={isLoading}
              >
                {isLoading ? "Сохранение..." : "Сохранить"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default observer(LetterTemplatePage);

/*
Привет!

Перейди пожалуйста по ссылке: {УНИКАЛЬНАЯ ССЫЛКА ДЛЯ КАНДИДАТА}

С уважением, команда Холдинга Т1

---
Письмо отправлено автоматически из системы подбора персонала. Пожалуйста, не отвечайте на него.

*/