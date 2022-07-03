import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'


  

const Contact = () => {
    const { t } = useTranslation()

    
    const [error, setError]=useState({
        nameColor:"neutral",
        emailColor:"neutral",
        phoneColor:"neutral",
        pinColor:"neutral",
        queryColor:"neutral",
        nameError:"Enter your name here",
        emailError:"Enter your email here",
        phoneError:"Enter your phone number here",
        pinError:"Enter your area's pincode here",
        queryError:"Enter your query",
        namePass:false,
        emailPass:false,
        pinPass:false,
        phonePass:false,
        queryPass:false

        

    })
    const [name, setName] = useState('');
    const [page, setPage] = useState('contact');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [pin, setPin] = useState(null);
    const [query, setQuery] = useState('');

   


    function handleName(e) { 
        setName(e.target.value)
        if(name===''){
            setError({...error, nameError : "Name cannot be blanked", nameColor:"red", namePass:false})  
        }
        else if(name.length<3){
            setError({...error, nameError : "Name should be atleast three letters long", nameColor:"red",namePass:false})  
        }
        else{
            
            setError({...error, nameError : "Name should be atleast three letters long", nameColor:"green",namePass:true})  

        }  
    }
    function handleEmail(e) { 
        setEmail(e.target.value)
        if(email===''){
            setError({...error, emailError : "Email cannot be blanked", emailColor:"red", emailPass:false})  
        }
        else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(email)){
            setError({...error, emailError : "Email should be valid", emailColor:"green",emailPass:true})  
        }
        else{
            setError({...error, emailError : "Email should be valid", emailColor:"red",emailPass:false})  

        }  
    }
    function handlePhone(e) { 
        setPhone(e.target.value)
        if(phone===null){
            setError({...error, phoneError : "Phone number cannot be blank", phoneColor:"red",phonePass:false})  
        }
        else if( /^\d{9,11}$/.test(phone)){
            setError({...error, phoneError : "Enter 10 digit phone number", phoneColor:"green",phonePass:true})  
        }
        else{
            setError({...error, phoneError : "Phone number should be valid",phoneColor:"red",phonePass:false})  

        }  
    }
    function handlePin(e) { 
        setPin(e.target.value)
        if(pin===null){
            setError({...error, pinError : "Pin cannot be blank", pinColor:"red", pinPass:false})  
        }
        else if(/^\d{3,8}$/.test(pin)){
            setError({...error, pinError : "Enter a valid pin", pinColor:"green", pinPass:true})  
        }
        else{
            setError({...error, pinError : "Enter a  valid pin",pinColor:"red", pinPass:false})  

        }  
    }
    function handleQuery(e) { 
        setQuery(e.target.value)
        if(query===''){
            setError({...error, queryError : "This section can not be blank", queryColor:"red", queryPass:false})  
        }
        else if(query.length<20){
            setError({...error, queryError : "Query text should be atleast 20 letters long", queryColor:"red",queryPass:false})  
        }
        else{
            setError({...error, queryError : "Query text should be atleast 20 letters long",queryColor:"green",queryPass:true})  

        }  
    }
    async function handleClick(e) { 
        e.preventDefault()
     
    //   if(name=='') {
    //     nameError='Name can not be blanked'
    //   }
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            pin,
            query
          }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
          setPage('welcome')
         
        }
      }

    
  return (
 <section className="py-[80px]">
<h2 className='text-[#142266] font-bold text-3xl text-center mx-auto mb-[80px] max-w-xl'>{t('contact-us')}</h2>
<div className="container w-[600px] max-w-[90%] mx-auto my-[10px] p-[30px] md:p-[65px] bg-indigo-300 rounded shadow-black/20 shadow-md text-white">
{page==='contact' ? <form action="">
    <div className="form-group">
        <label htmlFor="">{t('full-name')}</label>
        <input type="text" minLength={3} required onChange={handleName} value={name}/>
       {error.nameColor==="neutral" ? <small className='font-bold neutral text-[white]'>{error.nameError}</small>:null} 
       {error.nameColor==="red" ? <small className='font-bold red text-red-500'>{error.nameError}</small>:null} 
       {error.nameColor==="green" ? <small className='font-bold green text-blue-800'>{error.nameError}</small>:null} 
   
    </div>
    <div className="form-group">
        <label htmlFor="">Email</label>
        <input type="email" required onChange={handleEmail} value={email}/>
        {error.emailColor==="neutral" ? <small className='font-bold neutral text-[white]'>{error.emailError}</small>:null} 
       {error.emailColor==="red" ? <small className='font-bold red text-red-500'>{error.emailError}</small>:null} 
       {error.emailColor==="green" ? <small className='font-bold green text-blue-800'>{error.emailError}</small>:null} 
   
    </div>
    <div className="form-group">
        <label htmlFor="">{t('phone')}</label>
        <input type="tele" required onChange={handlePhone} value={phone} />
        {error.phoneColor==="neutral" ? <small className='font-bold neutral text-[white]'>{error.phoneError}</small>:null} 
       {error.phoneColor==="red" ? <small className='font-bold red text-red-500'>{error.phoneError}</small>:null} 
       {error.phoneColor==="green" ? <small className='font-bold green text-blue-800'>{error.phoneError}</small>:null} 
   
    </div>
    <div className="form-group">
        <label htmlFor="">{t('pincode')}</label>
        <input type="number" required onChange={handlePin} value={pin}/>
   
        {error.pinColor==="neutral" ? <small className='font-bold neutral text-[white]'>{error.pinError}</small>:null} 
       {error.pinColor==="red" ? <small className='font-bold red text-red-500'>{error.pinError}</small>:null} 
       {error.pinColor==="green" ? <small className='font-bold green text-blue-800'>{error.pinError}</small>:null} 
   
    </div>
    <div className="form-group">
        <label htmlFor="">{t('query')}</label>
       <textarea required minLength={15} name="" id="" cols="30" rows="5" onChange={handleQuery} value={query} ></textarea>
       {error.queryColor==="neutral" ? <small className='font-bold neutral text-[white]'>{error.queryError}</small>:null} 
       {error.queryColor==="red" ? <small className='font-bold red text-red-500'>{error.queryError}</small>:null} 
       {error.queryColor==="green" ? <small className='font-bold green text-blue-800'>{error.queryError}</small>:null} 
   
    </div>
    {error.namePass && error.emailPass && error.phonePass && error.pinPass && error.queryPass?  <button  type="submit" className=" border-blue border-solid border-2 transition-all shadow-md shadow-[#white]-500/20  hover:shadow-[white]/20 text-lg  bg-white py-2 font-semibold px-8 text-[#6fa1f0] rounded-lg" onClick={handleClick}>{t('submit')}</button>
    : <button  type="submit" disabled className="transition-all shadow-md shadow-[#white]-500/20  hover:shadow-[white]/20 text-lg  bg-white py-2 font-semibold px-8 text-[#6fa1f0] rounded-lg" onClick={handleClick}>{t('submit')}</button>
}
    
</form>:
 null}
 {page==='welcome'? <div>
<p className='text-align text-[white] font-semibold text-[18px]'> {t('form-success')}</p>
<img className='block mx-auto px-[20px] py-[20px] w-[70%]' src="./images/welcome.png" alt="" />
</div>:null }
</div>
 </section>
  )
}

export default Contact