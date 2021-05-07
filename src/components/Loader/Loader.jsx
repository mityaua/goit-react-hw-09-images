import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

// Компонент спиннера
export default function Loader() {
  return (
    <div className={styles.Loader}>
      <Template type="TailSpin" color="#02be6e" height={100} width={100} />
    </div>
  );
}
