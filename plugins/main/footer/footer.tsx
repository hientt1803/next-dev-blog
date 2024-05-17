"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const RenderFooter = ({ scrollProgress }: { scrollProgress: any }) => {
    const y = useTransform(scrollProgress, [0, 1], [-225, 0]);

    return (
      <footer>
        <motion.div
          style={{ y }}
          className="flex justify-between items-center gap-16 flex-wrap"
        >
          <div className="flex-1 flex flex-col gap-3">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Next-dev
            </Link>
            <p className="text-lg font-mono text-muted-foreground">
              Next-dev A constructive and inclusive social network for everyone.
              With you every step of your journey. Made by Next-to-dev. Next-dev
              ©2024.
            </p>
          </div>
          <div className="flex-[2] flex justify-end gap-14">
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold tracking-tight mb-2 font-mono text-white">
                About Me
              </h4>
              <ul>
                <li className="list-item">
                  <Link
                    href="/"
                    className="text-md tracking-tight font-mono text-muted-foreground"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    href="/"
                    className="text-md tracking-tight font-mono text-muted-foreground"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    href="/"
                    className="text-md tracking-tight font-mono text-muted-foreground"
                  >
                    Github
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    href="/mailto:tronghientran18@gmail.com"
                    className="text-md tracking-tight font-mono text-muted-foreground"
                  >
                    Gmail
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold tracking-tight mb-2 font-mono text-white">
                Next Dev
              </h4>
              <ul>
                <li className="list-item">
                  <Link
                    href="/"
                    className="text-md tracking-tight font-mono text-muted-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    href="/"
                    className="text-md tracking-tight font-mono text-muted-foreground"
                  >
                    Posts
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    href="/"
                    className="text-md tracking-tight font-mono text-muted-foreground"
                  >
                    Create Posts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </footer>
    );
  };

  return (
    <div
      ref={container}
      className="bg-black w-full flex justify-center items-center overflow-hidden mt-[100px] h-[250px] px-10"
    >
      {RenderFooter({ scrollProgress: scrollYProgress })}
    </div>
  );
};
