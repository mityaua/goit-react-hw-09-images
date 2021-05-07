import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './SearchForm.module.scss';

// Компонент формы поиска
export default function SearchFrom({ onSearch }) {
  const [query, setQuery] = useState('');

  // Наблюдает за инпутом и пишет значние в стейт
  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  // Наблюдает за отправкой и отдает значение во внешний компонент
  const handleSubmit = e => {
    e.preventDefault();

    // Запрещает отправку пустого инпута
    if (!query.trim()) return;

    // Отдать данные внешнему компоненту
    onSearch(query);

    resetForm();
  };

  // Сбрасывает поле после отправки
  const resetForm = () => setQuery('');

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles['SearchForm-button']}>
        <span className={styles['SearchForm-button-label']}>Search</span>
      </button>

      <input
        className={styles['SearchForm-input']}
        type="text"
        name="query"
        value={query}
        onChange={handleSearchInput}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
