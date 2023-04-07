import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" text-white p-12">
      <ul className="hidden md:flex justify-around">
        <Link href="/">
          <li className="text-sm">HomePage</li>
        </Link>
        <Link href="#restaurants">
          <li className="text-sm">Restaurants</li>
        </Link>
        <Link href="#todays-offers">
          <li className="text-sm">Today's Offers</li>
        </Link>
        <Link href="/">
          <Image
            src="/logo-sushi.png"
            width={90}
            height={50}
            alt="logo"
            className="mt-[-20px]"
          />
        </Link>
        <Link href="#contact-us">
          <li className="text-sm">Contact Us</li>
        </Link>
        <Link href="#about-us">
          <li className="text-sm">About Us</li>
        </Link>
        <Link href="#how-we-work">
          <li className="text-sm">How we work?</li>
        </Link>
      </ul>
      <div className="flex md:hidden justify-between items-center">
        <Image
          src="/logo-sushi.png"
          width={90}
          height={50}
          alt="logo"
        />
        <button             onClick={() => {
              setIsOpen(!isOpen);
            }} className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-gray-900 ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md" >
        {isOpen ? (
          <AiOutlineClose
            size={20}
          />
        ) : (
          <GiHamburgerMenu
            size={20}
          />
        )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
