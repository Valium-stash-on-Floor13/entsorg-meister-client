import Hero from './Hero.js';
import Perks from'./Perks.js';
import Process from'./Process.js';
import Choose from './Choose.js';
import StatsAndTestimonials from './StatsAndTestimonials.js';

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function Home() {
  return (
<>
    
      <Hero/>
      <Perks/>
      <Process/>
      <StatsAndTestimonials/>
      <Choose/>
      </>
  );
}

export default Home;
