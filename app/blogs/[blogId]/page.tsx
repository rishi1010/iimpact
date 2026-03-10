import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { useMDXComponents } from "@/app/mdx-components";
import remarkGfm from "remark-gfm";
import { FaArrowLeft } from "react-icons/fa";
import BlogHero from "@/app/components/blog-hero";
import ScrollProgress from "@/app/components/scroll-progress";

export async function generateMetadata() {
  const title = "CAT Performance Benchmarks & Targets";
  return { title };
}

export default async function BlogPost() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "blog-2-understanding-the-system.md",
  );
  const content = fs.readFileSync(filePath, "utf-8");
  const components = useMDXComponents({});

  return (
    <section className="w-full flex flex-col items-center gap-4 max-w-7xl mx-auto py-6 md:py-10 px-4 sm:px-6 lg:px-10">
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
        title="Understanding the CAT Exam: A Complete Overview for MBA Aspirants"
        blurb="Preparing for the CAT exam involves more than mastering VARC, DILR, or Quant. A clear understanding of how performance is evaluated plays an equally important role."
        imageUrl="/geographer.png"
      />

      <div className="h-px w-full bg-neutral-800 max-w-4xl mx-auto"></div>

      {/* MDX content */}
      <article className="w-full max-w-4xl font-spectral mx-auto py-8 md:py-12 px-0">
        <MDXRemote
          source={content}
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
    </section>
  );
}
