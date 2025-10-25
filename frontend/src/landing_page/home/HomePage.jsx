import React from 'react';
import Hero from './Hero';
// import Events from './Events'; // This component is empty, so we can comment it out for now.
import AboutUs from './AboutUs';   // This line is the one that was causing the error.

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      {/* <Events /> */}
    </div>
  );
};

export default HomePage;