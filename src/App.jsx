import { useState, useEffect, useCallback } from 'react';
import { createUseStyles } from 'react-jss';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoadMoreButton from './components/LoadMoreButton';
import Loader from './components/Loader';
import Notice from './components/Notice';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as CloseIcon } from './assets/images/icons/close.svg';
import { ReactComponent as HomeImage } from './assets/images/icons/empty.svg';

import fetchImages from './api/api-services';

const useStyles = createUseStyles({
  modalCloseContainer: {
    position: 'absolute',
    top: '20px',
    right: '40px',

    borderRadius: '50%',
  },

  modalImage: {
    width: 'auto',
    height: 'auto',
    maxHeight: '100vh',
  },
});

// Компонент приложения
export default function App() {
  const classes = useStyles();

  const [images, setImages] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [searchQuery, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);
  const [largeImage, setlargeImage] = useState('');
  const [error, setError] = useState(null);

  // Получает дату из фетча
  const getImages = async () => {
    setLoading(true);

    try {
      const { hits } = await fetchImages(searchQuery, currentPage);

      setImages(prev => [...prev, ...hits]);

      setPage(prevPage => prevPage + 1);

      if (currentPage > 1) {
        scrollOnLoadButton();
      }
    } catch (error) {
      console.log('Smth wrong with App fetch', error);
      setError({ error });
    } finally {
      setLoading(false);
    }
  };

  // Запрос за картинками при обновлении инпута
  useEffect(() => {
    if (!searchQuery) return;

    getImages();
    // eslint-disable-next-line
  }, [searchQuery]);

  // Принимает с формы запрос и пишет в стейт + сбрасывает после отправки стейт
  const onChangeQuery = useCallback(query => {
    setImages([]);
    setPage(1);
    setQuery(query);
    setLoading(false);
    setModal(false);
    setlargeImage('');
    setError(null);
  }, []);

  // Получает полное изображение, пишет его в стейт и открывает модалку
  const handleGalleryItem = useCallback(fullImageUrl => {
    setlargeImage(fullImageUrl);
    setModal(true);
  }, []);

  // Переключение модалки
  const toggleModal = useCallback(() => {
    setModal(prevModal => !prevModal);
  }, []);

  // Скролл при клике на кнопку
  const scrollOnLoadButton = () => {
    const { scrollTop, clientHeight } = document.documentElement;

    window.scrollTo({
      top: scrollTop + clientHeight,
      behavior: 'smooth',
    });
  };

  const needToShowLoadMore = images.length > 0 && images.length >= 12;

  return (
    <>
      <Searchbar onSearch={onChangeQuery} />

      {images.length < 1 && (
        <Notice>
          <h2>The gallery is empty</h2>

          <HomeImage width="200px" height="200px" />

          <p>Use search field!</p>
        </Notice>
      )}

      <ImageGallery images={images} onImageClick={handleGalleryItem} />

      {isLoading ? (
        <Loader />
      ) : (
        needToShowLoadMore && <LoadMoreButton onClick={getImages} />
      )}

      {error && (
        <Notice>
          <h2>Oops! 😫</h2>
          <p>
            Sorry, something went wrong. Please try again, or{' '}
            <a href="/">refresh the page</a>.
          </p>
        </Notice>
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <div className={classes.modalCloseContainer}>
            <IconButton onClick={toggleModal} aria-label="Close modal window">
              <CloseIcon width="20px" height="20px" fill="#02be6e" />
            </IconButton>
          </div>

          <img src={largeImage} alt="" className={classes.modalImage} />
        </Modal>
      )}
    </>
  );
}
