import pic01 from "../assets/img01.01.png";

import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";


function Home() {

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);

      mainControls.start("visible");
    }
  }, [isInView]);


  return (
    <>
      <div className="bg-[#19142A] w-screen h-screen flex flex-col">
        <div ref={ref} className="container mx-auto mt-28">
          <div className="flex flex-row">
            <div className="w-[50%] mt-24">
              <div className="h-full flex flex-col items-start justify-center  mx-auto">
                <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="py-1 text-8xl font-medium">Eloy Gomes</motion.h1>
                <motion.h4 
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="px-1 py-1 text-4xl font-light text-left">
                  Full Stack Developer
                </motion.h4>
              </div>
            </div>
            <div className="w-[50%] mt-24 flex flex-col">
              <motion.img 
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.35 }}
              src={pic01} alt="f" className="max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
