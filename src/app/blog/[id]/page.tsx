'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import CommentContainer from "@/app/components/comment";

type BlogType = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  imgPath: string;
  userName: string;
  date: string;
  status: string;
};

type ReviewsType = {
  id: number;
  imgPath: string;
  title: string;
  date: string;
  message: string;
}

const reviewsData: ReviewsType[] = [
  {
    id: 1,
    imgPath: "/blog1.jpg",
    title: "Great read!",
    date: "2021-10-01",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero vel felis ultricies lacinia."
  },
  {
    id: 2,
    imgPath: "/blog2.jpg",
    title: "Interesting insights",
    date: "2021-10-02",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero vel felis ultricies lacinia."
  },
  {
    id: 3,
    imgPath: "/blog3.jpg",
    title: "Well written",
    date: "2021-10-03",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero vel felis ultricies lacinia."
  },
  {
    id: 4,
    imgPath: "/blog4.jpg",
    title: "Loved it!",
    date: "2021-10-04",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero vel felis ultricies lacinia."
  },
  {
    id: 5,
    imgPath: "/blog5.jpg",
    title: "Amazing content",
    date: "2021-10-05",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero vel felis ultricies lacinia."
  },
];


const BlogPage = () => {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blogData');
        const data: BlogType[] = await response.json();
        const blog = data.find( (item) => item.id === parseInt(id || "", 10))
        setBlog(blog || null);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog Details</h1>
        <p className="text-lg md:text-xl mb-6">Explore insights and stories</p>
      </section>

      {/* Blog Content */}
      <main className="flex flex-col md:flex-row p-6 gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>

          <Image
            src={blog.imgPath}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full object-cover rounded-lg mb-4 h-[500px]"
          />

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="mr-4">{blog.userName}</span>
            <span className="mr-4">{blog.date}</span>
            <span>{blog.status ? "Active" : "Inactive"}</span>
          </div>

          <div className="text-gray-700 text-base leading-7">
            {blog.description}
          </div>

          <div className="comment_container">
            <h2 className="text-3xl text-black my-3 font-bold border-b-2 border-b-gray-100">Comments</h2>

            <CommentContainer />

          </div>
        </div>

        {/* Right Section */}
        <aside className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Reviews */}
          <div className="reviews_container h-fit p-3 bg-gray-100">
            {reviewsData.map( (review) => (
              <div key={review.id} className="review flex gap-4 items-center p-4 bg-white my-3 rounded-lg shadow-md cursor-pointer hover:shadow-2xl duration-300">
                <Image
                  src={review.imgPath}
                  alt="User"
                  width={50}
                  height={50}
                  className="rounded-lg w-[50px] h-[50px]"
                />
                <div>
                  <p className="text-gray-700 font-semibold">{review.title}</p>
                  <p className="text-sm text-gray-500">{review.message}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

        </aside>
      </main>
    </div>
  );
};

export default BlogPage;
