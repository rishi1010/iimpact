import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="w-full h-dvh flex text-neutral-100 flex-col gap-10 items-center justify-center bg-neutral-950">
      <div className="flex items-center flex-col gap-6 bg-neutral-900 p-6 rounded-2xl">
        <h1 className="sm:text-center text-2xl font-bold font-playfair italic tracking-tight ">
          You Can't Tame the CAT From This Page :({" "}
        </h1>
        <Link
          href={"/"}
          className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 shadow-2xl flex items-center rounded-full bg-linear-to-br from-white to-[#cdcdcd]"
        >
          <div className=" sm:w-40 sm:h-20 md:w-36 md:h-12 flex items-center justify-center rounded-full bg-linear-to-b from-white to-[#e3e3e3]">
            <div className="font-sans font-bold text-base md:text-lg text-neutral-800">
              Go Home
            </div>
          </div>
        </Link>
      </div>

      <Image
        src={"/sleeping-cat.png"}
        alt="sleeping cat"
        width={599}
        height={333}
      />
    </section>
  );
};

export default NotFound;
