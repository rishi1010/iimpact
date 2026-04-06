import Link from "next/link";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  blurb: string;
  slug: string;
}

export default function BlogCard({
  imageUrl,
  title,
  blurb,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="w-100 h-110.5 cursor-pointer flex flex-col bg-[#f5f0e8] overflow-hidden shrink-0">
        {/* Image — fixed height */}
        <div className="group relative w-full h-70 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-[#E65959] mix-blend-soft-light" />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-2 px-0 pt-5 pb-4">
          <h2 className="font-forum text-impact-blue text-[28px] leading-tight">
            {title}
          </h2>
          <p className="font-sans text-base leading-relaxed text-gray-700 line-clamp-3">
            {blurb}
          </p>
        </div>
      </div>
    </Link>
  );
}
