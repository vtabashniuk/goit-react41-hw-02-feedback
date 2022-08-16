import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
