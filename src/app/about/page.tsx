'use client';

import { MarqueeDemo } from "@/app/components/testimonial"
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to our Blog Website! We are passionate about sharing knowledge, experiences, and inspiring content that engages readers from around the globe.
        </p>
      </section>
    <div className="p-6 space-y-12">

      {/* Mission Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 text-center">
          Our mission is to create a platform where ideas, stories, and insights come to life. We aim to empower writers and engage readers with thoughtful and meaningful content.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "John Doe", role: "Content Strategist", img: "/user1.jpg" },
            { name: "Jane Smith", role: "Lead Editor", img: "/user2.jpg" },
            { name: "Mike Johnson", role: "SEO Specialist", img: "/user3.jpg" },
          ].map((teamMember, idx) => (
            <div key={idx} className="text-center bg-white p-6 rounded-lg shadow-md">
              <Image
                src={teamMember.img}
                alt={teamMember.name}
                width={96}
                height={96}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{teamMember.name}</h3>
              <p className="text-gray-600">{teamMember.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Quality Content",
              description:
                "We prioritize delivering high-quality, original, and well-researched articles.",
            },
            {
              title: "Diverse Topics",
              description:
                "From tech trends to lifestyle tips, we cover a wide range of interests.",
            },
            {
              title: "Community Focused",
              description:
                "We value our readers' feedback and continuously improve our platform.",
            },
          ].map((reason, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Stats Section */}
      <section className="bg-blue-50 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Achievements</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {[
            { title: "Blogs Published", value: "120+" },
            { title: "Active Readers", value: "15,000+" },
            { title: "Global Reach", value: "50+ Countries" },
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-blue-500">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-700">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Readers Say</h2>
        
        <MarqueeDemo />
      </section>
    </div>
    </>
  );
};

export default AboutPage;
