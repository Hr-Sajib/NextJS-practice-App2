import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import { Blog } from "@/types";

const HomePage = async() => {
  const res = await fetch("http://localhost:5100/blogs",{
    next:{
      revalidate: 30
    }
  })
  const blogs : Blog[] = await res.json()
  console.log(blogs)
  return (
    <div className="my-10">
      <h1 className="text-4xl text-center">Latest Blogs</h1>

        <LatestBlogs blogs={blogs}></LatestBlogs>

    </div>
  );
};
 
export default HomePage;
