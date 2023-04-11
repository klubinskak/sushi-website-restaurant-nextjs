import Image from "next/image";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const offers = [
  {
    id: 1,
    name: "Sushi and chopsticks",
    description: "Sushi, a staple rice dish of Japanese Cuisine..",
    price: "55",
    image: "/10.png",
  },
  {
    id: 2,
    name: "Nigiri sushi",
    description: "Nigri Means 'To Grasp', and references the way the rice...",
    price: "55",
    image: "/11.png",
  },
  {
    id: 3,
    name: "Kawaii sushi",
    description: "Sushi is a japanese dish of prepared vinegared rice..",
    price: "55",
    image: "/12.png",
  },
];

const TodaysOffer = () => {
  return (
    <section id="todays-offers" className="h-auto p-12 mx-10 space-x-5">
        <h1 className="items-center p-5 text-2xl font-semibold text-center text-white">Today's Offers</h1>
      <div className="flex flex-col items-center justify-center md:flex-row gap-7">
        {offers.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gray-950 w-[330px] h-[470px] text-white rounded-[15px] p-5 hover:scale-105 duration-500 ease-in-out"
            >
              <Image src={item.image} alt="10" width={350} height={350} />
              <h2 className="text-semibold text-md"> {item.name}</h2>
              <p className="w-40 text-sm text-gray-500">{item.description}</p>
              <div className="flex items-center justify-between">
                <p className="py-2 ">{item.price} $</p>
                <AiOutlineShopping size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodaysOffer;
