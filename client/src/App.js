import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useTranslation } from 'react-i18next'
// import i18next from 'i18next'
import cookies from 'js-cookie'


import Header from './Header.js';
import Pay from './Pay.js';
import ScrollToTop from './ScrollToTop.js';
import Home from './Home.js';
import Location from './Location.js';
import Services from'./Services.js';
import Blogs from'./Blogs.js';
import Blog from'./Blog.js';
import Contact from'./Contact.js';
import Impressum from'./Impressum.js';
import TnC from'./TnC.js';
import Quote from'./Quote.js';
import Footer from './Footer.js';
import Error404 from './Error404.js';

import PrivacyPolicy from './PrivacyPolicy.js';


const languages = [
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'Deutsch',
    dir: 'rtl',
    country_code: 'sa',
  },
]


function App() {

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()



  useEffect(() => {
    console.log('Setting page stuff')
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    
    <Router>
     <ScrollToTop/>
      <Header/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/service/:servicename" element={<Services/>} />
 
  {/* <Route path="/service" element={<Service/>} />
  <Route path="/locations" element={<Locations/>} /> */}
  <Route path="/location/:locationname" element={<Location/>} />
  <Route path="/blogs" element={<Blogs/>} />
  <Route path="/blog" element={<Blog/>} />
  <Route path="/get-a-quote" element={<Quote/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/impressum" element={<Impressum/>} />
  <Route path="/tnc" element={<TnC/>} />
  <Route path="/pay" element={<Pay/>} />
  <Route path="/privacy" element={<PrivacyPolicy/>} />
  <Route path="*" element={<Error404/>} />
</Routes>
<Footer/>
    </Router>

    
  );
}

export default App;
