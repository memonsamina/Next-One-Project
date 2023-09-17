import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "@/app/components/Navbar/Navbar"
import Card from "@/app/components/Second-card/Card-second"
import Thirdcard from '@/app/components/Third-card/Three-card';
import Herocard from '@/app/components/Section-four/Fourth-card';
import Nextcard from '@/app/components/Fifth-section/Fifth-card';
import Piccard from '@/app/components/Sixth-section/Sixth-card';
import SecondLast from '@/app/components/Seventh-section/Sevnth-card';
import Lastcard from '@/app/components/Footer/Last-card';




const MyPage = () =>{
    return(


<div>
    <Header/>
    <Card/>
    <Thirdcard/>
    <Herocard/>
    <Nextcard/>
    <Piccard/>
    <SecondLast/>
    <Lastcard/>
</div>


        )
}
export default MyPage