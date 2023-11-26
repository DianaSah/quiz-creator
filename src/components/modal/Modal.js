import ReactModal from 'react-modal';
import { Button } from '../button/Button';
import { AnswersList } from '../answersList/AnswersList';

import styles from './Modal.module.scss';

export function Modal({
  mode = 'create',
  onClose,
  onSave,
  data,
  setNewQuiz,
  ...props
}) {

  const header = mode === 'create'
    ? 'Create new quiz question/answer form'
    : 'Edit';

  return (
    <ReactModal {...props} onRequestClose={onClose}>
      <div className={styles.header}>{header}</div>
      <input
        type="text"
        value={data.text}
        placeholder='Enter Question text'
        onChange={(e) => setNewQuiz({...data, text: e.target.value})}
      />
      <div>
        <AnswersList data={data.answers} />
      </div>

      <div className={styles.footer}>
        <Button onClick={onClose}>Discard</Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </ReactModal>
  )
}
