
import Image from 'next/image'
import circle from '..//..//images/assets/1-pic.svg'
import pic from '..//..//images/assets/2nd-pic.svg'
import picture from '..//..//images/assets/3-pic.svg'

import './Fifth-card.css'

const Nextcard = () => {
  const cardData = [
    {
id :'1',
      content: '“Teachings of the great explore of truth the master-builder of human happiness no one rejects,dislikes, or avoids pleasure itself, pleasure itself”',
      tittle: 'Finlay Kirk',
      title : 'Web Developper',
      ImageUrl: circle 
    },

    {
id : '2',
      content: '“Teachings of the great explore of truth the master-builder of human happiness no one rejects,dislikes, or avoids pleasure itself, pleasure itself”',
      tittle: 'Dannette P. Cervantes',
      title : 'Web Developper',
      ImageUrl: pic
    },

    {
      id :'3',
      content: '“Teachings of the great explore of truth the master-builder of human happiness no one rejects,dislikes, or avoids pleasure itself, pleasure itself”',
      tittle: 'Clara R. Altman',
      title : 'Web Developper',
      ImageUrl: picture
    },
  ]
  return (


    <div className='container'>
      <div className=" mt-5">
          <h1 className="text-center fw-bold">What student’s say</h1>
          <p className="text-center">Lorem Ipsum is simply dummy text of the printing.</p>
          <div className="text-end ">


          </div>
        </div>
<div className=''>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((item) =>(
          <div class="col f-2 ">
            <div class="back-color   ">

  <div className='card row-md-3'>
               <div class="card-body ">

                <p>{item.content}</p>
                <div className=' d-flex'>
                  
                  <div className='mx-3'>
                  <Image src={item.ImageUrl} />
                    <span className='size fw-bold px-3 py-4'>{item.tittle}k</span>
                    <p className='mx-5 foNnt px-3 '>{item.title}</p>
                  </div>
                </div>
              </div>



          </div>
          </div> 
     
          </div>

      

        

))}
  </div>

</div>
</div>
      
    
  );
};
export default Nextcard;