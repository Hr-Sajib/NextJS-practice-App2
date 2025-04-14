"use server"

import { redirect } from 'next/navigation';

export const createBlog = async(data:FormData) => {
    const blogData = Object.fromEntries(data.entries())

    const res = await fetch("http://localhost:5100/blogs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(blogData)
    })

    const createBlogInfo = await res.json();

    if(createBlogInfo){
        redirect(`/blogs/${createBlogInfo.id}`)
    }
    return createBlogInfo;
}