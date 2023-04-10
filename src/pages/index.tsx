import Head from "next/head";
import AboutUs from "../../components/AboutUs";
import Carousel from "../../components/Carousel";
import ContactUs from "../../components/ContactUs";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Restaurants from "../../components/Restaurants";
import TodaysOffer from "../../components/TodaysOffers";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full ">
        <div className="bg-black">
          <div className="bg-[url('/background.jpg')] bg-cover bg-no-repeat">
            <Navbar/>
            <Hero />
            <Carousel />
          </div>
          <Restaurants />
          <TodaysOffer />
          <AboutUs />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </>
  );
}
