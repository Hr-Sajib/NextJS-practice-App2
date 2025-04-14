import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import { Blog } from '@/types';
import React from 'react';

export const generateStaticParams = async()=> {
    const res = await fetch(`http://localhost:5100/blogs`);
    const blogs: Blog[] = await res.json();
  
    return blogs.slice(0,3).map(blog => ({
        blogId: blog.id
    }))
}

// or Dynamic metadata
export async function generateMetadata({params}: {params: Promise<{blogId:string}>}) {
    
    const {blogId} = await params;
    const res = await fetch(`http://localhost:5100/blogs/${blogId}`);
    const blog: Blog = await res.json();
    
    return {
      title: blog.title,
      description: blog.description
    }
  }

const BlogsDetailPage = async({params}:{params: Promise<{blogId:string}> }) => {
    const {blogId} = await params;
   
    const res = await fetch(`http://localhost:5100/blogs/${blogId}`);
    const blog: Blog = await res.json();
  
    console.log(blog);

    return (
        <div>
            <BlogDetailsCard blog={blog}></BlogDetailsCard>
        </div>
    );
};

export default BlogsDetailPage;