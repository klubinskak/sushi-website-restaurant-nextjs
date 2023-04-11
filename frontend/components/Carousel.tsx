import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    return (
        <div className="w-full h-auto px-12">
            <div className="flex items-center justify-center w-full h-full px-4 py-24 sm:py-8">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="hidden lg:block" naturalSlideWidth={100} naturalSlideHeight={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={4} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14 ">
                                    <Slide index={0} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Yama Gobo</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl leading-5 text-white lg:text-xs lg:leading-6">Baby burdock, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Seared Tuna</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-sm leading-5 text-white lg:text-xs lg:leading-6">Garlic ginger sauce, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Cookied Dired Squash</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Kanpyo, Cut into 4 pieces, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">California</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Crab stick, avocado, and smelt-fish roe, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/5.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Oshinko</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xslg:leading-6">Pickled daikon radish, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/6.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Gyoza with chicken</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Japanese dumplings</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="7.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Matcha Iced Tea</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Matcha, water and ice</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="8.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Egg Tarts</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Eggs, vanila</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider naturalSlideHeight={100} className="hidden lg:hidden md:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={2} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14">
                                <Slide index={0} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Yama Gobo</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl leading-5 text-white lg:text-xs lg:leading-6">Baby burdock, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Seared Tuna</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-sm leading-5 text-white lg:text-xs lg:leading-6">Garlic ginger sauce, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Cookied Dired Squash</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Kanpyo, Cut into 4 pieces, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">California</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Crab stick, avocado, and smelt-fish roe, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/5.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Oshinko</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xslg:leading-6">Pickled daikon radish, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/6.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Gyoza with chicken</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Japanese dumplings</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="7.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Matcha Iced Tea</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Matcha, water and ice</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="8.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Egg Tarts</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Eggs, vanila</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider naturalSlideHeight={100} className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={1} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start w-full h-full transition duration-700 ease-out lg:gap-8 md:gap-6">
                                <Slide index={0} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Yama Gobo</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xl leading-5 text-white lg:text-xs lg:leading-6">Baby burdock, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Seared Tuna</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-sm leading-5 text-white lg:text-xs lg:leading-6">Garlic ginger sauce, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Cookied Dired Squash</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Kanpyo, Cut into 4 pieces, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">California</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Crab stick, avocado, and smelt-fish roe, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/5.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Oshinko</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xslg:leading-6">Pickled daikon radish, cut or hand roll</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/6.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Gyoza with chicken</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Japanese dumplings</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="7.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Matcha Iced Tea</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Matcha, water and ice</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7} className="duration-500 ease-in-out hover:scale-105">
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="8.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30">
                                                <h2 className="text-base leading-4 text-white lg:text-xl lg:leading-5">Egg Tarts</h2>
                                                <div className="flex items-end h-full pb-6">
                                                    <h3 className="text-xs leading-5 text-white lg:text-xs lg:leading-6">Eggs, vanila</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
