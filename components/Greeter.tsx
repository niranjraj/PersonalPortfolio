import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const Greeter = () => {
  useEffect(() => {}, []);
  return (
    <section className="greeter-container" data-scroll-section>
      <ul className="nav-title">
        <li>
          <Link href="/">
            <a>Home.</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About.</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact.</a>
          </Link>
        </li>
      </ul>
      <div className="greeter">
        <div className="greeter-subtitle"></div>
        <h1 className="greeter-title">
          <span className="row">Websites {"&"} web </span>
          <span className="row">apps that merge art</span>
          <span className="row">direction, digital interactions</span>
          <span className="row"> and creative strategy.</span>
          <span className="row">
            Providing an interactive digital experience.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Greeter;
