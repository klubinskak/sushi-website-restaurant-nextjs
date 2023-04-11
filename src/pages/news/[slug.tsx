import { useRouter } from 'next/router'
import {createClient, groq} from 'next-sanity'


const Post = ({ blog, profile }) => {
  const router = useRouter()

  return (<>

  </> 
  )
}

export default Post

export const getServerSideProps = async (context:any) => {
  const { slug } = context.query
  const client = createClient({
    projectId: "iytovi01",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog, profile
    }
  }
}