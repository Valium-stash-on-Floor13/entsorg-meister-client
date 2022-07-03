import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    const today=new Date();
  return (

    <footer >
        <svg className="mb-[-10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1943" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,128C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
       
       <div className="relative bg-[#1C1943] text-[#EBEBEB] pb-6">
           <div className="footer-uls flex justify-between py-10 px-5 max-w-7xl mx-auto">

            <ul className="footer-links list-none">
                <h4 className="text-base font-semibold mb-1 text-white" >{t('sitemap')}</h4>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/"> {t('home')}</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/service/Clearing out">{t('services')}</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/location/Aichen">{t('locations')}</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/blogs">Blogs</Link></li>
            </ul>

            <ul className="footer-links">
                <h4 className="text-base font-semibold mb-1 text-white">Info</h4>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/contact">{t('contact')}</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/impressum">Impressum</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/privacy">{t('privacy-policy')}</Link></li>
            </ul>

            <ul className="footer-links">
                <h4 className="text-base font-semibold mb-1 text-white">{t('reach-out')}</h4>
                <li className="footer-link mr-4 hover:underline md:mr-6"><a  href="tel:167676786876786"><img src="./images/phoneicon.png" className="w-[18px] cursor-pointer inline mr-2"  alt="" /> <span>+49 (0) 800 – 70 111 77</span></a></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><a href="mailto:services@entsorg-meister.com" ><img src="./images/mailicon.png" className="w-[18px] cursor-pointer inline mr-2"  alt="" /><span> info@entsorg-meister.de</span></a></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><img src="./images/clockicon.png" className="w-[18px] cursor-pointer inline mr-2"  alt="" /> <span>{t('everyday')} || 8 AM – 8 PM</span></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"> <a href="https://maps.google.com/?q=Grete-Mosheimstrasse 4, 80636 Munich" target="_blank" rel="noopener noreferrer"> <img src="./images/locicon.png" className="h-[18px] cursor-pointer inline mr-2"  alt="" /> <span>Grete-Mosheimstrasse 4, 80636 Munich</span> </a></li>

            </ul>

            <ul className="footer-links">
                <p><img className="h-[40px] mb-[10px]" src="./images/logo-light.png" alt="" /></p>
                <Link to="/get-a-quote">  <button className="transition-all shadow-md shadow-[#FFAD00]/30 hover:shadow-[#FFAD00]/60 text-base bg-[#FFAD00] py-2 font-semibold px-[50px] rounded text-white" >{t('get-a-quote')}</button></Link>

            </ul>



        </div>

        <p className="px-[20px] text-center font-semibold">{t('copyright')} &copy; {today.getFullYear()} Entsorg-Meister. {t('rights')}</p>
        </div> 
    </footer>
  )
}

export default Footer