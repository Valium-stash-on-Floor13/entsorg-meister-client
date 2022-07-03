import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

  

  

const Blogs = () => {
  const { t } = useTranslation()
  return (
    <section className='pt-[80px] pb-[100px]'>
            <h2 className='text-[#142266] text-center font-bold text-3xl mx-auto mb-[20px] '>Blogs</h2>

<div className='bg-[#d1d1d1] max-w-5xl mx-auto py-[50px]' > 
 
  {/* <div className='searchbox flex justify-center items-start mb-[30px] w-[max-content] mx-auto border-2 border-orange-400' >
    <input className='text-[#6a6a6a] py-[10px] bg-white px-[20px] h-[45px] w-[300px]' type="text" placeholder='Search here'/>
    <button className='bg-[#FFAD00]  h-[45px] w-[45px] p-[10px]'><img src="./images/search.png" alt="" /></button>
  </div> */}


<article className="flex justify-between items-start bg-gray-100 rounded-sm px-[10px] py-[10px] mx-auto max-w-4xl mb-[20px]">
  <img className="md:block hidden" src="./images/blog-img.png" alt="" />
  <div className="side px-[25px]">
    <h3 className='text-[#333333] font-semibold text-lg mb-[13px]'>{t('blog-one-title')}</h3>
    <p  className='text-[#818181]  mb-[13px]'>{t('blog-one-short')}</p>

    <small className='block mb-[8px] text-[#C0C0C0]'>{t('blog-one-date')}</small>

    <button className="transition-all shadow-md shadow-[#0e59d3]-500/40 hover:shadow-[#5E94EB]/40 hover:bg-[#0e59d3] bg-[#5E94EB] py-1 font-semibold px-3 text-base rounded-sm text-white" ><Link to="/blog">{t('read-more')} </Link></button>

  </div>
</article>



{/* <div className='flex justify-between items-center mx-auto max-w-4xl  my-[20px]'>
<div className='pagination '> <span>1</span> <span>2</span> <span>3</span> <span>4</span>    
</div>
<div> <button className=" ml-50px transition-all shadow-md shadow-[orange]-500/40 hover:shadow-[orange]/40 hover:bg-[orange] bg-[orange] py-1 font-semibold px-3 text-base rounded-sm text-white mr-[20px]" >Previous</button><button className="transition-all shadow-md shadow-[orange]-500/40 hover:shadow-[orange]/40 hover:bg-[orange] bg-[orange] py-1 font-semibold px-3 text-base rounded-sm text-white" >Next</button></div>
</div> */}
</div>
<br />
<h2 className=" px-[20px] font-bold text-[24px]  text-blue-600 text-center w-100%">{t('stay-tuned')}</h2>


 

 



    </section>
  )
}

export default Blogs