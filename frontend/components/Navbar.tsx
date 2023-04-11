import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../hooks/useScrollPosition";


const Navbar = ({number}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`${
        scrollPosition > number ? "bg-black" : "" || isOpen ? "bg-black" : ""
      } sticky z-40 p-10 top-0 pt-10 pb-6 text-white bg-black-100`}
    >
      <div className="flex items-center justify-between md:hidden">
      <Link href="/">
        <Image src="/logo-sushi.png" width={90} height={50} alt="logo1" />
      </Link>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-gray-900 ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
        >
          {isOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <GiHamburgerMenu size={20} />
          )}
        </button>
      </div>
      <ul className="sticky top-0 justify-around hidden w-full h-full md:flex">
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

      <ul className={`${
        isOpen ? 'block': 'hidden'
      } flex flex-col z-10 items-center w-full h-[80vh] justify-center text-md space-y-5 py-12 text-white bg-black md:hidden`}>        
      <Link href="/">
          <li className="text-md hover:text-[#495057]" onClick={() => setIsOpen(false)}>Home</li>
        </Link>
        <Link href="/#restaurants">
          <li className="text-md hover:text-[#495057]" onClick={() => setIsOpen(false)}>Restaurants</li>
        </Link>
        <Link href="/#todays-offers">
          <li className="text-md hover:text-[#495057]"  onClick={() => setIsOpen(false)}>Today's Offers</li>
        </Link>
        <Link href="/#contact-us">
          <li className="text-md hover:text-[#495057]" onClick={() => setIsOpen(false)}>Contact Us</li>
        </Link>
        <Link href="/#about-us">
          <li className="text-md hover:text-[#495057]" onClick={() => setIsOpen(false)}>About Us</li>
        </Link>
        <Link href="/news">
          <li className="text-md hover:text-[#495057]" onClick={() => setIsOpen(false)}>News</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
