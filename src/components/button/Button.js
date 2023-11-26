import classNames from 'classnames';

import styles from './Button.module.scss';

export function Button({
  className,
  mode = 'secondary',
  type = 'button',
  children,
  onClick,
}) {
  const hasPrimatyMode = mode === 'primary';

  return (
    <button
      className={classNames(styles.button, { 'primary': hasPrimatyMode }, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}