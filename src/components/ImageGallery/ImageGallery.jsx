import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import ImageGalleryItem from '../ImageGalleryItem';

const useStyles = createUseStyles({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: '16px',

    margin: [0, 'auto', '12px'],
    padding: 0,
    maxWidth: 'calc(100vw - 48px);',

    listStyle: 'none',
  },
});

// Компонент списка изображений
export default function ImageGallery({ images, onImageClick }) {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onImageClick={onImageClick}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onImageClick: PropTypes.func.isRequired,
};
