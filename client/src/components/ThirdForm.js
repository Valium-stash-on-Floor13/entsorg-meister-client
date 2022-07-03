import { useTranslation } from 'react-i18next'

const ThirdForm = ({formData, setFormData}) => {
  
  const { t } = useTranslation()

  return (
    <>

         
<li className="list-disc font-semibold text-[#333333]">{t('form-three-heading')}</li>
<small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-three-mandatory')}</small>
   

   <div className="form-group form-main">
     <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] mb-[5px] text-align text-[14px] py-[6px]' type="text" placeholder={t('full-name')} onChange={event => setFormData({...formData, name: event.target.value})} value={formData.name}/>
     <small className="block mb-5 text-[#9b9b9b] font-semibold">{t('form-three-name')}</small>
   </div>
   <div className=" form-main form-group">
     <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] text-align text-[14px] py-[6px]' type="email" placeholder='Email' onChange={event => setFormData({...formData, email: event.target.value})} value={formData.email} />
     <small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-three-email')}</small>
   </div>
   <div className=" form-main form-group">
     <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] text-align text-[14px] py-[6px]' type="tel" placeholder={t('contact-number')} onChange={event => setFormData({...formData, contact: event.target.value})} value={formData.contact}/>
     <small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-three-phone')}</small>
   </div>
   <div className="form-group form-main">
     <input className='bg-[#F3F3F3] font-semibold text-[#676767] px-[20px] text-align text-[14px] py-[6px]' type="text" placeholder={t('address')} onChange={event => setFormData({...formData, address: event.target.value})} value={formData.address}/>
     <small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-three-address')}</small>
   </div>
   </>
  )
}

export default ThirdForm