
import { format, addDays} from 'date-fns'
import Form from "./components/Form.js"
import { useTranslation } from 'react-i18next'

 

const Hero = () => {
  const { t } = useTranslation()
  const date = new Date();
  const discDate = addDays(date, 15);
  const dateFormatted = format(discDate, "dd/MM/yyyy").toString();



  return (
<section className="section-hero pt-[100px] pb-[120px] max-w-6xl mx-auto flex justify-around px-30 items-">
  <img className="side-blue absolute z-[-2] left-0 t-[-20px] w-[170px] mt-10" src="./images/graphic.png" alt="" /> 
  <div className="form-3 max-w-[400px] shadow-black/20 shadow-lg form  bg-white rounded-[10px] ">
<Form/>
      </div>

<div className="details w-[40%]">
      <h2 className='text-[# 142266] font-bold text-3xl mx-auto mb-[20px] max-w-xl'>{t('hero-heading')}</h2>
<ul className="points list-none mb-[100px]">
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    {t('li-1')}
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2"src="./images/tick.png" alt="" />
    {t('li-2')}
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2"  src="./images/tick.png" alt="" />
    {t('li-3')}
  </li>
  <li className="">
    <img  className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    {t('li-4')}
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    {t('li-5')}
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    {t('li-6')}
  </li>

</ul>
<div className="disc relative flex justify-center items-center">
  <p className="box-off absolute z-10 px-[60px] text-white font-semibold"> {t('discount-offer')} {dateFormatted}</p>
  <img className="absolute z-0" src="./images/discount.png" alt="" />
</div>


      </div>
    </section>
  )
}

export default Hero