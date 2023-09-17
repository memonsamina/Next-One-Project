import Image from "next/image"
import oneimg from '..//..//images/assets/img-one.svg'
import twoimg from '..//..//images/assets/img-two.svg'
import threeimg from '..//..//images/assets/img-three.svg'
import social from '..//..//images/assets/Group 353.svg'

import imAg from '..//..//images/assets/Group (2).svg'
import arrw from '..//..//images/assets/system.svg'
import './Sixth-card.css'


const Piccard = () => {

  const cardData = [

    {
      id: '1',
      imgUrl: oneimg,
      heading: 'Matthew E. McNatt',
      paRa: 'Professor @George Brown College',
      paragrap: 'Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.',
      image: social,
      title: 'Engineering physics',
    },

    {
      id: '2',
      imgUrl: twoimg,
      heading: 'Matthew E. McNatt',
      paRa: 'Professor @George Brown College',
      paragrap: 'Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.',
      image: social,
      title: 'Engineering physics',
    },


    {
      id: '3',
      imgUrl: threeimg,
      heading: 'Matthew E. McNatt',
      paRa: 'Professor @George Brown College',
      paragrap: 'Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.',
      image: social,
      title: 'Engineering physics',
    },

  ]



  return (


    <div className="container mt-5 font">


<div className="d-flex justify-content-between">
<Image className="" src={imAg} width={120} alt="logo"/>
<Image className="mt-5" src={arrw} width={90} alt="logo"/>
</div>
<div className=""> 
<h1 className="text-center fw-bold">Our Tracks</h1>
<p className="text-center">Lorem Ipsum is simply dummy text of the printing.</p>
<div className="text-end "> 


</div>
</div>

      <div class="">
        <div class="row row-cols-1 row-cols-md-3 g-4">

          {cardData.map((item) => (
           <div className="col f-2">

            <div class="card shadow backk  ">
              <Image src={item.imgUrl} className="rounded" width={370} alt="logo" />
              <div class="card-body">
                <h6 className="fw-bold">{item.heading}</h6>
                <p>{item.paRa}</p>
                <p>{item.paragrap}</p>
                <div className="d-flex justify-content-between">
                  <p className="text-color mt-2">{item.title}</p>
                  <Image className="px-3 " width={90} src={item.image} />

                </div>

              </div>
</div>
            </div>


          ))}


        </div>

      </div>
      
    </div>
  )
}
export default Piccard