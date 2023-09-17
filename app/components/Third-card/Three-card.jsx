import Image from "next/image"
import oneimg from '..//..//images/assets/img-one.svg'
import twoimg from '..//..//images/assets/img-two.svg'
import threeimg from '..//..//images/assets/img-three.svg'
import image from '..//..//images/assets/image-bulb.svg'
import arrow from '..//..//images/assets/arrow-image.svg'
import star from '..//..//images/assets/stars.svg'
import clock from '..//..//images/assets/clock.svg'
import Video from '..//..//images/assets/video-1.svg'
import downlod from '..//..//images/assets/download.svg'

import './Three-card.css'
const Thirdcard = () => {

  const cardData = [

    {
      id: '1',
      imgUrl: oneimg,
      heading: 'UI/UX Design',
      paRa: 'UI/UX Design for Beginners',
      paragrap: '$98',
      image: star,
      imageone: clock,
      imAgetwo: Video,
      imagethree: downlod,
      buttoN: 'Join Course',

    },


    {
      id: '2',
      imgUrl: twoimg,
      heading: 'UI/UX Design',
      paRa: 'UI/UX Design for Beginners',
      paragrap: '$98',
      image: star,
      imageone: clock,
      imAgetwo: Video,
      imagethree: downlod,
      buttoN: 'Join Course',

    },

    {
      id: '3',
      imgUrl: threeimg,
      heading: 'UI/UX Design',
      paRa: 'UI/UX Design for Beginners',
      paragrap: '$98',
      image: star,
      imageone: clock,
      imAgetwo: Video,
      imagethree: downlod,
      buttoN: 'Join Course',

    },
  ]


  return (


    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <Image className=" " src={image} width={130} alt="logo" />
        <Image className="mt-4" src={arrow} width={90} alt="logo" />
      </div>
      <div className="">
        <h1 className="text-center fw-bold">Our Tracks</h1>
        <p className="text-center">Lorem Ipsum is simply dummy text of the printing.</p>
        <div className="text-end ">


        </div>
      </div>
      
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((item) => (


          <div class="col f-2 ">
            <div class="card back-shadow back">

              <Image class="name" className="rounded" width={370} src={item.imgUrl} alt="logo" />
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <p>{item.heading}</p>
                  <Image src={item.image} className="" width={60} />
                </div>
                <h6 className="fw-bold">{item.paRa} </h6>
                <p className="text-color fw-bold">{item.paragrap}</p>
                <hr />
                <div className="d-flex">
                  <Image src={item.imageone} width={15} />  <p className="font-2 px-2">22hr 30min</p>
                  <Image src={item.imAgetwo} width={18} /> <p className="font-2 px-2">22hr 30min</p>
                  <Image src={item.imagethree} width={15} /> <p className="font-2 px-2">22hr 30min</p>

                </div>
              
              <div className="mx-5">
   <button class="btn btn-cOlorr text-white rounded-pill  py-2 px-5 mx-3" type="submit">{item.buttoN}</button>
</div>
              
              </div>
            </div>

          </div>

        ))}

      </div>
    </div>



  )
}
export default Thirdcard