import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

// Компонент текстового уведомления
export default function Notice({ children }) {
  const classes = useStyles();

  return <div className={classes.text}>{children}</div>;
}

Notice.defaultProps = {
  children: [],
};

Notice.propTypes = {
  children: PropTypes.node,
};
