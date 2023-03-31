import styles from './Button.module.css';

const Button = ({ children, isActive = false, onClick, btnStyles }) => {
  const { generalStyles, isActiveStyles } = btnStyles;

  return (
    <button
      onClick={onClick}
      className={
        isActive ? `${styles.button} ${styles.buttonActiveGold}` : styles.button
      }
      style={isActive ? { ...generalStyles, ...isActiveStyles } : generalStyles}
    >
      {children}
    </button>
  );
};

export default Button;
