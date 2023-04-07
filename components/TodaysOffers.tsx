import Image from "next/image";
import React from "react";
import {AiOutlineShopping} from 'react-icons/ai'

const TodaysOffer = () => {
  return (
    <section id="todays-offers" className="h-[100vh] space-x-5 p-12 mx-10">
      <h1 className="text-white flex flex-row justify-center p-5 text-center- items-center text-3xl">Today's Offers</h1>
      <div className="flex gap-7 justify-center items-center">
      <div className="bg-gray-100 w-[330px] h-[470px] rounded-[15px] p-5 hover:scale-105 duration-500 ease-in-out">
        <Image src="/10.png" alt="10" width={350} height={350}/>
        <h2 className="text-semibold text-md">  Sushi and chopsticks</h2>
      <p className="text-sm text-gray-500 w-40">Sushi, a staple rice dish of Japanese Cuisine..</p>
      <div className="flex items-center justify-between">
      <p className="py-2 ">55 $</p>
    <AiOutlineShopping size={20}/>
      </div>
      </div>
      <div className="bg-gray-100 w-[330px] h-[470px] rounded-[15px] p-5 hover:scale-105 duration-500 ease-in-out">
      <Image src="/11.png" alt="10" width={350} height={350}/>
      <h2 className="text-semibold text-md">  Nigiri sushi</h2>
      <p className="text-sm text-gray-500 w-40">Nigri Means "To Grasp", and references the way the rice...</p>
      <div className="flex items-center justify-between">
      <p className="py-2 ">55 $</p>
    <AiOutlineShopping size={20}/>
      </div>
      </div>
      <div className="bg-gray-100 w-[330px] h-[470px] rounded-[15px] p-5 hover:scale-105 duration-500 ease-in-out">
      <Image src="/12.png" alt="10" width={350} height={350}/>
      <h2 className="text-semibold text-md">  Kawaii sushi</h2>
      <p className="text-sm text-gray-500 w-40">Sushi is a japanese dish of prepared vinegared rice..</p>
      <div className="flex items-center justify-between">
      <p className="py-2  ">55 $</p>
    <AiOutlineShopping size={20}/>
      </div>
      </div>
      </div>
    </section>
  );
};

export default TodaysOffer;
