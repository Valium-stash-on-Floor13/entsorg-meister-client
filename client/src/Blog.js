import { useTranslation } from 'react-i18next'

  

  
const Blog = () => {
  const { t } = useTranslation()
  return (
      <article className="w-[800px] max-w-[95%] mx-auto my-[80px] p-[40px] pb-[80px] bg-[#f3f3f3] shadow-sm shadow-black/30">
          <img className="w-[800px]  h-[300px] object-cover mx-auto block mb-[20px]" src="./images/article.png" alt="" />

          <h1 className="text-[#333333] font-bold text-3xl mb-[10px]">{t('blog-one-title')}</h1>
          <p className="text-[#414141] text-sm mb-[20px]">{t('blog-p1')}</p>
     <h2 className="text-[#333333] font-bold text-2xl mb-[10px]">{t('blog-h2')}</h2>
     <p className="text-[#414141] text-sm mb-[20px]">{t('blog-p2')}</p>

     <h2 className="text-[#333333] font-bold text-2xl mb-[10px]">{t('blog-h3')}</h2>
     <p className="text-[#414141] text-sm mb-[20px]">{t('blog-p3')}</p>
      
      <h2 className="text-[#333333] font-bold text-2xl mb-[10px]">{t('blog-h4')}</h2>
      <p className="text-[#414141] text-sm mb-[20px]">{t('blog-p4')}</p>
      </article>
  )
}

export default Blog