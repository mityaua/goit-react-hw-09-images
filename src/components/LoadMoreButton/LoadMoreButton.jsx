import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  button: {
    display: 'inline-block',
    minWidth: '150px',
    padding: '8px 0',
    borderRadius: '2px',
    border: 0,

    color: '#fff',
    backgroundColor: '#02be6e',
    boxShadow: [
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    ],

    fontSize: '18px',
    fontWeight: 500,

    opacity: 1,
    transition: [['opacity', '250ms', 'linear']],

    cursor: 'pointer',

    '&:hover': {
      opacity: 0.8,
      transition: [['opacity', '250ms', 'linear']],
    },
  },
});

// Компонент кнопки "Загрузить еще"
export default function LoadMoreButton({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <button type="button" className={classes.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
