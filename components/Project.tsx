import React from "react";
import Image from "next/image";
import proj1 from "../public/static/invoicely.png";
import proj2 from "../public/static/supplyco3.png";
import proj3 from "../public/static/machinelearning.png";
import proj4 from "../public/static/arch.png";
import Link from "next/link";

type projectItem = {
  image: StaticImageData;
  title: string;
  subtitle: string;
  type: string;
  speed: number;
  horizontalSpeed: number;
};
const projectItems: projectItem[] = [
  {
    image: proj1,
    title: "Invoicely",
    subtitle: "a professional web app for Invoices",
    type: "logic,implementation,website",
    speed: 3,
    horizontalSpeed: 3,
  },
  {
    image: proj2,
    title: "SupplycoKerala",
    subtitle: "an online platform for government supply",
    type: "design,logic,implementation,website",
    speed: 3,
    horizontalSpeed: -3,
  },
  {
    image: proj3,
    title: "Diabetes Prediction",
    subtitle: "diagnosis of diabetes through machine learning",
    type: "logic,implementation,report",
    speed: 3,
    horizontalSpeed: 3,
  },
  {
    image: proj4,
    title: "Arch Config",
    subtitle: "configuration of arch.",
    type: "design,experiment",
    speed: 3,
    horizontalSpeed: -3,
  },
];

const Project = () => {
  return (
    <section className="project-container" data-scroll-section>
      <div className="projects">
        <div className="intro-subtitle">Projects.</div>
        <h1 className="project-header">A collection of my latest works</h1>
        <ul className="projects-layout">
          {projectItems.map((project, index) => {
            return (
              <li
                className={`project-item-wrapper project-item-wrapper-${index}`}
                key={index}
              >
                <article>
                  <Link href="/">
                    <a
                      className="project-item-container"
                      data-scroll
                      data-scroll-speed={`${project.speed}`}
                    >
                      <div className="project-item-img-wrapper">
                        <div className={`item-img item-img${index}`}>
                          <Image
                            data-scroll="true"
                            className="proj-img"
                            src={project.image}
                            layout="intrinsic"
                          />
                        </div>
                      </div>
                      <div className="project-item-text">
                        <p className="project-counter">0{index + 1}.</p>
                        <div className="project-text-line">
                          <p className="project-title">{project.title}</p>
                          <p className="project-type">{project.type}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Project;
