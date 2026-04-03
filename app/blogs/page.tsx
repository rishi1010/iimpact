import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import BlogCard from "../components/blog-cards";
import { getBlogs } from "../actions/content-actions";
import { EmptyMuted } from "../components/empty-blog";

export async function generateMetadata() {
  const title = "Blogs by IIMpact";
  return { title };
}

const BlogsPage = async () => {
  const blogs = await getBlogs();
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <section className="w-full min-h-dvh px-4 md:px-11 bg-[#F8F0E5]">
      <Navbar />
      <div className="relative w-full max-w-7xl mx-auto h-full flex flex-col items-center gap-10 md:gap-18">
        {/* the heading div with the image */}
        <div className="relative w-full items-start rounded-2xl md:rounded-4xl overflow-hidden mt-24 md:mt-32 flex flex-col px-6 md:px-15 py-8 md:py-11 justify-between gap-8 md:gap-12">
          <Image
            src="/blogs-assets/blog-bg.png"
            alt=""
            fill
            quality={100}
            className="z-0 object-cover object-center"
            priority
          />

          {/* title */}
          <h1 className="text-impact-orange z-10 text-left font-forum text-5xl md:text-8xl">
            Blogs & Articles{" "}
            <span className="text-xl md:text-3xl font-manrope">by IIMpact</span>
          </h1>

          {/* featured blog */}
          {featured && (
            <div className="flex flex-col md:flex-row z-10 items-start md:items-stretch justify-between w-full p-2 gap-6 md:gap-0">
              <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                <div className="rounded-full font-bold text-xl text-impact-blue font-forum">
                  Featured
                </div>
                <a
                  href={`/blogs/${featured.slug}`}
                  className="w-full cursor-pointer hover:scale-102 transition-all duration-200 h-56 md:h-80 relative overflow-hidden rounded-xl block"
                >
                  <Image
                    src={featured.cover_image_url || "/geographer.png"}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />
                </a>
              </div>

              <div className="flex w-full md:w-1/2 z-10 flex-col items-start tracking-tight gap-4 md:pt-8 px-0 md:px-8">
                <h2 className="text-xl md:text-2xl text-impact-blue font-forum">
                  {featured.title}
                </h2>
                <p className="text-base md:text-lg text-impact-blue/70 font-manrope">
                  {featured.blurb}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* the rest of the blogs */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-16">
            {rest.map((blog) => (
              <BlogCard
                key={blog.id}
                imageUrl={blog.cover_image_url || "/geographer.png"}
                title={blog.title}
                blurb={blog.blurb}
                slug={blog.slug}
              />
            ))}
          </div>
        )}

        {blogs.length === 0 && <EmptyMuted />}
      </div>
    </section>
  );
};

export default BlogsPage;
