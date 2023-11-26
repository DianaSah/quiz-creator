import classNames from 'classnames';

import styles from './Button.module.scss';

export function Button({
  mode = 'secondary',
  children,
  onClick,
  className
}) {
  const hasPrimatyMode = mode === 'primary';

  return (
    <button
      className={classNames(styles.button, { 'primary': hasPrimatyMode }, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}