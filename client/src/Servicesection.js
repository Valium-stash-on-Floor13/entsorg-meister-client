import React from 'react'
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'


const Servicesection = () => {
  const { t } = useTranslation()
  let props = useParams()
  return (
   <section className='servbg'>
    <h2 className='text-white font-bold text-3xl text-center  max-w-xl'>
{props.servicename}, {t('services-section-text')}
</h2>

   </section>
  )
}

export default Servicesection