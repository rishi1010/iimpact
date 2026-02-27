"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const quote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit massa et mi scelerisque, nec ultricies lectus commodo. Ut sed dignissim lectus, sit amet pharetra magna. Ut rutrum pretium laoreet. Sed egestas neque quis risus rhoncus, ut pellentesque purus convallis. Nulla venenatis in orci id aliquet. Nulla egestas ligula et cursus bibendum. Aenean id ullamcorper risus. Nullam efficitur aliquet sem id ornare. Donec quis enim nibh. Donec in consectetur nisi, nec tincidunt tortor.";

const words = quote.split(" ");

const Testimonial = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonial"
      className="w-full min-h-dvh text-neutral-900 bg-linear-to-b from-[#f6f4f0] via-[#AEDCEF] to-[#f4f6f0]"
    >
      <div className="max-w-7xl h-full mx-auto px-6 sm:px-10 lg:px-12 py-20 flex flex-col items-center justify-center gap-10 sm:gap-16 lg:gap-23">
        {/* Opening quote mark */}
        <motion.div
          className="font-mono text-6xl sm:text-7xl lg:text-8xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          &ldquo;
        </motion.div>

        <div
          ref={ref}
          className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full sm:w-5/6 lg:w-3/4"
        >
          {/* Word-by-word animated quote */}
          <p className="font-spectral text-xl sm:text-2xl lg:text-3xl leading-relaxed">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: i * 0.04,
                }}
                className="inline-block mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Attribution */}
          <motion.div
            className="font-sans text-neutral-600 text-xl sm:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: words.length * 0.04 + 0.1,
            }}
          >
            Student, 99.99 %ile
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
