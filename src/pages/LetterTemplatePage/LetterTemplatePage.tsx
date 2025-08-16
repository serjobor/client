import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LetterTemplatePage.module.css";
import Header from "../../components/Header";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import EditorHTML from "../../components/EditorHTML";

function LetterTemplatePage() {
  const navigate = useNavigate();
  const { adminStore } = useContext(Context);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Здесь будет логика сохранения текста шаблона письма
    console.log("Попытка сохранения шаблона темы письма:", adminStore.templateSubject);
    console.log("Попытка сохранения шаблона тела письма:", adminStore.templateBody);
    
    try {
      await adminStore.saveLetterTemplate(adminStore.templateSubject, adminStore.templateBody);
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
            
          <EditorHTML
            subject={adminStore.templateSubject}
            body={adminStore.templateBody}
            onSubjectChange={value => adminStore.setTemplateSubject(value)}
            onBodyChange={value => adminStore.setTemplateBody(value)}
          />
            
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