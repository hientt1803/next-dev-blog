"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const OverviewImageBanner = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <div
      ref={container}
      className="w-full flex justify-center items-center overflow-hidden mt-[30px] h-auto px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 h-[800px]">
        <div className="flex flex-col gap-4">
          <motion.div style={{ y: y1 }}>
            <Image
              src="https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
              alt="Banner image"
              width={650}
              height={150}
              className="shadow-md"
            />
          </motion.div>
          <motion.div style={{ y: y2 }}>
            <Image
              src="https://images.unsplash.com/photo-1534531688091-a458257992cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2xsZWN0aW9uJTIwc3Rvcmllc3xlbnwwfDB8MHx8fDI%3D"
              alt="Banner image"
              width={650}
              height={200}
              className="shadow-md"
            />
          </motion.div>
        </div>

        <motion.div style={{ y: y3 }}>
          <Image
            src="https://images.unsplash.com/photo-1506430730356-91514bf7359c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
            alt="Banner image"
            width={650}
            height={500}
            className="shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
};
