import { Link } from "react-router-dom";
import React, {useState} from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'


const Header = () => {
   const [open, setOpen] = useState(false);
   const [lang, setLang] = useState('de');

   const { t } = useTranslation()
   const setLingo = (event) => {
    i18next.changeLanguage(event.target.value)
    setLang(event.target.value)
   }
   
    const handleToggle = () => {
      setOpen(!open)
    }
  
  return (

<nav className="relative">

<div className="fixed sticky-quote block bottom-[100px] right-[20px] z-[9999]">
  <button className="stickyshadow transition-all  hover:bg-[#ff9d1d] bg-[#FFAD00] py-2 font-semibold px-8 rounded-lg text-sm text-white" ><Link to="/get-a-quote">{t('get-a-quote')}</Link></button>
  </div>

  <div className="contact-us bg-orange-950 flex  justify-around items-center w-[300px] mx-auto py-[8px] px-[20px] text-white font-bold text-sm text-center">
  <a href="tel:167676786876786"><img  src="./images/phoneicon.png" className="w-[30px] cursor-pointer"  alt="" /> </a><span className=" font-semibold text-lg">0800 - 70 111 77</span><button className="hover:shadow hover:shadow-md hover:shadow-white/300" onClick={() =>   navigator.clipboard.writeText('08007011177')}>
<img className="cursor-pointer w-[30px]" src="./images/copyicon.png" alt="" /></button>
  </div>
 
  <div className="nav-desk max-w-7xl mx-auto navbar py-4 px-3 flex justify-around items-center">
    
     <Link to="/"> <img className=" logo-image h-[20px] sm:h-[26px]" src="./images/logo.png" alt="" /></Link>
    <ul className="nav-ul flex list-none text-base justify-between items-center semibold w-[460px]">
    
      <li className="transition-all hover:text-[#FFAD00] text-[#10152E] cursor-pointer mr-[28px] font-semibold"><Link to="/">{t('home')}</Link></li>
      <li className=" relative transition-all hover:text-[#FFAD00] text-[#10152E] cursor-pointer mr-[28px] font-semibold">{t('services')}<img className="inline-block w-[12px] ml-2" src="./images/arrow-down.png" alt="" />
      <ul className="submenu z-[999] bg-white w-[200px] text-[#575757] absolute  blackshadow flex flex-col items-start text-sm">    
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out">{t('clearing-out')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/House Clearance">{t('house-clearance')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Apartment Liquadation">{t('apartment-liquidation')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Dispose of Kitchen">{t('dispose-of-kitchen')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out the basement">{t('house-clearance')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out the attic">{t('clearing-out-the-basement')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Container Service">{t('clearing-out-the-attic')}</Link></li>
      </ul>
      </li>
      <li className="transition-all hover:text-[#FFAD00] text-[#10152E] cursor-pointer mr-[28px] font-semibold">{t('locations')} <img className="inline-block w-[12px] ml-2" src="./images/arrow-down.png" alt="" />
      <ul className="submenu z-[999] bg-white w-[250px] text-[#575757] absolute  blackshadow flex flex-col items-start text-sm">    
      
      

  <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Berlin and surroundings">{t('berlin')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Hamburg and surroundings">{t('hamburg')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Munich and surroundings">{t('munich')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Cologne  and surroundings">{t('cologne')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Frankfurt and surroundings">{t('frankfurt')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Stuttgart and surroundings">{t('stuttgart')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Düsseldorf and surroundings">{t('düsseldorf')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Leipzip and surroundings">{t('leipzip')}</Link></li>
<li className="py-2 w-[100%] px-[20px]"><Link to="/location/Dortmund and surroundings"> {t('dortmund')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Essen and surroundings">{t('essen')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bresmen and surroundings">{t('bresmen')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Dresden and surroundings">{t('dresden')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Hannover and surroundings">{t('hannover')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Nuremberg and surroundings">{t('nuremberg')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Duisburg and surroundings">{t('duisburg')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bochum and surroundings">{t('bochum')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Wuppertal and surroundings">{t('wuppertal')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bielefeld and surroundings">{t('bielefeld')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bonn and surroundings)">{t('bonn')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Münster and surroundings">{t('münster')}</Link></li>


      </ul>
      </li>
      <li className="transition-all mr-[30px] bg-[#10152E] py-0 border-solid border-2 px-3 font-semibold border-[#10152E] rounded-xl cursor-pointer  text-white hover:text-[#10152E] hover:bg-white "><Link to="/blogs">Blogs</Link></li>
  
    </ul>

<ul>
    <button className="nav-btn transition-all mr-[15px] shadow-lg shadow-[#0e59d3]-500/40 hover:shadow-[#5E94EB]/40 hover:bg-[#0e59d3] bg-[#5E94EB] py-2 font-semibold px-4 rounded-lg text-white" ><a href="tel:167676786876786"><img src="./images/phoneicon.png" className="w-[25px] inline mr-3"  alt="" />{t('give-us-a-call')}</a></button>
    
    <span className=" border-2 border-black bg-white-500 px-[4px] py-[3px]"> 
    {lang=='en'? <img className="inline-block w-[20px]" src="./images/en.png" alt="" />:<img className="inline-block w-[20px]"  src="./images/de.png" alt="" />}
 <select className="bg-white text-black font-semibold px-[4px] py-[3px] mb-[15px] text-sm" name="section" id="section" onChange={event => setLingo(event)} value={lang} >
                   <option className="w-[100%] px-[2px]" value="de" ><img src="./images/de.png" alt="" /> de</option>
                  <option  value="en"><img src="./images/en.png" alt="" /> en</option>
               
     
                 
                  
  </select> </span>

</ul>
 <button className="mob-btn hidden  transition-all shadow-lg shadow-[#0e59d3]-500/40 hover:shadow-[#5E94EB]/40 hover:bg-[#0e59d3] bg-[#5E94EB] py-2 font-semibold px-8 rounded-lg text-white" ><a href="tel:167676786876786"><img src="./images/phoneicon.png" className="w-[25px] inline mr-3"  alt="" /></a></button>
<button onClick={handleToggle} className="hamburger hidden">
 <img className="cursor-pointer w-[20px]" src="./images/hamburger-menu-icon.svg" alt="" />
 
</button>

<div className={`mob-nav-ham absolute z-[99] top-[0] bottom-[0] right-[0] left-[20%] bg-[#10152e] text-white h-[100vh] w-[80vw] ${open ? "" : "hidden"}`}>
<div className="flex"><img onClick={handleToggle} className="cursor-pointer absolute top-[20px] right-[20px] w-[20px]" src="./images/close.png" alt="" /></div>
<ul className="pt-[50px] pl-[50px] flex-col  list-none text-base justify-between items-center semibold w-[420px]">
  <li className="transition-all hover:text-[#FFAD00] text-[white] cursor-pointer mb-[10px] mr-[28px] font-semibold"><Link to="/">{t('home')}</Link></li>
      <li className=" relative transition-all hover:text-[#FFAD00] text-[white] cursor-pointer mb-[10px] mr-[28px] font-semibold">{t('services')}<img className="inline-block w-[12px] ml-2" src="./images/arrow-down.png" alt="" />
      <ul className="submenu z-[999] bg-white w-[200px] text-[#575757] absolute  blackshadow flex flex-col items-start text-sm">    
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out">{t('clearing-out')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/House Clearance">{t('house-clearance')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Apartment Liquadation">{t('apartment-liquidation')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Dispose of Kitchen">{t('dispose-of-kitchen')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out the basement">{t('house-clearance')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out the attic">{t('clearing-out-the-basement')}</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Container Service">{t('clearing-out-the-attic')}</Link></li>
      </ul>
      </li>
      <li className="transition-all hover:text-[#FFAD00] text-[white] cursor-pointer mr-[28px] font-semibold  mb-[10px]" >{t('locations')} <img className="inline-block w-[12px] ml-2" src="./images/arrow-down.png" alt="" />
      <ul className="submenu z-[999] bg-white w-[250px] text-[#575757] absolute  blackshadow flex flex-col items-start text-sm">    
      
      

  <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Berlin and surroundings">{t('berlin')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Hamburg and surroundings">{t('hamburg')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Munich and surroundings">{t('munich')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Cologne  and surroundings">{t('cologne')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Frankfurt and surroundings">{t('frankfurt')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Stuttgart and surroundings">{t('stuttgart')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Düsseldorf and surroundings">{t('düsseldorf')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Leipzip and surroundings">{t('leipzip')}</Link></li>
<li className="py-2 w-[100%] px-[20px]"><Link to="/location/Dortmund and surroundings"> {t('dortmund')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Essen and surroundings">{t('essen')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bresmen and surroundings">{t('bresmen')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Dresden and surroundings">{t('dresden')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Hannover and surroundings">{t('hannover')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Nuremberg and surroundings">{t('nuremberg')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Duisburg and surroundings">{t('duisburg')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bochum and surroundings">{t('bochum')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Wuppertal and surroundings">{t('wuppertal')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bielefeld and surroundings">{t('bielefeld')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Bonn and surroundings)">{t('bonn')}</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Münster and surroundings">{t('münster')}</Link></li>


      </ul>
      
      </li>
      <li className="transition-all hover:text-[#FFAD00] text-[white] cursor-pointer mr-[28px] font-semibold  mb-[10px]"><Link to="/blogs">Blogs</Link></li>

      
    </ul>

  
</div>
  </div>

</nav>
  )
}

export default Header
