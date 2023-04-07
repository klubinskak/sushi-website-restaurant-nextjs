import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section id="about-us" className="h-[100vh] space-x-5 p-12 mx-10 flex">
        <Image src="/sushi.jpg" width={650} height={360} alt="about-us" className="rounded-[15px]"/>
    <div className="justify-center flex flex-col w-full p-2">
        <h1 className="text-white text-sm">About Us</h1>
        <h1 className="text-white text-xl ">We provide the best sushi experiance for you.</h1>
        <p className="text-white text-xs ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
    </div>
   </section>
  )
}

export default AboutUs