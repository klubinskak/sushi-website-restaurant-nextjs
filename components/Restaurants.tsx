import Image from "next/image";
import React from "react";
import { BiPhone } from "react-icons/bi";

const Restaurants = () => {
  return (
    <section
      id="restaurants"
      className="h-[200vh] md:h-[150vh] lg:h-[70vh] items-center justify-around flex flex-col lg:flex-row space-x-5 p-10 mx-10"
    >
      {/* <h1 className="text-white p-5 text-2xl font-semibold">Our Restaurants</h1> */}
      <div className="">
        <Image
          src="/restaurants.jpg"
          alt="restuarants"
          width={400}
          height={500}
          className="rounded-[25px] mt-[100px] w-[350px] lg:w-[400px] md:h-[500px]"
        />
      </div>
      <div className="py-10 px-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-72 h-52 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <div className="p-5 flex flex-col justify-center items-center gap-3">
              <h3 className="text-white font-bold">Kona Grill - Woodbridge</h3>
              <p className="text-center text-gray-300">
                511 US-1, Woodbridge Township, NJ 08830, USA
              </p>
              <div className="flex gap-3 text-gray-100 items-center">
                <BiPhone size={20} color="white" />
                +1 732-750-4400
              </div>
            </div>
          </div>
          <div className="w-72 h-52 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <div className="p-5 flex flex-col justify-center items-center gap-3">
              <h3 className="text-white font-bold">Kona Grill - Woodbridge</h3>
              <p className="text-center text-gray-300">
                511 US-1, Woodbridge Township, NJ 08830, USA
              </p>
              <div className="flex gap-3 text-gray-100 items-center">
                <BiPhone size={20} color="white" />
                +1 732-750-4400
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-72 h-52 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <div className="p-5 flex flex-col justify-center items-center">
              <h3 className="text-white font-bold">Kona Grill - Woodbridge</h3>
              <p className="text-center text-gray-300">
                511 US-1, Woodbridge Township, NJ 08830, USA
              </p>
              <div className="flex gap-3 text-gray-100 items-center">
                <BiPhone size={20} color="white" />
                +1 732-750-4400
              </div>
            </div>
          </div>
          <div className="flex">
          <div className="w-72 h-52 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <div className="p-5 flex flex-col justify-center items-center">
              <h3 className="text-white font-bold">Kona Grill - Woodbridge</h3>
              <p className="text-center text-gray-300">
                511 US-1, Woodbridge Township, NJ 08830, USA
              </p>
              <div className="flex gap-3 text-gray-100 items-center">
                <BiPhone size={20} color="white" />
                +1 732-750-4400
              </div>
            </div>
          </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Restaurants;
