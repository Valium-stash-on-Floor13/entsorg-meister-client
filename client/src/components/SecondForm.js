import { useTranslation } from 'react-i18next'

function SecondForm({formData, setFormData }) {
  
   const { t } = useTranslation()

  return (

    <>
    
<li className="list-disc font-semibold text-[#333333]">{t('form-two-area')}</li>
<small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-two-area-small')}</small>
 
 
 <div className='border-2 border-[#888888]  mb-[30px]'>
   <input min="0"  max="5000" className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] text-align text-[14px] py-[6px] w-[50%]' type="number" value={formData.sliderVal}  onChange={event => setFormData({...formData, sliderVal: event.target.value})} />
   <button disabled  className='btn font-semibold text-[#676767] w-[50%] py-[6px] px-[20px] text-[14px] bg-[#DDDDDD]'>{t('form-two-area-unit')}</button>
   </div>

   <div className='mb-[30px]'>
<input type="range" name="" onChange={event => setFormData({...formData, sliderVal: event.target.value})} value={formData.sliderVal} className='w-[100%]' id=""  min="0" step="1" max="5000" />
<small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-two-slider-instruct')}</small>
 

   </div>
    </>
)
}

export default SecondForm