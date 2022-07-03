import { useTranslation } from 'react-i18next'


    
const Process = () => {
  const { t } = useTranslation()
  return (
    <section>

    <h2 className='px-[20px] text-[#142266] font-bold text-3xl text-center mx-auto mb-[100px] max-w-xl'>{t('process-main-heading')}</h2>
   <div className="flex process-img-box  justify-around mb-20">
     <div className="box w-[40%] bg-[#1C1943] text-[#EBEBEB] py-10 px-6">
       <p className="mb-4">{t('process-p1')}</p>
      <p>{t('process-p2')}</p>
     </div>
     <img src="../images/construction.png" alt="" />
   </div>

   <div className="flex flex process-img-box-2  justify-around mb-20">
   <img src="../images/logistics.png" alt="" />
     <div className="box w-[40%] bg-[#1C1943] text-[#EBEBEB] py-10 px-6">
       <p className="mb-4">{t('process-p3')}</p>
      <p>{t('process-p4')}</p>
     </div>
    
   </div>

   
    </section>
  )
}

export default Process