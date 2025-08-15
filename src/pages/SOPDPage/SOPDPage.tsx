import React, { useContext, useState } from "react";
import styles from "./SOPDPage.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

function SOPDPage() {
  const navigate = useNavigate();
  const { adminStore } = useContext(Context);
  const [sopdText, setSopdText] = useState(adminStore.sopdText);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Здесь будет логика сохранения текста СОПД
    console.log("Попытка сохранения текста СОПД:", sopdText);
    try {
      await adminStore.saveSOPDText(sopdText);
      navigate('/admin');
    } catch (error) {
      console.log("Попытка сохранения текста СОПД НЕ удалась!", error);
      alert("Попытка сохранения текста СОПД НЕ удалась!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToAdmin = () => {
    // Здесь будет логика возврата на страницу администратора
    console.log("Возврат на страницу администратора");
    navigate('/admin');
  };

  return (
    <div className={styles.container}>
      <Header roleName="администратора"/>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.title}>Редактирование согласия на обработку персональных данных (СОПД)</h2>
          
          <form onSubmit={handleSave} className={styles.form}>
            <div className={styles.group}>
              <label htmlFor="text" className={styles.label}>
                Текст согласия на обработку персональных данных:
              </label>
              <textarea
                id="text"
                value={sopdText}
                onChange={(e) => setSopdText(e.target.value)}
                className={styles.textarea}
                placeholder="Введите текст согласия на обработку персональных данных..."
                rows={20}
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

export default observer(SOPDPage);


/*
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

Я подтверждаю, что ознакомлен с правами субъекта персональных данных, установленными главой 3 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».
*/