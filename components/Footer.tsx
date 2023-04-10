import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Link from "next/link";


function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center pt-10">
        <hr className="w-[30%]" />
      </div>
      <div className="flex items-center justify-center gap-3 py-5">
      <Link target="_blank" href="https://facebook.com"><div className="p-2 bg-white rounded-full"><FaFacebook color="black" size={25}/></div></Link>
      <Link target="_blank" href="https://instagram.com"><div className="p-2 bg-white rounded-full"><AiFillInstagram color="black" size={25}/></div></Link>
      </div>
      <p className="pt-2 text-center text-white">All rights reserved.</p>
      <p className="pb-10 text-center text-white ">&copy; Harumi</p>
    </div>
  );
}

export default Footer;
