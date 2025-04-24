import React, { useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ArtistsSwiper from './ArtistsSwiper.jsx';

import layer from './images/layer.png'


import './Landing.css'

const Landing = () => {
  const sliderRef = useRef(null);

  return (
    <div className='landing'>
      <img className='layer' src={layer} />
    <Header />
    <ArtistsSwiper ref={sliderRef}/>
    <Footer sliderRef={sliderRef}/>
    </div>
  );
};

export default Landing;