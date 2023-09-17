
    
import Image from "next/image"

import imgg from '..//..//images/assets/online-pic.svg'
import examimg from '..//..//images/assets/exam 1.svg'
import certifcateimg from '..//..//images/assets/certification 1.svg'
import './Card-second.css'

const Card = () =>{
    return(
  
      <div class="container mt-2"> 
  <div class="row mx-5 d-flex rounded shadow-lg mb-5  rounded position-relative ">

  <div class="row g-4 my-3 row-cols-1 row-cols-lg-3 pb-2 mArginn">
        <div class="second-cards col">
        <div className='d-flex px-1 '>
         <Image className='pb-2' src={imgg} width={30} height={70}/> 
       
        <div className='px-2 pt-2'>
          <p className='font-size-5 fw-bold text-white'> Learn The Latest Skills</p>
          <p className='font-size-5 text-secondary '> Contrary to popular belief, Lorem Ipsum is 
           not simply random text. It has roots in a BC, 
            making it over 2000 years old. </p>
        </div>
        </div>
        </div>
        <div class="second-cards col">
        <div className='d-flex px-1'>
          <Image src={examimg} width={30} height={70}/> 
       
        <div className='px-2 pt-2'>
          <p className='font-size-5 fw-bold text-white'> Get Ready For a Career</p>
          <p className='font-size-5 text-secondary '> Contrary to popular belief, Lorem Ipsum is 
           not simply random text. It has roots in a BC, 
           making it over 2000 years old. </p>
        </div>
        </div>
         
        </div>
        <div class="second-cards col">
        <div className='d-flex px-1 '>
          <Image src={certifcateimg}width={30} height={60}/>
       
        <div className='px-2 pt-2'>
          <p className='font-size-5 fw-bold text-white'> Earn a Certificate </p>
          <p className='font-size-5 text-secondary '> Contrary to popular belief, Lorem Ipsum is
           not simply random text. It has roots in a BC,
            making it over 2000 years old. </p>
        </div>
        </div>

        </div>
        
        </div>
      </div>

  </div>

       
    )
}
export default Card
    
     

