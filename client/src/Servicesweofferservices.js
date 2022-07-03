import { useTranslation } from 'react-i18next'



const Servicesweofferservices = () => {
    const { t } = useTranslation()
    return (
      <section className="section-choose section-service flex justify-between items-center pb-[70px] pt-[80px]">
  
      <h3 className="relative before-box text-4xl font-bold text-white w-[30%] bg-[#FFAD00] text-center py-[100px] px-[50px]"> {t('services-we-offer-heading')}</h3>
      <ul className="ul-service points list-none mr-[300px]">
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      {t('services-we-offer-l1')}
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2"src="../images/tick.png" alt="" />
      {t('services-we-offer-l2')}
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2"  src="../images/tick.png" alt="" />
      {t('services-we-offer-l3')}
    </li>
    <li className="">
      <img  className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      {t('services-we-offer-l4')}
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      {t('services-we-offer-l5')}
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      {t('services-we-offer-l6')}
    </li>
  
  </ul>
      </section>
    )
  }
  
  export default Servicesweofferservices