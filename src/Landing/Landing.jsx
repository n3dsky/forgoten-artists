import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ArtistsSwiper from './ArtistsSwiper.jsx';

import porn from './images/Ellipse_up.png'
import CircleMenu from './CircleMenu.jsx';

const Landing = () => {
  return (
    <div>
    <Header />
    <ArtistsSwiper />
    {/* <CircleMenu /> */}
    <Footer />
    </div>
  );
};

export default Landing;