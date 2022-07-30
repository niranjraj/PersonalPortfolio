import React, { useState } from "react";
import Image from "next/image";
import SvgComponent from "./SvgComponent";

import Render from "./Render";
import { Model as Football } from "./Football";
import { Model as Controller } from "./Controller";
import { Model as Headphone } from "./Headphone";

import selfImage from "../public/static/beachfront.jpeg";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";

type Hobby = {
  state: number;
  title: string;
  des: string;
};
const myHobby = [
  {
    state: 0,
    title: "Go Red Devils",
    des: `I'm a huge Manchester United fan. I spent most of my time
  watching the game at 3am. Downside of being an Asian football
  fan.`,
  },
  {
    state: 1,
    title: "PC Master Race",
    des: `Gaming has always been my interest as a child, It is also what led me to love technology. FPS games are my favorite some them are Valorant, Apex, CS 1.6, I'm also down to play other games as well.`,
  },
  {
    state: 2,
    title: "Playlist On the Way",
    des: `Music is my haven, The headphones come on, and everything else in the world goes silent. Linkin Park     and Daft Punk were my favorites, right now The Weekend is my go-to. I'm not restricted by a particular genre of music. `,
  },
];

const Intro = () => {
  const [hobby, setHobby] = useState<Hobby>(myHobby[0]);

  return (
    <section className="intro-container" data-scroll-section>
      <div className="about_intro">
        <div className="intro-subtitle">About.</div>
        <h1 className="header-intro">Hello there!</h1>
        <div className="intro-text">
          <p className="intro-text-p">
            <span className="bold"> Hi,I'm Niranj Rajesh </span>a passionate
            creative frontend developer! I love to create new and awesome
            features, Optimized to perform across all devices and provide a
            solid experience.
            <span className="row">
              Each project is an opportuinity to learn new concepts across
              multiple domains including arts, maths and physics. I like to
              Explore all
            </span>
            <span className="row">
              It is a pretty typical description but what excites me the most
              about web developing is all the different animations and
              interactions that I can bring to a website.Fueled by Monster
              energy drink, I provide unique and quality Web experience.
            </span>
          </p>
          <div className="intro-image">
            <Image src="/static/beachfront.jpeg" height="650" width="500" />
          </div>
        </div>
      </div>
      <div className="character-section about-section-start">
        <h2 className="about-section-title">
          <SvgComponent />
          <span>Character</span>
        </h2>
        <div className="character-info section-content-space">
          <div className="about-tags-wrapper">
            <ul className="about-tags">
              <li>Hardworking and genuine</li>
              <li>Living in India</li>
              <li>Night Owl</li>
              <li>Currently listening to Nothing</li>
            </ul>
            <div className="about-lang">
              <h2 className="about-lang-title">Languages</h2>
              <div className="lang-item-wrapper">
                <div className="lang-item">
                  <Counter newPercentage={100} />
                  <div className="lang-info">
                    <h3>English</h3>
                    <p>Advance Level</p>
                  </div>
                </div>
                <div className="lang-item">
                  <Counter newPercentage={80} />
                  <div className="lang-info">
                    <h3>Malayalam</h3>
                    <p>Native language</p>
                  </div>
                </div>
                <div className="lang-item">
                  <Counter newPercentage={40} />
                  <div className="lang-info">
                    <h3>Hindi</h3>
                    <p>Elementary Level</p>
                  </div>
                </div>
                <div className="lang-item">
                  <Counter newPercentage={30} />
                  <div className="lang-info">
                    <h3>Arabic</h3>
                    <p>Elementary Level</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-desc">
            <p>
              <span className="row">
                About myself you ask? I am a pretty chill person (I guess?)
              </span>

              <span className="row">
                I usually work alone, but I'm down for collabs. Something that
              </span>
              <span className="row">
                drives me is learning new technology. I love the web, spend most
              </span>
              <span className="row">
                of my time on it. I'm highly motivated to grow as a developer.
              </span>
              <span className="row"></span>
            </p>
          </div>
        </div>
      </div>

      <div className="hobbies-section about-section-start">
        <h2 className="about-section-title">
          <SvgComponent />
          <span>Hobbies</span>
        </h2>
        <div className="section-content-space">
          <div className="button-section">
            <button
              style={{ color: hobby.state === 0 ? "#E0D8CD" : "#b4ada2" }}
              onClick={() => {
                setHobby(myHobby[0]);
              }}
            >
              Football
            </button>
            <button
              style={{ color: hobby.state === 1 ? "#E0D8CD" : "#b4ada2" }}
              onClick={() => {
                setHobby(myHobby[1]);
              }}
            >
              Games
            </button>
            <button
              style={{ color: hobby.state === 2 ? "#E0D8CD" : "#b4ada2" }}
              onClick={() => {
                setHobby(myHobby[2]);
              }}
            >
              Music
            </button>
          </div>
          <div className="wrapper-render">
            <div className="render-desc">
              <h3>{hobby.title}</h3>
              <p>{hobby.des}</p>
            </div>
            <div className="render">
              {hobby.state === 0 ? (
                <Render position={[10, 0, 21]}>
                  <Football scale={0.1} />
                </Render>
              ) : hobby.state === 1 ? (
                <Render>
                  <Controller scale={2.5} />
                </Render>
              ) : (
                <Render position={[10, -2, 17]}>
                  <Headphone scale={0.1} position={[0, -2, 0]} />
                </Render>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="skills-section ">
        <h2 className="about-section-title skills-space">
          <SvgComponent />
          <span>Skills</span>
        </h2>
        <div className="skills">
          <ul>
            <li>
              <div
                className="skills-list-item"
                data-scroll
                data-scroll-speed="-5"
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
              >
                <h2 data-text="React  ">React </h2>
              </div>
            </li>
            <li>
              <div
                className="skills-list-item"
                data-scroll
                data-scroll-speed="-5"
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
              >
                <h2 data-text="html & css,  ">html {"&"} css,</h2>
              </div>
            </li>
            <li>
              <div
                className="skills-list-item"
                data-scroll
                data-scroll-speed="-5"
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
              >
                <h2 data-text="Python  ">Python </h2>
              </div>
            </li>
            <li>
              <div
                className="skills-list-item"
                data-scroll
                data-scroll-speed="-5"
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
              >
                <h2 data-text="Javascript  ">Javascript</h2>
              </div>
            </li>
            <li>
              <div
                className="skills-list-item"
                data-scroll
                data-scroll-speed="-5"
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
              >
                <h2 data-text="Django  ">Django</h2>
              </div>
            </li>
            <li>
              <div
                className="skills-list-item"
                data-scroll
                data-scroll-speed="-5"
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
              >
                <h2 data-text="TypeScript  ">TypeScript</h2>
              </div>
            </li>
            <li>
              <div
                className="skills-list-item"
                data-scroll
                data-scroll-speed="-5"
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
              >
                <h2 data-text="Tailwind  ">Tailwind</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
