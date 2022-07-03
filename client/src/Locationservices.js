import Gmap from "./Gmap"
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'


const Locationservices = () => {
    const { t } = useTranslation()
    let {locationname} = useParams()
  return (
      <>
    <section className='locationbg-1'>
    <h2 className='px-[20px] text-white font-bold text-3xl text-center  max-w-xl'>
    {t('location-services-h1')}
</h2>

   </section>
   <section className=" text-gray-700 font-semibold text-base text-center mx-auto mb-[100px] max-w-3xl">
        <div>
           <p className=" px-[20px] my-[30px] max-w-4xl">{t('location-services-p1')}</p>
            <div className="px-[20px] box">
                <p className="border-t-[10px] border-orange-400 py-[20px] px-[30px] shadow-md shadow-gray-600/40 rounded-sm mb-[30px]">{t('location-services-p2')}
                </p>
            </div>
            <p  className="px-[20px] my-[30px] max-w-4xl">{t('location-services-p3')}</p>
      <Gmap/>
        </div>
   </section>

    <section className='locationbg-2'>
    <h2 className='px-[20px] text-white font-bold text-3xl text-center  max-w-xl'>
    {t('location-services-h2')}

</h2>

   </section>

   <section>
   <section className="section-choose flex justify-between items-center pb-[70px] pt-[80px]">

<h3 className=" relative before-box text-4xl font-bold text-white w-[30%] bg-[#FFAD00] text-center py-[100px] px-[50px]">Services we Offer in {locationname}</h3>
<ul className="loc-service points list-none md:mr-[300px]">
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            {t('location-services-l1')}
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2"src="../images/tick.png" alt="" />
            {t('location-services-l2')}
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2"  src="../images/tick.png" alt="" />
            {t('location-services-l3')}
        </li>
        <li className="">
            <img  className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            {t('location-services-l4')}
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            {t('location-services-l5')}
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            {t('location-services-l6')}
        </li>

        </ul>
</section>

   </section>
   <section  className="text-gray-700 font-semibold text-base text-center mx-auto mb-[100px] max-w-3xl">
        <div>
           <p  className="px-[20px] my-[30px] max-w-4xl"> {t('location-services-p4')}</p>
            <div className="px-[20px] box border-t-[10px] border-orange-400 py-[20px] px-[30px] shadow-md shadow-gray-600/40 rounded-sm mb-[30px]">
                <p> {t('location-services-p5')}</p>
            </div>
            <p className="px-[20px] my-[30px] max-w-4xl"> {t('location-services-p5')}</p>
        
            <div className="px-[20px] box border-t-[10px] border-orange-400 py-[20px] px-[30px] shadow-md shadow-gray-600/40 rounded-sm mb-[30px]">
                <p> {t('location-services-p6')} </p>
            </div>
        </div>



   </section>

   </>
  )
}

export default Locationservices