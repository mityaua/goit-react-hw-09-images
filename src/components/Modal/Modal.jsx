import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

// import styles from './Modal.module.scss';

const useStyles = createUseStyles({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

  modal: {
    maxWidth: '100vw',
    maxHeight: '100vh',
  },
});

const modalRoot = document.querySelector('#modal-root');

// Компонент модального окна
export default function Modal({ children, onClose }) {
  const classes = useStyles();

  // Вешает слушатели (mount)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Убирает слушатети (unmount)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Наблюдает за Escape и закрывает модалку
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // Наблюдает за бекдропом и закрывает модалку
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={classes.overlay} onClick={handleBackdropClick}>
      <div className={classes.modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
