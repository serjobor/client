import styles from "./SendNewEmailsPage.module.css";
import Header from "../../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SendNewEmailsPage() {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleAddEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const isValid = /\S+@\S+\.\S+/.test(trimmed);
    if (!isValid) return;
    if (emails.includes(trimmed)) return;
    setEmails(prev => [...prev, trimmed]);
    setEmail("");
  };

  const handleRemoveEmail = (toRemove: string) => {
    setEmails(prev => prev.filter(e => e !== toRemove));
  };

  const handleSend = async () => {
    if (emails.length === 0) return;
    setIsSending(true);
    try {
      // TODO: интеграция с API
      console.log("Отправка писем:", emails);
      await new Promise(r => setTimeout(r, 1000));
      navigate("/manager");
    } finally {
      setIsSending(false);
    }
  };

  const handleLogout = () => {
    navigate("/manager");
  };

  return (
    <div className={styles.container}>
      <Header roleName="отправления новых писем" />

      <div className={styles.content}>
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
              Выйти
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
      </div>
    </div>
  );
}

export default SendNewEmailsPage