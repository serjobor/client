// import { useState } from "react";
import styles from "./RequestCandidateSOPDPage.module.css";
import LogoSVG from "../../components/LogoSVG";
import { useNavigate } from "react-router-dom";

function RequestCandidateSOPDPage() {
  // const [isAgreed, setIsAgreed] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleAgree = () => {
    // setIsAgreed(true);
    // Здесь будет логика обработки согласия
    console.log("Пользователь согласился на обработку персональных данных");
    // Переходим на страницу подтверждения
    navigate('/success');
  };

  const handleDecline = () => {
    // setIsAgreed(false);
    // Здесь будет логика обработки отказа
    console.log("Пользователь отказался от обработки персональных данных");
    // Можно добавить навигацию на страницу с объяснением последствий
    navigate('/success');
  };

  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <LogoSVG/>
        </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.greeting}>Привет!</h1>
            
            <p>
              ООО «ГК Иннотех» является разработчиком программного обеспечения для собственных нужд и партнеров.
            </p>
            
            <p>
              При организации разработки программного обеспечения мы обрабатываем персональные данные лиц, приглашаемых к участию и/или участвующих в разработке ПО, включая как потенциальных кандидатов, так и собственных работников, и представителей сторонних подрядчиков.
            </p>
            
            <p>
              Обработка персональных данных осуществляется на условиях политики конфиденциальности, с которой можно ознакомиться <a href="https://inno.tech/ru/data/privacy_policy/#navigation-id9" className={styles.link}>здесь</a>.
            </p>
            
            <p>
              Для выполнения требований законодательства РФ в области обработки персональных данных, предлагаем Вам дать согласие на обработку персональных данных (<a href="https://air.inno.tech/docs/AIR_personal_data_agreement_20240904.docx" className={styles.link}>см. здесь</a>), нажав соответствующую кнопку ниже.
            </p>
          </div>

          <div className={styles.buttons}>
            <button 
              type="button" 
              className={`${styles.button} ${styles.decline}`}
              onClick={handleDecline}
            >
              Отказаться
            </button>

            <button 
              type="button" 
              className={`${styles.button} ${styles.agree}`}
              onClick={handleAgree}
            >
              Согласиться
            </button>
          </div>

          <div className={styles.signature}>
            <p>С уважением, команда Холдинга Т1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCandidateSOPDPage;