import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity.server'
import Image from "next/image";
import Link from 'next/link'



const news = ({posts}: any) => {
  console.log(posts);

  
  return (
    <div className="bg-black">
    <div className="w-full h-auto bg-black">
        <Navbar number={0}/>
      <div className="h-auto grid grid-cols-2 z-[-10] place-items-center">
      <div className="p-10 space-y-4 text-white">
        <div>
        <Image src="/sushi-1.png" width={600} height={300} alt="sushi-1" />
      </div>
      <h3 className="py-2">8/04/2023</h3>
      <h1>Harumi Promotion Video</h1>
      <Link href="" className="underline">Read More</Link>
      </div>

      <div className="p-10 space-y-4 text-white">
        <div>
        <Image src="/sushi-2.jpg" width={600} height={300} alt="sushi-2" />
      </div>
      <h3 className="py-2">8/04/2023</h3>
      <h1>Harumi Promotion Video</h1>
      <Link href="" className="underline">Read More</Link>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { 
    props: {
      posts: data
    } 
  }
}

export default news
