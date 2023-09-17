import Image from "next/image"

import ImagEe from '..//../images/assets/OBJECTS (2).svg'
import Heartimg  from '..//..//images/assets/hearts 1.svg'
import picc  from '..//..//images/assets/jigsaw 1.svg'
import './Fourth-card.css'



const Herocard = () => {
    return(


<div>
<div class="bg-cOlor mt-5">
    <div class="container">
      <div class="row pt-5 pb-5 d-flex align-item-center">
      <div class="col-md-6">
      <Image src={ImagEe} width={330}/>
      </div>



      <div class="col-md-6">
          <h1 class="nav fw-bold text-color position-relative">Premium Learning
Experience</h1>
<div className="d-flex mt-4">
<button type="button" class="btn btn-color rounded  my-2 mx-2"> <Image src={Heartimg} width={30}/></button>
<div className="size">
<h6 className="fw-bold size">Easily Accessible</h6>
<p>Learning Will fell Very Comfortable With Courslab.</p>
</div>
        </div>

        <div className="d-flex mt-2">
<button type="button" class="btn btn-color rounded my-2 mx-2 "> <Image src={picc} width={30}/></button>
<div className="size">
<h6 className="fw-bold size">Easily Accessible</h6>
<p>Learning Will fell Very Comfortable With Courslab.</p>
</div>
        </div>  


        </div>
      </div>
</div>
  </div>

</div>


        
    )
}

export default Herocard