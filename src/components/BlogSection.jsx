import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://blog.icancare.com/wp-json/wp/v2/posts?per_page=3&_embed"
        );
        const formattedBlogs = response.data.map((post) => ({
          title: post.title.rendered,
          description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
          link: post.link,
          image: post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : "/default-blog-image.png",
        }));
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-8 md:py-20 px-4 bg-white font-[poppins] mt-4 md:mt-8">
      <div className="text-center mb-6 md:mb-12">
        <p className="text-[#2987D7] font-semibold uppercase text-sm md:text-base">BLOG</p>
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-1">From The Blog</h2>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex hover:scale-[102%] transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-32 h-32 object-cover"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm text-black mb-1 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600/70 text-xs line-clamp-2 mb-2">
                  {blog.description}
                </p>
              </div>
              <a 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#2987D7] text-xs font-semibold hover:text-blue-700 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-[105%] transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover h-60"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="font-semibold text-lg text-black mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600/70 text-sm mb-6">
                {blog.description}
              </p>
              <a 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#2987D7] hover:bg-blue-700 text-white font-base py-2 px-6 rounded-full self-end transition ease-in-out duration-200"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;