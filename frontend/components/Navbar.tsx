import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../hooks/useScrollPosition";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();



  return (
    <nav className={`${scrollPosition > 80 ? 'bg-black' : ''} sticky z-40 p-10 top-0 pt-10 pb-6 text-white bg-black-100`}>
      <ul className="sticky top-0 justify-around hidden md:flex">
        <Link href="/">
          <li className="text-sm hover:text-[#495057]">Home</li>
        </Link>
        <Link href="/#restaurants">
          <li className="text-sm hover:text-[#495057]">Restaurants</li>
        </Link>
        <Link href="/#todays-offers">
          <li className="text-sm hover:text-[#495057]">Today's Offers</li>
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
        <Link href="/#contact-us">
          <li className="text-sm hover:text-[#495057]">Contact Us</li>
        </Link>
        <Link href="/#about-us">
          <li className="text-sm hover:text-[#495057]">About Us</li>
        </Link>
        <Link href="/news">
          <li className="text-sm hover:text-[#495057]">News</li>
        </Link>
      </ul>
      <div className="flex items-center justify-between md:hidden">
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
    </nav>
  );
};

export default Navbar;
