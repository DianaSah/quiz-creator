import styles from './Input.module.scss';

export function Input({
  label,
  value,
  onChange
}) {
  return (
    <form>
      <label>{label}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      </label>
    </form>
  )
}