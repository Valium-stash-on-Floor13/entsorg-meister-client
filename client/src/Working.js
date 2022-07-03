import React from 'react'
import { useTranslation } from 'react-i18next'


const Working = () => {
  const { t } = useTranslation()
  return (
    <section className='pt-[80px] pb-[80px]'>
        <div className='mb-[60px]'>
            <h2 className='px-[20px] text-[#142266] font-bold text-3xl text-center mx-auto mb-[50px] max-w-xl'>{t('working-h1')}</h2>
            <p className='px-[20px] text-[#5C5C5C] font-semibold text-base text-center mx-auto mb-[20px] max-w-3xl'>{t('working-p1')} </p>  
            <p className='px-[20px] text-[#5C5C5C] font-semibold text-base text-center mx-auto mb-[20px] max-w-3xl'>{t('working-p2')}</p> 
        </div>
        <div>
            <h2 className='px-[20px] text-[#142266] font-bold text-3xl text-center mx-auto mb-[50px] max-w-xl'>{t('working-h2')}</h2>
            <p className=' px-[20px] text-[#5C5C5C] font-semibold text-base text-center mx-auto mb-[20px] max-w-3xl'>{t('working-p3')} </p>  
            <p className=' px-[20px] text-[#5C5C5C] font-semibold text-base text-center mx-auto mb-[20px] max-w-3xl'>{t('working-p4')}</p> 
        </div>
    </section>
  )
}

export default Working