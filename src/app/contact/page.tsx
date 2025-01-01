'use client';

const ContactPage = () => {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hello? We did love to hear from you!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form
          action="#"
          method="POST"
          className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md space-y-6"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Additional Contact Information */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Other Ways to Reach Us</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
          {/* Email */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-700 mt-2">contact@blogwebsite.com</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-700 mt-2">+1 (123) 456-7890</p>
          </div>

          {/* Address */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Address</h3>
            <p className="text-gray-700 mt-2">
              123 Blog Street, Content City, Blogging World
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
