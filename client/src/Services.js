import React from 'react';

import HeroServices from './HeroServices.js';
import Servicesection from './Servicesection.js';
import Servicesweofferservices from './Servicesweofferservices.js';
import Working from './Working.js';
import StatsAndTestimonialsServices from './StatsAndTestimonialsServices.js';


const Services = () => {

  
  return (

    <section>
        <HeroServices/>
      <Servicesection/>
      <Servicesweofferservices/>
      <Working/>
      <StatsAndTestimonialsServices/>
    </section>
  )
}

export default Services