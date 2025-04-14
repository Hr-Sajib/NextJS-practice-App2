import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
    title: "NextBlog | Blogs"
}

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5100/blogs",{
    cache:"no-store" //default behavior anyway. it maintains SSR
  });
  const blogs: Blog[] = await res.json();
  console.log(blogs);
  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All Blogs at <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-6 my-5">
        {
            blogs.map(blog=> <BlogCard blog={blog} key={blog.id}></BlogCard>)
        }
      </div>
    </div>
  );
};

export default BlogsPage;
 