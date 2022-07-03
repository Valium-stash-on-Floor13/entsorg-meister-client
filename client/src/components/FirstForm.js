import { useTranslation } from 'react-i18next'

function FirstForm({formData, setFormData }) {
  const { t } = useTranslation()

 function handleVolumeOne(){
    const showcurr = !formData.showone

    if(formData.value !== 'Low'){
        setFormData({...formData, showone:showcurr, showtwo:false, showthree:false, value:'Low'})
    }
    else{
        setFormData({...formData, showone:showcurr, showtwo:false, showthree:false, value:''})
    }
 
  }

 function handleVolumeTwo(){
    const showcurr = !formData.showtwo

    if(formData.value !== 'Average'){
        setFormData({...formData, showone:false, showtwo:showcurr,showthree:false, value:'Average'})
    }
    else{
        setFormData({...formData, showone:false, showtwo:showcurr,showthree:false, value:''})
    }
  }



 function handleVolumeThree(){
     const showcurr = !formData.showthree
    if(formData.value !== 'High'){
        setFormData({...formData, showone:false, showtwo:false,showthree:showcurr, value:'High'})
    }
    else{
        setFormData({...formData, showone:false, showtwo:false,showthree:showcurr, value:''})
    }
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      
    });
  }

  const fileUpload = (e) =>{
    let upimages= [];
      
    const length =e.target.files.length;
 
    for( let i=0; i<length; i++){
        let file=e.target.files[i];
        
        getBase64(file).then(
          data =>{
            upimages[i]=data;
            setFormData({...formData, images:upimages,  len:length})
        }
          );
         
      
    }
    
    
    
  }



    

  return (
  <>



<li className="list-disc font-semibold text-[#333333]">{t('form-one-heading')} </li>
    <small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-one-subtext')}</small>

    <div className=" boxes mb-3  flex justify-around">
        <div>
            <div onClick={()=>handleVolumeOne()} className="vol-box relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
                { formData.showone? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}
                <span className=" block bg-[#FFAD00] w-[100%] h-[30px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">{t('low')}</small>
        </div>
        <div>
            <div onClick={()=>handleVolumeTwo()} className=" vol-box relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
    { formData.showtwo? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}

    <span className=" block bg-[#FFAD00] w-[100%] h-[50px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">{t('average')}</small>
        </div>

        <div>
            <div onClick={()=>handleVolumeThree()} className="vol-box relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
        { formData.showthree? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}

            <span className=" block bg-[#FFAD00] w-[100%] h-[80px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">{t('high')}</small>
        </div>  
    </div>

    <li className="list-disc text-[#333333] font-semibold">{t('form-one-upload')}</li>
    <small className="block mb-5 text-[#B6B6B6] font-semibold">{t('form-one-upload-small')}</small>
   {formData.len ===1? <span><img className='inline-block w-[20%] mb-[20px] mr-[20px]' src="./images/selected.png" alt="" /></span>:null} 
   {formData.len ===2? <span> <img className='inline-block w-[20%] mb-[20px] mr-[20px]' src="./images/selected.png" alt="" /><img className='inline-block w-[20%] mb-[20px] mr-[20px]' src="./images/selected.png" alt="" /></span>:null} 
   {formData.len ===3? <span><img className='inline-block w-[20%] mb-[20px] mr-[20px]' src="./images/selected.png" alt="" /><img className='inline-block w-[20%] mb-[20px] mr-[20px]' src="./images/selected.png" alt="" /><img className='inline-block w-[20%] mb-[20px] mr-[20px]' src="./images/selected.png" alt="" /></span>:null} 

    <div className="box relative mb-2">
        <input className=" filehide" 
        type="file" 
        name="files" 
        multiple 
        id="file" 
        onChange={(e)=>{ fileUpload(e)}}
        accept="image/*"/>
        <label  className="bg-[#FFAD00]/90 h-[80px] w-[100%] font-semibold text-lg px-[25px] rounded-lg border-2 border-solid border-black/20 text-white mb-[10px] t-0 b-0 l-0 r-0 flex justify-center items-center" htmlFor="file">{t('drag')}</label>
    </div>
  </>
  )
}

export default FirstForm

