import styles from "./SendNewEmailsPage.module.css";
import Header from "../../components/Header";
import SendEmails from "../../components/SendEmails";

function SendNewEmailsPage() {
  return (
    <div className={styles.container}>
      <Header roleName="отправления новых писем" />

      <div className={styles.content}>
        <SendEmails/>
      </div>
    </div>
  );
}

export default SendNewEmailsPage


/*
<div className={styles.card}>
          <form onSubmit={handleAddEmail} className={styles.formRow}>
            <input
              type="email"
              className={styles.input}
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.addBtn}>Добавить</button>
          </form>

          {emails.length > 0 && (
            <div className={styles.list}>
              {emails.map((e) => (
                <div key={e} className={styles.listItem}>
                  <span className={styles.emailText}>{e}</span>
                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={() => handleRemoveEmail(e)}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.button} ${styles.logoutbtn}`}
              onClick={handleLogout}
              disabled={isSending}
            >
              Назад
            </button>

            <button
              type="button"
              className={`${styles.button} ${styles.sendBtn}`}
              onClick={handleSend}
              disabled={isSending || emails.length === 0}
            >
              {isSending ? "Отправка..." : "Отправить"}
            </button>
        </div>
*/