'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type BlogType = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  imgPath: string;
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blogData');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); 

  const handleBlogClick = (id: number) => {
    router.push(`/blog/${id}`); // Navigate
  };

  return (
    <main id="blogs" className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => handleBlogClick(blog.id)}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-black hover:bg-opacity-50 cursor-pointer">
          <Image
            src={blog.imgPath}
            alt={`Blog ${blog.title}`}
            width={500}
            height={300}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">
              {blog.shortDescription}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the parent div's click event
                handleBlogClick(blog.id);
              }}
              className="text-blue-500 hover:text-blue-700 font-semibold">
              Read More
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default BlogSection;