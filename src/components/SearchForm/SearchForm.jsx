import PropTypes from 'prop-types';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    maxWidth: '600px',
    borderRadius: '3px',

    backgroundColor: '#fff',

    overflow: 'hidden',
  },

  button: {
    display: 'inline-block',

    width: '48px',
    height: '48px',
    border: 0,

    backgroundImage: 'url(https://image.flaticon.com/icons/svg/149/149852.svg)',
    backgroundSize: '40%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    opacity: 0.6,
    transition: [['opacity', '250ms', 'linear']],

    cursor: 'pointer',

    '&:hover, &:focus': {
      opacity: 1,
      transition: [['opacity', '250ms', 'linear']],
    },
  },

  label: {
    position: 'absolute',

    width: '1px',
    height: '1px',
    padding: 0,
    border: 0,

    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    clipPath: 'inset(50%)',

    overflow: 'hidden',
  },

  input: {
    display: 'inline-block',

    width: '100%',
    height: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    border: 'none',
    outline: 'none',

    font: 'inherit',
    fontSize: '1rem',

    '&::placeholder': {
      font: 'inherit',
      fontSize: '1rem',
    },
  },
});

// Компонент формы поиска
export default function SearchFrom({ onSearch }) {
  const classes = useStyles();

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
    <form className={classes.form} onSubmit={handleSubmit}>
      <button type="submit" className={classes.button}>
        <span className={classes.label}>Search</span>
      </button>

      <input
        className={classes.input}
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
