import KrabSession from "./session4/krabSession";
import {  useDispatch } from "react-redux";

import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

function Carreira({
  openModal,
  setModalJobName,
  setModalJobSegment,
  setModalJobDuration,
  setModalDescJob,
  setMPos,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const dispatch = useDispatch();

  function particlesOff() {
    return { type: "off" };
  }

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      dispatch(particlesOff());
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        className="bg-[#2A2344] w-screen h-screen items-center flex flex-row "
        id="carreira"
      >
        <div className="container mx-auto grid  h-[50%]   h-screen">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-6xl py-10 absolute mt-[100px] mx-5"
          >
            Carreira
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-[250px] absolute mx-5"
          >
            Na seção abaixo, apresento um panorama completo da minha experiência
            profissional até o presente momento.”
          </motion.p>

          <div className="flex flex-row justify-between text-4xl font-extralight mt-96">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 0.1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="h-full opacity-[0.1] hover:opacity-[0.5] cursor-pointer mx-5  "
            >
              2013
            </motion.h1>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 0.2, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="h-full opacity-[0.2] hover:opacity-[0.6] cursor-pointer mx-5   "
            >
              2014
            </motion.h1>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 0.3, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="h-full opacity-[0.3] hover:opacity-[0.7] cursor-pointer mx-5   "
            >
              2018
            </motion.h1>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 0.4, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="h-full opacity-[0.4] hover:opacity-[0.8] cursor-pointer mx-5   "
            >
              2021
            </motion.h1>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 0.5, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="h-full opacity-[0.5] hover:opacity-[0.9] cursor-pointer mx-5   "
            >
              Hoje
            </motion.h1>
          </div>
          <KrabSession
            openModal={openModal}
            setModalJobName={setModalJobName}
            setModalJobSegment={setModalJobSegment}
            setModalJobDuration={setModalJobDuration}
            setModalDescJob={setModalDescJob}
            setMPos={setMPos}
          />
        </div>
      </div>
    </>
  );
}

export default Carreira;
