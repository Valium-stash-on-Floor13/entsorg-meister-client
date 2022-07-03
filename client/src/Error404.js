import React from 'react'
import { useTranslation } from 'react-i18next'


const Error404 = () => {
  const { t } = useTranslation()
  return (
    <div className='pt-[100px] flex max-w-2xl mx-auto justify-around items-center'>
       
        <img className='w-[300px] mx-auto' src="./images/404.png" alt="" />
        <div className='w-[10px] bg-[#FFAD00] h-[150px] mx-4 ' ></div>
        <h1 className='text-[#333333] font-bold text-2xl'>{t('404')}</h1>
    </div>
  )
}

export default Error404