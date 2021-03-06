import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Style from '../../../styles/GalleryItem'

const GalleryItem = ({id, source, thumbnail, caption, description, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (<Style key={id} className="6u 12u$(xsmall) work-item">
        <a
        className="image fit thumb"
        href={source}
        onClick={onClick}
        >
        <img src={thumbnail} />
        </a>

        <h3>{caption}</h3>
        <p>{description}</p>
    </Style>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem
