import classNames from 'classnames';

import styles from './Button.module.scss';

export function Button({
  mode = 'secondary',
  children,
  onClick
}) {
  const hasPrimatyMode = mode === 'primary';

  return (
    <button className={classNames(styles.button, { 'primary': hasPrimatyMode })} onClick={onClick}>
      {children}
    </button>
  )
}