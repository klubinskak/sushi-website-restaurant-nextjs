import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { groq } from "next-sanity";
import { client } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { Posts } from "../../typing.d";
import OptimizedImage from "../../components/Image";

const builder = imageUrlBuilder(client);

interface Props {
  data: Posts[];
}

const news = ({ data }: Props) => {
  return (
    <div className="bg-black">
      <div className="w-full h-auto bg-black">
        <Navbar number={0} />
        <div className="h-auto grid grid-cols-2 z-[-10] place-items-center">
          {data.map((item) => {
            return (
              <div key={item.title} className="p-10 space-y-4 text-white">
                <div>
                  <OptimizedImage
                    image_url={builder?.image(item.image).url()}
                    name={item.title} 
                  />
                </div>
                <h3 className="py-2">8/04/2023</h3>
                <h1>{item.title}</h1>
                <Link
                  href={`/news/${encodeURIComponent(item.slug)}`}
                  className="underline"
                  shallow
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const query = groq`*[_type == "post"]{
  title, 
  slug,
  image
}`;

export const getServerSideProps = async () => {
  const data = await client.fetch(query);

  return { props: { data } };
};

export default news;
