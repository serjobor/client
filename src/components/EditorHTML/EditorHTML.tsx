import { type FC } from 'react';
import styles from "./EditorHTML.module.css";

interface EditorHTMLProps {
  subject: string;
  body: string;
  onSubjectChange: (value: string) => void;
  onBodyChange: (value: string) => void;
}

const EditorHTML: FC<EditorHTMLProps> = ({ 
  subject,
  body,
  onSubjectChange,
  onBodyChange, 
}) => {
  return (
    <>
      <div className={styles.group}>
        <label htmlFor="text" className={styles.label}>
          Текст шаблона темы письма:
        </label>

        <input
          id="input"
          value={subject}
          onChange={e => onSubjectChange(e.target.value)}
          className={styles.input}
          placeholder="Введите текст шаблона темы письма..."
        />

        <label className={styles.label} htmlFor="html-textarea">
          Доступны HTML теги ( &lt;h1&gt; &lt;&#47;h1&gt; , &lt;p&gt; &lt;&#47;p&gt; , &lt;a  href=" " &gt;  &lt;&#47;a&gt;):
        </label>
        <textarea
          id="html-textarea"
          className={styles.textarea}
          value={body}
          onChange={e => onBodyChange(e.target.value)}
          placeholder="Введите html текст"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.previewLabel}>Предпросмотр:</label>
        <div
          className={styles.preview}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  );
}

export default EditorHTML;