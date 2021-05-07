import PropTypes from 'prop-types';
import SearchFrom from '../SearchForm';

import styles from './Searchbar.module.scss';

// Компонент бара в хедере
export default function Searchbar({ onSearch }) {
  return (
    <header className={styles.Searchbar}>
      <SearchFrom onSearch={onSearch} />
    </header>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
