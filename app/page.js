
'use client'

import Image from 'next/image'
import styles from './page.module.css'
import MyPage from './pages/home/page'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'




export default function Home() {
  useEffect ( () =>{
    require ("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <MyPage/>
    
    
    </>
  );
}
