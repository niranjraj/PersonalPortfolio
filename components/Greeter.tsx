import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

import greeterImg from "../public/static/integrated.jpg";

type greeterProps = {
  loading: boolean;
  loadingWidth: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const greeterVariant = {
  hidden: {
    scale: 1.5,
  },
  visible: {
    scale: 1,
    transition: { ease: [0, 0.1, 0.12, 0.99], duration: 1 },
  },
};

const loadingVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0, 0.1, 0.12, 0.99],
      duration: 1,
    },
  },
};

const arrowVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: [0, 0.1, 0.12, 0.99],
      duration: 1,
    },
  },
};

const Greeter = (props: greeterProps) => {
  const styleVar = {
    "--loading-Width": `${props.loadingWidth}%`,
  } as React.CSSProperties;
  const { scrollY } = useViewportScroll();

  const x1Value = useTransform(scrollY, (value) => value / -3);
  const y1Value = useTransform(scrollY, (value) => value / -50);
  const y2Value = useTransform(scrollY, (value) => value / 50);
  const x2Value = useTransform(scrollY, (value) => value / 3);

  return (
    <AnimatePresence>
      <div className="greeter">
        <motion.h1
          variants={greeterVariant}
          initial="hidden"
          animate={`${!props.loading && "visible"}`}
        >
          Niranj Rajesh
        </motion.h1>
        <br />

        {props.loading && (
          <motion.div
            key="loader"
            variants={loadingVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="loading-bar"
            style={styleVar}
          ></motion.div>
        )}
      </div>
      {!props.loading && (
        <>
          <motion.div className="tagline-container">
            <h2>
              <motion.div
                className="right-tagline"
                style={{
                  x: x1Value,
                  y: y1Value,
                  transform: `skewY(${y1Value}px)`,
                }}
              >
                <span>
                  Not your average
                  <span className="outline"> Not your average </span>
                  Not your average
                </span>
              </motion.div>
              <motion.div
                className="left-tagline"
                style={{
                  x: x2Value,
                  y: y2Value,
                  transform: `skewY(${y2Value}px)`,
                }}
              >
                <span>
                  <span className="outline">Software Engineer</span>
                  Software Engineer
                  <span className="outline">Software Engineer</span>
                </span>
              </motion.div>
            </h2>
          </motion.div>

          <div className="greeter-content">
            <div className="greeter-img">
              <Image
                src={greeterImg}
                alt="Red"
                height="500"
                width="800"
              ></Image>
            </div>
            <div className="greeter-info">
              <p>
                <span className="row-text">
                  Hi,I'm Niranj Rajesh,a software
                </span>
                <span className="row-text">Engineer based in Kerala </span>
                <span className="row-text">who specializes in building </span>
                <span className="row-text">digital experiences.</span>
              </p>
              <p className="endline-text">know more about me</p>
              <motion.div
                variants={arrowVariant}
                initial="hidden"
                animate="show"
                className="arrow-container"
              >
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Greeter;
