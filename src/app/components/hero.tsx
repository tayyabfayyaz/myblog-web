function HeroSection(){
    return(
        <>
                {/* Hero Section */}
            <section className="bg-blue-500 text-white text-center py-20 px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Blog</h1>
                <p className="text-lg md:text-xl mb-6">Discover insightful articles and ideas</p>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-200">
                Get Started
                </button>
            </section>
        </>
    );
};

export default HeroSection;