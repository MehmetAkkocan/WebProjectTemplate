import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { Navbar } from '../../components'

import './galleryP.css'

const directory = require.context("../../assets/gallery",false,/\.(png|jpe?g|svg)$/);
function getImagePaths(directory) {
  let imgs = [];
  directory.keys().map((item, index) => imgs.push(item.replace("./", "")));
  return imgs;
}
let images = [];
let imagePaths = getImagePaths(directory);
imagePaths.map((path) => images.push(require("../../assets/gallery/" + path)));

function GalleryP() {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }
  return (
    <div>
      <Navbar />
      {openModal &&
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={images[slideNumber]} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          images && images.map((slide, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default GalleryP