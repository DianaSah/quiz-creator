import styles from './Button.module.scss';

export function Button({
  children,
  onClick
}) {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  )
}