import { useTranslation } from 'react-i18next'

const Choose = () => {
    
  const { t } = useTranslation()
    return (
<section className="section-choose flex justify-between items-center pb-[70px] pt-[80px]">

 <h3 className=" relative before-box text-4xl font-bold text-white w-[30%] bg-[#FFAD00] text-center py-[100px] px-[50px]">{t('choose')}</h3>

    <div className="px-10 pl-10 pr-20 w-[50%] font-semibold text-[#575757] " >{t('choose-para')}</div>
</section>
    )
  }
  
  export default Choose