import PropTypes from 'prop-types';
import styles from './Button.module.scss';

// Компонент кнопки "Загрузить еще"
export default function Button({ onClick }) {
  return (
    <div className={styles['Button-wrapper']}>
      <button type="button" className={styles.Button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
