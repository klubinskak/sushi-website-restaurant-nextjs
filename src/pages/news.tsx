import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {createClient} from '@sanity/client'
import { groq } from 'next-sanity'
import { getClient } from '../../lib/sanity.server'



const news = ({posts}: any) => {
  console.log(posts);

  
  return (
    <div className="w-full h-full bg-black">
            <Navbar/>
      <div className="h-[70vh]">

      </div>
      <Footer/>
    </div>
  )
}



export const getStaticProps = async ({ preview = false}) => {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "articles" | order(publishedAt desc)] {
     _id,
     title,
     publishedAt,
    'slug': slug.current,
    body
     }`)
  return {
    props: {
      posts,
    },
  }
}

export default news
