import Image from "next/image";
import React from "react";

const restaurant = [
  {
    id: '1',
    name: "Kona Grill - Woodbridge",
    open: "Monday-Sunday 5pm-9:45pm",
    address: "511 US-1, Woodbridge Township, NJ 08830, USA",
    number: "+1 742-750-4400",
    image: "/restaurant-1.jpg",
  },
  {
    id: '2',
    name: "Kona Grill - Woodbridge",
    open: "Monday-Sunday 5pm-9:45pm",
    address: "511 US-1, Woodbridge Township, NJ 08830, USA",
    number: "+1 742-750-4400",
    image:"/restaurant-2.jpg",
    
  },
  {
    id: '3',
    name: "Kona Grill - Woodbridge",
    open: "Monday-Sunday 5pm-9:45pm",
    address: "511 US-1, Woodbridge Township, NJ 08830, USA",
    number: "+1 742-750-4400",
    image: "/restaurant-3.jpg",
  },
  {
    id: '4',
    name: "Kona Grill - Woodbridge",
    open: "Monday-Sunday 5pm-9:45pm",
    address: "511 US-1, Woodbridge Township, NJ 08830, USA",
    number: "+1 742-750-4400",
    image: "/restaurant-4.jpg"
  },
];
const Restaurants = () => {
  return (
    <section
      id="restaurants"
      className="w-full h-auto py-8 text-center text-white "> 
        <h1 className="p-5 text-2xl font-semibold text-white">Restaurants</h1>
      <div className="grid grid-cols-2 gap-4 place-items-center">
      {restaurant.map((item) => {
        return (
          <div className="p-8 place-items-center">
            <Image src={item.image} alt={item.id} width={550} height={50} className="rounded h-[250px] hover:scale-105 duration-500 ease-in-out"/>
            <div className="flex flex-col items-center justify-center p-2 space-y-3">
              <h2 className="text-xl text-fontbold">{item.name}</h2>
              <h3 className="text-sm">{item.address}</h3>
              <h2 className="text-sm">{item.name}</h2>
            </div>
          </div>
        )
      })}
      </div>     
    </section>
  );
};

export default Restaurants;
