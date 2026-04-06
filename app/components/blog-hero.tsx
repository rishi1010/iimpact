import Image from "next/image";

interface BlogHeroProps {
  title: string;
  blurb: string;
  imageUrl: string;
}

export default function BlogHero({ title, blurb, imageUrl }: BlogHeroProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-10 px-4">
      {/* Title */}
      <h1 className="font-spectral tracking-tight text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
        {title}
      </h1>

      {/* Cover image */}
      <div className="relative w-full h-[480px] rounded-xl overflow-hidden bg-[#c7b8f5]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Blurb */}
      <p className="mt-5 text-lg text-gray-600 font-spectral leading-relaxed max-w-3xl">
        “{blurb}“
      </p>
    </div>
  );
}
