import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Greeter from "../components/Greeter";
import About from "../components/About";
import proj1 from "../public/static/invoicely.png";
import proj2 from "../public/static/supplyco3.png";
import proj3 from "../public/static/machinelearning.png";
import proj4 from "../public/static/arch.png";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [loadingWidth, setLoadingWidth] = useState(10);

  useEffect(() => {
    setLoading(true);
    const loaderInterval = setInterval(() => {
      setLoadingWidth((prev) => prev + 0.2);
    }, 3);

    const loaderTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(loaderInterval);
    }, 2000);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <>
      <div className="greeter-container">
        <Greeter
          loading={loading}
          setLoading={setLoading}
          loadingWidth={loadingWidth}
        />
      </div>
      <section className="project-section">
        <div>
          <h1 className="project-title">
            <span> Projects</span> <span>and </span>
            <span>Experiments</span>
          </h1>
          <p className="project-description">
            <span> Some of my favorite works and tinkering.</span>
            <span>My advice:- Don't be busy,be productive</span>
          </p>
        </div>
        <div className="project-container">
          <div className="proj1 proj">
            <div className="project-image-container">
              <Image src={proj1} width="800" height="600" quality={100}></Image>
            </div>
            <p>
              <span className="project-content-title">Invoicely</span>
              <span className="project-content-description">
                logic-implementation-website
              </span>
            </p>
          </div>
          <div className="proj2 proj">
            <div className="project-image-container">
              <Image src={proj2} width="800" height="600" quality={100}></Image>
            </div>
            <p>
              <span className="project-content-title">SupplycoKerala</span>
              <span className="project-content-description">
                design-logic-implementation-website
              </span>
            </p>
          </div>

          <div className="proj3 proj">
            <div className="project-image-container">
              <Image src={proj3} width="800" height="600" quality={100}></Image>
            </div>
            <p>
              <span className="project-content-title">Diabetes Prediction</span>
              <span className="project-content-description">
                logic-implementation-report
              </span>
            </p>
          </div>
          <div className="proj4 proj">
            <div className="project-image-container">
              <Image src={proj4} width="800" height="600" quality={100}></Image>
            </div>
            <p>
              <span className="project-content-title">Arch Config</span>
              <span className="project-content-description">
                design-experiment
              </span>
            </p>
          </div>
        </div>
      </section>
      <About />
    </>
  );
};

export default Home;
