

import Image from "next/image"
import footerimg from '..//..//images/assets/Logo (2).svg'
 import './Last-card.css'
const Lastcard = () => {
    return(

<div className="bck-clr">
 
<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-bottom">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <span class="fw-bold"> 
        <Image src={footerimg} width={40}/>
     </span>
      </a>
      <p class="text-body-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5 className="fw-bold">Company</h5> <br/>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About Us</a></li> <br/>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">How to work?</a></li> <br/>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Populer Course</a></li> <br/>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Service</a></li>
        
      </ul>
    </div>

    <div class="col mb-3">
      <h5 className="fw-bold">Section</h5> <br/>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Courses</a></li> <br/>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Ofline Course</a></li> <br/>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Vidio Course</a></li> <br/> 
      </ul>
    </div>

    <div class="col mb-3">
      <h5 className="fw-bold">Section</h5> <br/>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQ</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Help Center</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Career</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Privacy </a></li>
        
      </ul>
    </div>


    <div class="col mb-3">
      <h5 className="fw-bold">Section</h5> <br/>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">+0913-705-3875</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">ElizabethJ@jourrapide.com</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">4808 Skinner Hollow Road
Days Creek, OR 97429</a></li>
       
      </ul>
    </div>
  </footer>
</div>

<p className="text-center">BookStore All Right Reserved, 2022</p>
</div>

    )
 }
 export default Lastcard