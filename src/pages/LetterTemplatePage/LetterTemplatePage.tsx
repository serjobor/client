import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LetterTemplatePage.css";
import Header from "../../components/Header/Header";

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
    <div className="letter-template-container">
      <Header roleName="администратора"/>

      <div className="letter-template-content">
        <div className="letter-template-card">
          <h2 className="letter-template-card-title">Редактирование шаблона письма для отправки кандидатам</h2>
          
          <form onSubmit={handleSave} className="letter-template-form">
            <div className="letter-form-group">
              <label htmlFor="letter-template-text" className="form-label">
                Текст шаблона письма:
              </label>

              <textarea
                id="letter-template-text"
                value={letterTemplate}
                onChange={(e) => setLetterTemplate(e.target.value)}
                className="letter-template-textarea"
                placeholder="Введите текст шаблона письма..."
                rows={25}
              />
            </div>
            
            <div className="letter-template-buttons">
              <button 
                type="button" 
                onClick={handleBackToAdmin}
                className="back-button"
                disabled={isLoading}
              >
                Выйти
              </button>
              
              <button 
                type="submit" 
                className="save-button"
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