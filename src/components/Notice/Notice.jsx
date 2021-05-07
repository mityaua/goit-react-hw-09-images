import PropTypes from 'prop-types';
import styles from './Notice.module.scss';

// Компонент текстового уведомления
export default function Notice({ children }) {
  return <div className={styles.Notice}>{children}</div>;
}

Notice.defaultProps = {
  children: [],
};

Notice.propTypes = {
  children: PropTypes.node,
};
