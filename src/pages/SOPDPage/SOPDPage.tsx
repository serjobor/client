import React, { useState } from "react";
import "./SOPDPage.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function SOPDPage() {
  const navigate = useNavigate();
  const [sopdText, setSopdText] = useState(`
Я,  ____________________, даю согласие на обработку моих персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».

Настоящее согласие дается мной на обработку следующих персональных данных:
- Фамилия, имя, отчество
- Дата рождения
- Контактный телефон
- Адрес электронной почты

Цели обработки персональных данных:
- Рассмотрение кандидатуры для трудоустройства
- Проведение собеседований и тестирования
- Принятие решения о трудоустройстве
- Ведение кадрового учета

Согласие дается на срок действия трудовых отношений, а также на срок хранения документов в соответствии с законодательством РФ.

Я подтверждаю, что ознакомлен с правами субъекта персональных данных, установленными главой 3 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».`);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Здесь будет логика сохранения текста СОПД
    // console.log("Сохранение текста СОПД:", sopdText);
    
    // Имитация сохранения
    setTimeout(() => {
      setIsLoading(false);
      alert("Текст СОПД успешно сохранен!");
      
      console.log("Возврат на страницу администратора после сохранения текста СОПД");
      navigate('/admin');
    }, 1000);

  };

  const handleBackToAdmin = () => {
    // Здесь будет логика возврата на страницу администратора
    console.log("Возврат на страницу администратора");
    navigate('/admin');
  };

  return (
    <div className="sopd-container">
      <Header roleName="администратора"/>

      <div className="sopd-content">
        <div className="sopd-card">
          <h2 className="sopd-card-title">Редактирование согласия на обработку персональных данных (СОПД)</h2>
          
          <form onSubmit={handleSave} className="sopd-form">
            <div className="sopd-form-group">
              <label htmlFor="sopd-text" className="form-label">
                Текст согласия на обработку персональных данных:
              </label>
              <textarea
                id="sopd-text"
                value={sopdText}
                onChange={(e) => setSopdText(e.target.value)}
                className="sopd-textarea"
                placeholder="Введите текст согласия на обработку персональных данных..."
                rows={20}
              />
            </div>
            
            <div className="sopd-buttons">
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

export default SOPDPage;