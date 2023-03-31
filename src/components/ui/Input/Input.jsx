import styles from './Input.module.css';

const Input = ({ type, onChange }) => {
  return <input className={styles.input} type={type} onChange={onChange} />;
};

export default Input;
