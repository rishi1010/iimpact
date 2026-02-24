import React from "react";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="w-full min-h-dvh  text-neutral-900 bg-linear-to-b from-[#f6f4f0] via-[#AEDCEF] to-[#f4f6f0] "
    >
      <div className="max-w-7xl h-full mx-auto flex flex-col items-center justify-center gap-23">
        <div className="font-mono text-8xl text-center">“</div>
        <div className="flex flex-col items-center text-center gap-6 w-3/4">
          <div className="font-spectral text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            blandit massa et mi scelerisque, nec ultricies lectus commodo. Ut
            sed dignissim lectus, sit amet pharetra magna. Ut rutrum pretium
            laoreet. Sed egestas neque quis risus rhoncus, ut pellentesque purus
            convallis. Nulla venenatis in orci id aliquet. Nulla egestas ligula
            et cursus bibendum. Aenean id ullamcorper risus. Nullam efficitur
            aliquet sem id ornare. Donec quis enim nibh. Donec in consectetur
            nisi, nec tincidunt tortor.
          </div>
          <div className="font-sans text-neutral-600 text-3xl">
            Student, 99.99 %ile
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
