import styles from "./ResponseCandidatePage.module.css";
import LogoSVG from "../../components/LogoSVG";
import SuccessСheckmark from "../../components/SuccessСheckmark";
//https://air.inno.tech/app/pdpa/confirmation - референс
function ResponseCandidatePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LogoSVG />
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <SuccessСheckmark />
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Ваш ответ был успешно отправлен. Спасибо!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponseCandidatePage;