import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import SearchFrom from '../SearchForm';

const useStyles = createUseStyles({
  bar: {
    position: 'sticky',
    top: 0,
    left: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    minHeight: '64px',
    marginBottom: '16px',
    padding: '12px 24px',

    color: '#fff',
    backgroundColor: '#02be6e',
    boxShadow: [
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    ],

    zIndex: 1100,
  },
});

// Компонент бара в хедере
export default function Searchbar({ onSearch }) {
  const classes = useStyles();

  return (
    <header className={classes.bar}>
      <SearchFrom onSearch={onSearch} />
    </header>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
