import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

// Компонент одного изображения
export default function ImageGalleryItem({ image, onImageClick }) {
  const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles['ImageGalleryItem-image']}
        onClick={fullImage}
      />
    </li>
  );
}

ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};
