import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Image src="/hero-bg.png" alt="" fill quality={100} sizes="100vw" />
      {/* your content on top */}
      <div className="relative z-10 flex flex-col items-center gap-14">
        {/* hero text */}
        <div className="flex text-7xl  font-manrope text-impact-blue flex-col gap-2 items-center">
          <h1 className="font-semibold">India's MBA Dream</h1>
          <h1 className="italic underline decoration-impact-orange font-playfair">
            Redefined
          </h1>
        </div>

        {/* subtext */}
        <div className=" text-balance text-xl font-sans w-3xl text-center text-impact-blue">
          A smarter way to crack CAT. Learn the topper’s way of thinking with a
          proven 3-phase system led by{" "}
          <span className="font-bold">100%ilers</span> from IIM Bangalore & FMS
          Delhi.
        </div>

        <div className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 flex items-center rounded-full bg-linear-to-br from-white to-[#cdcdcd]">
          <div className="w-40 flex items-center justify-center rounded-full h-16 bg-linear-to-b from-white to-[#e3e3e3]">
            <div className="font-sans font-bold text-xl text-neutral-800">
              Join Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
