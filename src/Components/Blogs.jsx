import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const getData = async () =>{
        const response = await fetch('http://localhost:8000/api/blogs');
        const data = await response.json();
        console.log('data:', data)
        const {allBlogs} = data;
        console.log('allBlogs:', allBlogs)
        setBlogs(allBlogs);
        console.log('state: ', blogs);
    }
    useEffect(() =>{
        getData();
    }, [])

    return(
        <>
        <h1>Blogs</h1>
        {blogs.length > 0 ? blogs.map((blog, key) => <BlogCard key={blog.id} blog={blog} />) : 'no blogs found'}
        </>

    );
}

export default Blogs;