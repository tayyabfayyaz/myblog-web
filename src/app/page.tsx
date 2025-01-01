import Head from 'next/head';
import HeroSection from './components/hero';
import BlogSection from './components/blogs';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Static Blog Website</title>
        <meta name="description" content="A modern blog website built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      {/* Hero Section */}
      <HeroSection />

      {/* Blogs Section */}
      <BlogSection />

      
    </div>
  );
}
