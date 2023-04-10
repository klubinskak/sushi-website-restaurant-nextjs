import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {createClient} from '@sanity/client'


export const client = createClient({
  projectId: 'g6uuxceb',
  dataset:'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-10', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export async function getPosts() {
  const articles = await client.fetch(`*[_type == "articles"] {
    title
  }`)
  return articles
}

const news = () => {


  useEffect(() => {
    getPosts();
  },[])
  
  return (
    <div className="w-full h-full bg-black">
            <Navbar/>
      <div className="h-[70vh]">

      </div>
      <Footer/>
    </div>
  )
}

export default news