import styles from "./SentEmailsPage.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

type CandidateInfo = {
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: string; // ISO date string YYYY-MM-DD
  phone: string;
  email: string;
};

export type EmailStatus = "Ожидание" | "Согласие" | "Отказ";

type SentEmailRecord = {
  recipientEmail: string;
  sentAt: string; // ISO datetime string
  status: EmailStatus;
  candidate: CandidateInfo;
};

const sampleData: SentEmailRecord[] = [
  {
    recipientEmail: "ivan.petrov@example.com",
    sentAt: new Date().toISOString(),
    status: "Ожидание",
    candidate: {
      lastName: "Петров",
      firstName: "Иван",
      middleName: "Сергеевич",
      birthDate: "1995-04-12",
      phone: "+7 (999) 123-45-67",
      email: "ivan.petrov@example.com",
    },
  },
  {
    recipientEmail: "maria.sidorova@example.com",
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    status: "Согласие",
    candidate: {
      lastName: "Сидорова",
      firstName: "Мария",
      middleName: "Ильинична",
      birthDate: "1998-09-30",
      phone: "+7 (912) 222-33-44",
      email: "maria.sidorova@example.com",
    },
  },
  {
    recipientEmail: "pavel.ivanov@example.com",
    sentAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    status: "Отказ",
    candidate: {
      lastName: "Иванов",
      firstName: "Павел",
      middleName: "Алексеевич",
      birthDate: "1992-01-20",
      phone: "+7 (915) 777-88-99",
      email: "pavel.ivanov@example.com",
    },
  },
];

function formatDateTime(value: string) {
  try {
    return new Date(value).toLocaleString("ru-RU", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return value;
  }
}

function getStatusClass(status: EmailStatus) {
  if (status === "Согласие") return styles.statusApproved;
  if (status === "Отказ") return styles.statusDeclined;
  return styles.statusWaiting;
}

function SentEmailsPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/manager");
  };

  return (
    <div className={styles.container}>
    <Header roleName="просмотра статуса отправленных писем"/>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Email кандидата</th>
                  <th>Дата и время отправки</th>
                  <th>Статус</th>
                  <th>Детали кандидата</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.recipientEmail}</td>
                    <td>{formatDateTime(row.sentAt)}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${getStatusClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <div className={styles.candidateCell}>
                        <div className={styles.candidateLine}>
                          <span className={styles.label}>ФИО:</span>
                          <span>
                            {row.candidate.lastName} {row.candidate.firstName} {row.candidate.middleName}
                          </span>
                        </div>
                        <div className={styles.candidateLine}>
                          <span className={styles.label}>Дата рождения:</span>
                          <span>{new Date(row.candidate.birthDate).toLocaleDateString("ru-RU")}</span>
                        </div>
                        <div className={styles.candidateLine}>
                          <span className={styles.label}>Телефон:</span>
                          <span>{row.candidate.phone}</span>
                        </div>
                        <div className={styles.candidateLine}>
                          <span className={styles.label}>Email:</span>
                          <span>{row.candidate.email}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button className={styles.logoutbtn} onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default SentEmailsPage