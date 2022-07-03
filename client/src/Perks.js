import { useTranslation } from 'react-i18next'


   
const Perks = () => {
  const { t } = useTranslation()
  return (
    <section className="pb-[150px]">

    <h2 className='px-[20px] text-[#142266] font-bold text-3xl text-center mx-auto mb-[100px] max-w-xl'>{t('perks-main-h1')}</h2>
     <div className="leading-6 box-collection flex justify-around max-w-7xl mx-auto">  

        <div className="card w-[280px] h-[370px] shadow-lg shadow-black/30 rounded py-[20px] px-[20px]">
          <img className='block mx-auto w-[60px] mb-5' src="./images/smiley.png" alt="" />
          <h3 className="leading-6 mb-3 text-lg font-semibold">{t('perks-h1')}</h3>
          <p>{t('perks-p1')}</p>
        </div>
        
        <div className="card w-[280px] h-[370px] shadow-lg shadow-black/30 rounded py-[20px] px-[20px]">

        <img className='block mx-auto w-[60px] mb-5' src="./images/like.png" alt=""/>
        <h3 className="leading-6 mb-3 text-lg font-semibold">{t('perks-h2')}</h3>
          <p>{t('perks-p2')}</p>
        </div>

        <div className="card w-[280px] h-[370px] shadow-lg shadow-black/30 rounded py-[20px] px-[20px]">

        <img className='block mx-auto w-[60px] mb-5' src="./images/file.png" alt=""/>
        <h3 className="leading-6 mb-3 text-lg font-semibold">{t('perks-h3')}</h3>
          <p>{t('perks-p3')}</p>
        </div>

     </div>
    </section>
  )
}

export default Perks