import styles from './Answer.module.scss';

export function Answer({
  text,
  is_true,
  mode
}) {
  return (
    <div className={styles.container}>
      {/* <span>{text}</span> */}
      <label>
        <input
          type="radio"
          value={text}
          checked={is_true}
          // onChange={this.onValueChange}
        />
        {text}
        {mode === 'edit' && 
          <input
            type="text"
            // value={answer.text}
            placeholder='Enter answer text'
            // onChange={(e) => setNewQuiz({...data, answers: e.target.value})}
          />
        }
        
      </label>
    </div>
  )
}