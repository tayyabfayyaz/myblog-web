import BlogSection from "../components/blogs";

function BlogPage(){
    return(
        <>
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-12 rounded-lg text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg max-w-2xl mx-auto">
            Welcome to our Blog Website! We are passionate about sharing knowledge, experiences, and inspiring content that engages readers from around the globe.
            </p>
        </section>

        <h2 className="text-3xl font-bold my-6 text-center">Our Blogs</h2>

        <BlogSection />
        </>
    )
};

export default BlogPage;