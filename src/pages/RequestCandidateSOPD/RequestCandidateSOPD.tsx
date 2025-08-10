import React, { useState } from "react";
import "./RequestCandidateSOPD.css";
import LogoSVG from "../../components/LogoSVG";
import { useNavigate } from "react-router-dom";

function RequestCandidateSOPD() {
  const [isAgreed, setIsAgreed] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleAgree = () => {
    setIsAgreed(true);
    // Здесь будет логика обработки согласия
    console.log("Пользователь согласился на обработку персональных данных");
    // Переходим на страницу регистрации
    navigate('/');
  };

  const handleDecline = () => {
    setIsAgreed(false);
    // Здесь будет логика обработки отказа
    console.log("Пользователь отказался от обработки персональных данных");
    // Можно добавить навигацию на страницу с объяснением последствий
    navigate('/');
  };

  return (
    <div className="candidate-container">
        <div className="candidate-title">
          <LogoSVG/>
        </div>
      <div className="candidate-card">
        <div className="candidate-content">
          <div className="candidate-text">
            <h1 className="candidate-greeting">Привет!</h1>
            
            <p>
              ООО «ГК Иннотех» является разработчиком программного обеспечения для собственных нужд и партнеров.
            </p>
            
            <p>
              При организации разработки программного обеспечения мы обрабатываем персональные данные лиц, приглашаемых к участию и/или участвующих в разработке ПО, включая как потенциальных кандидатов, так и собственных работников, и представителей сторонних подрядчиков.
            </p>
            
            <p>
              Обработка персональных данных осуществляется на условиях политики конфиденциальности, с которой можно ознакомиться <a href="https://inno.tech/ru/data/privacy_policy/#navigation-id9" className="candidate-link">здесь</a>.
            </p>
            
            <p>
              Для выполнения требований законодательства РФ в области обработки персональных данных, предлагаем Вам дать согласие на обработку персональных данных (<a href="https://air.inno.tech/docs/AIR_personal_data_agreement_20240904.docx" className="candidate-link">см. здесь</a>), нажав соответствующую кнопку ниже.
            </p>
          </div>

          <div className="candidate-buttons">
            <button 
              type="button" 
              className="candidate-button decline-button"
              onClick={handleDecline}
            >
              Отказаться
            </button>

            <button 
              type="button" 
              className="candidate-button agree-button"
              onClick={handleAgree}
            >
              Согласиться
            </button>
          </div>

          <div className="candidate-signature">
            <p>С уважением, команда Холдинга Т1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCandidateSOPD;