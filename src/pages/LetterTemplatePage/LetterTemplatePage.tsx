import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LetterTemplatePage.css";
import Header from "../../components/Header/Header";

function LetterTemplatePage() {
  const navigate = useNavigate();
  const [letterTemplate, setLetterTemplate] = useState(`Привет!

Благодарим Вас за проявленный интерес к вакансии в нашей компании.

Мы рады сообщить, что Ваша кандидатура заинтересовала нас, и мы хотели бы продолжить процесс рассмотрения Вашего резюме.

Для дальнейшего рассмотрения Вашей кандидатуры, пожалуйста, перейдите по следующей ссылке и заполните регистрационные данные:

{ССЫЛКА_НА_РЕГИСТРАЦИЮ}

После перехода по ссылке Вам необходимо будет:

1. Заполнить регистрационную форму с вашими персональными данными
2. Ознакомиться с текстом согласия на обработку персональных данных
3. Принять решение о согласии или отказе от обработки персональных данных

Обращаем Ваше внимание, что обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».

Если у Вас возникнут вопросы по заполнению формы или обработке персональных данных, пожалуйста, свяжитесь с нами:

С уважением, команда Холдинга Т1

---
Данное письмо отправлено автоматически. Пожалуйста, не отвечайте на него.
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