import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/app/mdx-components";
import remarkGfm from "remark-gfm";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import BlogHero from "@/app/components/blog-hero";
import ScrollProgress from "@/app/components/scroll-progress";
import { getBlogBySlug } from "@/app/actions/content-actions";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/navbar";
import ShareButton from "@/app/components/share-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };
  return { title: blog.title };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  const components = useMDXComponents({});

  return (
    <section className="w-full flex flex-col items-center gap-4 max-w-7xl mx-auto py-6 md:py-10 px-4 sm:px-6 lg:px-10">
      <Navbar pyq />
      {/* Top bar: back button */}
      <div className="w-full flex flex-start">
        <a
          href="/blogs"
          className="size-10 flex items-center justify-center self-start bg-impact-blue rounded-full hover:bg-impact-orange hover:scale-105 transition-all duration-200 active:scale-95 text-white"
        >
          <FaArrowLeft />
        </a>
      </div>

      {/* Hero: title + cover image + blurb */}
      <BlogHero
        title={blog.title}
        blurb={blog.blurb}
        imageUrl={blog.cover_image_url || "/geographer.png"}
      />

      <div className="h-px w-full bg-neutral-800 max-w-4xl mx-auto" />

      {/* MDX content */}
      <article className="w-full max-w-4xl font-spectral mx-auto py-8 md:py-12 px-0">
        <MDXRemote
          source={blog.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>

      {/* Sticky scroll progress */}
      <ScrollProgress />

      {/* Fixed share button */}
      <ShareButton title={blog.title} />
    </section>
  );
}
