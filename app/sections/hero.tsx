import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Image src="/hero-bg.png" alt="" fill quality={100} sizes="100vw" />
      {/* your content on top */}
      <div className="relative z-10">content here</div>
    </div>
  );
};

export default Hero;
