import React from 'react'
import { Posts } from '../../../typing.d';
import { useRouter } from 'next/router';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { GetStaticPaths, GetStaticProps } from 'next';


interface Props {
    data: Posts[];
  }
  

const Post = ({ data } : Props) => {
    const router = useRouter()
  const { slug } = router.query


  console.log(data);

    return (
        <>
            <article>
                <h1>Hello from Slug Page: {slug} </h1>
            </article>
        </>
    )
}


const query = groq`*[_type == "post"]{
    title, 
    image
  }`;
  
  

  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const queryParams = { slug: params?.slug ?? `` };
  
    const data = await client.fetch(query, queryParams);
  
    return {
      props: {
        data: { data },
      },
    };
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await client.fetch(
      groq`*[_type == "post" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`
    );
  
    return { paths, fallback: true };
  };
  
  
export default Post
