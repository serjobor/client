import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LetterTemplatePage.module.css";
import Header from "../../components/Header";

function LetterTemplatePage() {
  const navigate = useNavigate();
  const [letterTemplate, setLetterTemplate] = useState(`Привет!

ООО «ГК Иннотех» является разработчиком программного обеспечения для собственных нужд и партнеров.

При организации разработки программного обеспечения мы обрабатываем персональные данные лиц, приглашаемых к участию и/или участвующих в разработке ПО, включая как потенциальных кандидатов, так и собственных работников, и представителей сторонних подрядчиков.

Обработка персональных данных осуществляется на условиях политики конфиденциальности, с которой можно ознакомиться здесь:
{ССЫЛКА НА УСЛОВИЯ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ}

Для выполнения требований законодательства РФ в области обработки персональных данных, предлагаем Вам дать согласие на обработку персональных данных: 

{ССЫЛКА НА ДОКУМЕНТ}

нажав соответствующую кнопку ниже.

С уважением, команда Холдинга Т1

---
Письмо отправлено автоматически из системы подбора персонала. Пожалуйста, не отвечайте на него.
  `);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Здесь будет логика сохранения текста шаблона письма
    console.log("Сохранение шаблона письма:", letterTemplate);
    
    // Имитация сохранения
    setTimeout(() => {
      setIsLoading(false);
      alert("Шаблон письма успешно сохранен!");
      // После сохранения можно перейти обратно на страницу администратора
      navigate('/admin');
    }, 1000);
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
                Текст шаблона письма:
              </label>

              <textarea
                id="text"
                value={letterTemplate}
                onChange={(e) => setLetterTemplate(e.target.value)}
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
                Выйти
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

export default LetterTemplatePage;