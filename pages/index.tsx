import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Head from "next/head";
import Image from "next/image";
import Greeter from "../components/Greeter";
import Project from "../components/Project";
import Intro from "../components/Intro";

import Contact from "../components/Contact";

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="main">
      <div className="noise"></div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          multiplier: 2,
          firefoxMultiplier: 2,
          touchMultiplier: 0.1,
          smartPhone: {
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={scrollRef}
      >
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={scrollRef}
        >
          <Greeter />
          <Intro />
          <Project />
          <Contact />
        </div>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Home;
