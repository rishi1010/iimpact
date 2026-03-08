import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { useMDXComponents } from "@/app/mdx-components";
import remarkGfm from "remark-gfm";

export default async function BlogPost() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "blog-2-understanding-the-system.md",
  );
  const content = fs.readFileSync(filePath, "utf-8");
  const components = useMDXComponents({});

  return (
    <section className="w-full h-full flex flex-col items-center gap-4 max-w-7xl mx-auto py-10 px-15 ">
      <div className="">
        {/* back button */}
        {/* file path kinda thingy */}
      </div>
      <article className="max-w-4xl font-spectral mx-auto  py-12 px-4">
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
    </section>
  );
}
