import { useTranslation } from 'react-i18next'

  

const Welcome = ({formData, setFormData}) => {
  const { t } = useTranslation()
  return (
    <>
<p className=' text-align text-[#64E003] font-semibold text-[base]'><img className='w-[16px] inline-block mr-1' src="./images/welcometick.png" alt=""></img>{t('welcome')}</p>
<img className='block mx-auto px-[20px] py-[20px] w-[70%]' src="./images/welcome.png" alt="" />
    </>
  )
}

export default Welcome