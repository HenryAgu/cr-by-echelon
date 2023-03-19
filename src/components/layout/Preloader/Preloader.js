import React from 'react';

// stylesheet
import './Preloader.css';

// image
import preloadImage from '../../../img/single-logo.png';
const Preloader = () => {
  return (
    <div className='preload'>
            <img src={preloadImage} alt="" />
    </div>
  )
}

export default Preloader