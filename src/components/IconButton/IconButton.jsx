import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 0,
    border: 'none',

    backgroundColor: 'transparent',

    cursor: 'pointer',

    '& svg': {
      transition: [['fill', '250ms', 'linear']],
    },

    '& svg:hover, & svg:focus': {
      fill: '#a7adab',
    },
  },
});

// Компонент кнопки-иконки
export default function IconButton({ children, onClick, ...allyProps }) {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={classes.button}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
