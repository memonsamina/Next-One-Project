
"use client"
import Image from 'next/image';
import picture from '..//..//images/assets/Group (4).svg'
import pic from '..//..//images/assets/image-bulb.svg'
import React from "react";
import './Sevnth-card.css'



import { useState } from "react";



const SecondLast = () => {


  const [userEmial, setUserEmail] = useState("");
  const [showUserEmailError, setShowUserEmailError] = useState(false)




  const userEmialHandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmial !== "") {
      setUserEmail()
    }
  };



  const handleclick = (e) => {
    e.preventDefault()
    if (userEmial === "") {
      setShowUserEmailError(true);

    }


  }



  return (

    <div className="container py-5 text-center card-background mt-5">
      <h2 className="text-white">Subscribe to our newsletter</h2>
      <p className="text-white">Lorem Ipsum is simply dummy text of the printing.</p>


<div className='container'>
  <div className='row'>
    <div className='col-md-2 col-sm-12'><Image src={picture} width={70}/></div>
<div className='col-md-8'> <div className="input-filed text-center">
        <input class="rounded-pill length py-2" type="search" placeholder="Email Address" value={userEmial} onChange={userEmialHandler} aria-label="Search" />
        <button class="btn-cOlor text-white rounded-pill px-4 py-2" onClick={handleclick} type="submit">Send</button>

        {showUserEmailError && <p className="text-danger fw-bold text-center">enter your valid Email.</p>}

      </div></div>
<div className='col-md-2 col-sm-12'><Image src={pic} className='' width={70}/></div>
  </div>
</div>




</div>






  );
};

export default SecondLast;