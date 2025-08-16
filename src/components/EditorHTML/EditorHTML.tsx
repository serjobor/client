import { useState, type FC } from 'react';
import styles from "./EditorHTML.module.css";

interface EditorHTMLProps {
  subject: string;
  body: string;
}

const EditorHTML: FC<EditorHTMLProps> = (
  { subject, body }
) => {

  const [htmlSubject, setHtmlSubject] = useState(subject);
  const [htmlBody, setHtmlBody] = useState(body);

  return (
    <>
      <div className={styles.group}>
        <label htmlFor="text" className={styles.label}>
          Текст шаблона темы письма:
        </label>

        <input
          id="input"
          value={htmlSubject}
          onChange={(e) => setHtmlSubject(e.target.value)}
          className={styles.input}
          placeholder="Введите текст шаблона темы письма..."
        />

        <label className={styles.label} htmlFor="html-textarea">
          Доступны HTML теги ( &lt;h1&gt; &lt;&#47;h1&gt; , &lt;p&gt; &lt;&#47;p&gt; , &lt;a  href=" " &gt;  &lt;&#47;a&gt;):
        </label>
        <textarea
          id="html-textarea"
          className={styles.textarea}
          value={htmlBody}
          onChange={e => setHtmlBody(e.target.value)}
          placeholder="Введите html текст"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.previewLabel}>Предпросмотр:</label>
        <div
          className={styles.preview}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: htmlBody }}
        />
      </div>
    </>
  );
}

export default EditorHTML;