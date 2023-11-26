import styles from './Answer.module.scss';

export function Answer({
  text,
  is_true
}) {
  return (
    <div className={styles.container}>
      <span>{text}</span>
      
    </div>
  )
}