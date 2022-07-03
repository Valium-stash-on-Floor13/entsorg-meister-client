import React, {useState} from 'react'

import FirstForm from "./FirstForm.js"
import SecondForm from "./SecondForm.js"
import ThirdForm from "./ThirdForm.js"
import Welcome from './Welcome.js'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'





function Form() {
  const { t } = useTranslation()
  

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    showone: false,
    showtwo: false,
    showthree: false,
    images:[],
    len:null,
    value: '',
    one: '',
    two: '',
    three: '',
    sliderVal: 50,
    name: '',
    email: '',
    contact:'',
    address: '',
    section:'',
    others:'',
    method:'',
    date:'',
    floor:null,
    postcode:'',
    city:'',
    description:'',
    orderstatus:'incomplete'
  });    


    async function handleSubmit(event) { 
        event.preventDefault()
    }

    async function handleInfo(event) { 

        const response = await fetch('http://localhost:5000/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value : formData.value,
            images : formData.images,
            length : formData.len,
            sliderVal : formData.sliderVal,
            name : formData.name,
            email : formData.email,
            contact : formData.contact,
            address : formData.address,
            section : formData.section,
            others : formData.others,
            method : formData.method,
            floor : formData.floor,
            date : formData.date,
            postcode : formData.postcode,
            city : formData.city,
            description : formData.description,
            orderstatus:"incomplete",
            stage:0,
            cost:null
          }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
          console.log(data)
          setPage(page+1)

        }
      }


   
   
    const FormTitles = ["First Form", "Second Form", "ThirdForm", "Welcome"];

  return (
        <>
        <form  onSubmit={handleSubmit}>
        
        {page <=2 &&   <p className="borderradiusformtop inline-block text-white font-semibold px-4 py-4 bg-[#FFAD00] w-[100%] ">{t('form-heading')}</p> }
        {page === 3 &&   <p className="borderradiusformtop inline-block text-white font-semibold px-4 py-4 bg-[#64e003] w-[100%] "> {t('congratulations')}</p> }

         
            <div className="inside px-[30px] py-[20px]">
               
            {page <=2 &&   <p className="text-center  text-sm mb-2 text-[#4A4A4A]"> {t('step')} {page +1 } {t('of')}  {FormTitles.length -1}</p> }
          
            {page <=2 &&  <div className="bar mb-3 bg-[#E4E4E4] relative rounded-lg h-[6px]">
                    <span style={{width: page ===0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}
                    className="absolute z-1 bg-[#61CEFB] rounded-lg h-[6px] l-0 t-0 b-0"></span>
                </div>}
               {page === 0 && <FirstForm formData={formData} setFormData={setFormData}/>}
               {page === 1 && <SecondForm formData={formData} setFormData={setFormData}/>}
               {page === 2 && <ThirdForm formData={formData} setFormData={setFormData}/>}
              
               {page === 3 && <Welcome/>}
             
                <div className='flex justify-around items-center'>
               
               {page <3? <button  
                    disabled={page === 0 || page === 3}
                    onClick={()=> {
                        setPage((currPage)=>currPage-1);
                    }}
                    className="block w-[100%] bg-[#5E94EB] py-1 text-white font-semibold mx-1">
                    {t('prev')}
                </button>:null}

                {page <2? <button 
                    
                    disabled={(page === FormTitles.length -1) || (page=== 0 && formData.value==='' ) || (page=== 1 && formData.sliderVal===0  )}
                    onClick={()=> {
                        setPage((currPage)=>currPage+1);
                    }}

                    className=" block w-[100%] mx-1 bg-[#5E94EB] py-1 text-white font-semibold">
                    {t('next')}
                </button>:null}
                
                {page===2? <button 
                 type="submit"
                    onClick={handleInfo}
                    disabled ={ (page=== 2 && formData.name==='' ) || (page=== 2 && formData.address==='' ) || (page=== 2 && formData.email==='') || (page=== 2 && formData.contact===null )}
                    className=" block w-[100%] mx-1 bg-[#5E94EB] py-1 text-white font-semibold">
                    {t('submit')}
                </button>:null}
                </div>
            </div>
          
        </form>
       
    </>
  )
}

export default Form



