import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import resume from '../constants/defaultImages'

const Resume = ({resume}) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

        return (
          <GalleryItem
            id={resume.id}
            source={resume.source}
            thumbnail={resume.thumbnail}
            caption={resume.caption}
            description={resume.description}
            position={resume.position}
            toggleLightbox={resume.toggleLightbox}
            toggleLightbox={toggleLightbox}
            />);
        })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel views={resume} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Resume'


export default Resume
