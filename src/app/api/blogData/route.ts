import { NextResponse } from "next/server";

type BlogType = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  imgPath: string;
  userName: string;
  date: string;
  status: string
};

export const GET = () => {
  const blogs: BlogType[] = [
    {
      id: 1,
      title: "The Rise of Artificial Intelligence",
      shortDescription: "Discover how AI is transforming industries and reshaping our world.",
      description:
        "Artificial Intelligence (AI) is at the forefront of technological advancement. From automating tasks to enhancing decision-making processes, AI has become an integral part of our lives. This blog explores its applications, benefits, and potential challenges.",
      imgPath: "/blog1.jpg",
      userName: "Tayyab Fayyaz",
      date: "2-Jan-2024",
      status: "active"
    },
    {
      id: 2,
      title: "Technology: Driving the Future",
      shortDescription: "Explore the latest technological trends and innovations.",
      description:
        "Technology continues to evolve at an unprecedented pace. From 5G networks to quantum computing, this blog delves into the groundbreaking advancements shaping the future and how they impact our daily lives.",
      imgPath: "/blog2.jpg",
      userName: "Tayyab Fayyaz",
      date: "2-Jan-2024",
      status: "active"
    },
    {
      id: 3,
      title: "AI Agents: The Future of Automation",
      shortDescription: "Learn how AI agents are revolutionizing automation and interactions.",
      description:
        "AI agents are intelligent systems capable of performing tasks autonomously. This blog discusses their role in streamlining processes, improving customer service, and their potential to redefine human-machine collaboration.",
      imgPath: "/blog3.jpg",
      userName: "Tayyab Fayyaz",
      date: "2-Jan-2024",
      status: "active"
    },
    {
      id: 4,
      title: "The Intersection of AI and Healthcare",
      shortDescription: "Understand how AI is revolutionizing healthcare systems.",
      description:
        "AI is transforming the healthcare industry by enabling early diagnosis, personalized treatments, and efficient patient management. This blog highlights the key innovations and challenges in adopting AI-driven healthcare solutions.",
      imgPath: "/blog4.jpg",
      userName: "Tayyab Fayyaz",
      date: "2-Jan-2024",
      status: "active"
    },
  ];

  return NextResponse.json(blogs);
};