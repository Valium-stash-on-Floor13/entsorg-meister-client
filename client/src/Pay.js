import React, {useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import StripeCheckcout from "react-stripe-checkout"

function Pay() {
  

  const [page, setPage] =useState(0);
  const [checkvalue, setCheckvalue] =useState(false);
  const [product, setProduct] =useState({
    name: "Decluttering Service",
    price:"200",
    productBy:"Entsorg Meister"
  })
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('id') || '';
    const name = searchParams.get('name') || '';
    const cost = searchParams.get('uuid') || '';


    const handleCheck= (event) =>{
      setCheckvalue(!checkvalue)
    }
    const makePayment = token =>{
      setPage(1)
      const body  = {
        token, 
        product
      }
      const headers ={
        "Content-type":"application/json"
      }
      return fetch (`http://localhost:5000/payment`,{
        method:"POST",
        headers,
        body: JSON.stringify(body)
      }).then(response =>{
      console.log("Response", response);
      const {status} =response;
      if(status == 200){
        setPage(2)
        console.log("ok")

      }
      else{
        setPage(3)
        console.log("not ok")
      }
      })
      .catch(error=>console.log(error));
    };

   
 
  return (
    <>
    {page===0 && <div className='rounded-lg px-[40px] py-[40px] mx-auto my-[50px] w-[530px] bg- border-2 border-indigo-300  shadow-2xl'>
      <div className="box">
      <p className='text-[blue] text-center text-[30px] mb-[20px] font-semibold'> Order Details</p>
     
        
        <div className='p-[8px] mb-[6px]'>
          <span className='text-[blue] inline-block w-[160px]'>Name : </span>
          <span className='text-[#333] w-[230px] inline-block'>Yash Saxena</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue]  w-[160px] inline-block'>Service : </span>
        <span className='text-[#333] w-[230px] inline-block'>Decluttering</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue] w-[160px] inline-block'>Section : </span>
        <span className='text-[#333] w-[230px] inline-block'>Kitchen</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue] w-[160px] inline-block'>Area : </span>
        <span className='text-[#333] w-[230px] inline-block'>500 m. sq</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue] w-[160px] inline-block'>Total Cost : </span>
        <span className='text-[#333] w-[230px] inline-block'>5000 €</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue] w-[160px] inline-block'>Advance to be paid : </span>
        <span className='text-[#333] w-[230px] inline-block'>1500 €</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue] w-[160px] inline-block'>Phone : </span>
        <span className='text-[#333] w-[230px] inline-block'>3724982797</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue] w-[160px] inline-block'>Address : </span>
        <span className='text-[#333] w-[230px] inline-block'>141 Hari Babub ki fatak, Chobe MOhalla, Budaun</span>
        </div>
        <hr />
        <div className='p-[8px] mb-[6px]'>
        <span className='text-[blue] w-[160px] inline-block'>Post Code : </span>
        <span className='text-[#333] w-[230px] inline-block'>21476</span>
        </div>
        <hr />
        <div className='flex p-[8px] mb-[20px]'>
        <input className='mr-[20px]' type="checkbox" name="accept" id=""
        checked={checkvalue}
        onChange={handleCheck} />
          <span className='text-[#444444]'>Accept our <span className='text-blue-400'> terms and conditions</span></span>
        </div>
      </div>
  
    <StripeCheckout
    stripeKey='pk_test_51LGpXsCuM94qpRXW8l9dBKAuKkz1y4HmQbyB6DI4wqhU6GVpwguauOaVRbjnAyLYfMJLGPuLljXv37zJBOxo8pWA00jccMyx7F'
    token={makePayment}
    currency='EUR'

    name='Decluttering of house'
    billingAddress=""
    amount ={product.price*100}>
        <div className='flex p-[8px] mb-[10px]'>
      <button 
      disabled={!checkvalue}
      
      className='bg-blue-400 text-white px-[30px] py-[6px]'>Proceed to Pay</button></div>
    </StripeCheckout>

    </div>
}

{page ===1 && 
  <div className='rounded-lg px-[40px] py-[40px] mx-auto my-[50px] w-[530px] bg- border-2 border-indigo-300  shadow-2xl'>
    <div>
    <p className='text-[blue] text-center  text-[20px] mb-[20px] font-semibold'> Wait while we confirm the payment..</p>
  <img className='block mx-auto' src="./images/spin.gif" alt="" />
    </div>
     </div>

}
{page ===2 && 
  <div className='rounded-lg px-[40px] py-[40px] mx-auto my-[50px] w-[530px] bg- border-2 border-indigo-300  shadow-2xl'>
    <div>
    <p className='text-green-400 text-center text-[20px] mb-[30px] font-semibold'> Your payment was successfull. Check your email for order confirmation. You can download your invoice from here.</p>
    <img className='w-[200px] block mx-auto' src="./images/confirm.svg" alt="" />
    </div>
     </div>

}
{page ===3 && 
  <div className='rounded-lg px-[40px] py-[40px] mx-auto my-[50px] w-[530px] bg- border-2 border-indigo-300  shadow-2xl'>
    <div>
    <p className='text-red-400 text-center  text-[20px] mb-[20px] font-semibold'> Something unexpected happened. Contact our support team at support@entsorg-meister.com</p>
    <img className='w-[200px] block mx-auto' src="./images/error.svg" alt="" />
    </div>
     </div>

}
{page ===4 && 
  <div className='rounded-lg px-[40px] py-[40px] mx-auto my-[50px] w-[530px] bg- border-2 border-indigo-300  shadow-2xl'>
    <div>
    <p className='text-orange-400 text-center  text-[20px] mb-[20px] font-semibold'>Access Denied. Your token has been expired. </p>
    <img className='w-[200px] block mx-auto' src="./images/access.svg" alt="" />
    </div>
     </div>

}
    </>
  )
}

export default Pay




