import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    boxShadow: [
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    ],
  },
  image: {
    width: '100%',
    height: '260px',
    borderRadius: '2px',

    objectFit: 'cover',

    opacity: 1,
    transition: [['all', '250ms', 'linear']],

    '&:hover, &:focus': {
      opacity: 0.9,
      transform: 'scale(1.02)',
      transition: [['all', '250ms', 'linear']],

      cursor: 'zoom-in',
    },
  },
});

// Компонент одного изображения
export default function ImageGalleryItem({ image, onImageClick }) {
  const classes = useStyles();

  const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <li className={classes.item}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={classes.image}
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
