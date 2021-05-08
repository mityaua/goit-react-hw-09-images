import Template from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  loader: {
    display: 'grid',
    placeContent: 'center',
  },
});

// Компонент спиннера
export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <Template type="TailSpin" color="#02be6e" height={100} width={100} />
    </div>
  );
}
