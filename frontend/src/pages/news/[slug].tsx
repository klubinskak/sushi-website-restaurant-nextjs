import React from "react";
import { Posts } from "../../../typing.d";
import { client } from "@/lib/sanity";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { GetServerSideProps } from "next";

const builder = imageUrlBuilder(client);

interface Props {
  post: Posts;
}

const Post = ({ post }: Props) => {
  const {title, image, content} = post

  console.log(post);
  
  return (
    <>
      <article className="w-screen h-full bg-black">
        <Navbar number={0} />
            <div className="p-10 space-y-2">
              <div className="flex flex-col items-center justify-center space-y-5">
                <Image
                  src={builder?.image(image).url()}
                  alt={title}
                  width={700}
                  height={600}
                />
                <h1 className="text-5xl text-center text-white">
                  {title}{" "}
                </h1>
                <div className="p-12 text-white">
                  <PortableText value={content} />
                </div>
              </div>
            </div>
      </article>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "post" && slug == $slug][0]{
          title,
          slug,
          image,
          content
      }`;
  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  // For extra protection when actually fetching the post, if it doesn't exist or if it does, we add this:
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
};

export const getServerSidePaths = async () => {
  const query = `*[_type == 'post']{
          _id,
          title,
          slug,
          image,
          content
        }`;

  const posts = await client.fetch(query);

  // To figure out the paths and provide them to Next.JS. We provide them within an array whereby each object has a key called params, which would have the actual path inside of it:
  const paths = posts.map((post: any) => ({
    // This means I'm going to directly return an object
    // The first one:
    params: {
      // The second one; is going to be the params that matches up to [slug]
      slug: post?.slug,
    },
  }));

  return {
    paths,
    // This will block the page from not showing or showing a 404 if it doesn't exist
    fallback: "blocking",
  };
};

export default Post;
