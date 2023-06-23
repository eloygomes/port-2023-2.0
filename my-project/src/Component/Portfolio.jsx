import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { motion, useInView, useAnimation } from "framer-motion";

import ModalWindow from "../assets/modal/ModalWindow";

import images from "./PortS/PortCovers";

import port01 from "../assets/port/Profissional/01/behance_c3tech.png";

//Redux
function freezeScroll() {
  return { type: "hold" };
}

function hideNavbar() {
  return { type: "hide" };
}

function particlesOff() {
  return { type: "off" };
}

function particlesOn() {
  return { type: "on" };
}

function Portfolio() {
  //
  const [modalStatus, setModalStatus] = useState(false);
  const [postImg, setPostImg] = useState(port01);

  const [portWorkInfo, setPortWorkInfo] = useState({});

  // Handle page scroll
  const [scrollEnabled, setScrollEnabled] = useState(false);

  // Handle image changes when portfolio buttons are clicked
  const [portWorkStatus, setPortWorkStatus] = useState("uiux");

  //SRC of images
  const [imgSrc01, setImgSrc01] = useState("");
  const [imgSrc02, setImgSrc02] = useState("");
  const [imgSrc03, setImgSrc03] = useState("");
  const [imgSrc04, setImgSrc04] = useState("");
  const [imgSrc05, setImgSrc05] = useState("");
  const [imgSrc06, setImgSrc06] = useState("");

  const scrollBodyModalOn = useSelector((state) => state.scrollBodyModalOn);

  const dispatch = useDispatch();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  //Handle page scroll
  const handleToggleScroll = () => {
    if (scrollEnabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setScrollEnabled(!scrollEnabled);
  };

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      dispatch(particlesOn());
      mainControls.start("visible");
    }
  }, [isInView]);

  //Handle page scroll
  useEffect(() => {
    handleToggleScroll();
  }, [scrollBodyModalOn]);

  const handleImages = () => {
    console.log(portWorkStatus);
  };

  useEffect(() => {
    if (portWorkStatus === "uiux") {
      console.log("uiux");
      setImgSrc01(images.uiux.img1);
      setImgSrc02(images.uiux.img2);
      setImgSrc03(images.uiux.img3);
      setImgSrc04(images.uiux.img4);
      setImgSrc05(images.uiux.img5);
      setImgSrc06(images.uiux.img6);
    }

    if (portWorkStatus === "impressos") {
      console.log("impressos");
      setImgSrc02(images.impressos.img2);
      setImgSrc01(images.impressos.img1);
      setImgSrc03(images.impressos.img3);
      setImgSrc04(images.impressos.img4);
      setImgSrc05(images.impressos.img5);
      setImgSrc06(images.impressos.img6);
    }

    if (portWorkStatus === "branding") {
      console.log("branding");
      setImgSrc01(images.branding.img1);
      setImgSrc02(images.branding.img2);
      setImgSrc03(images.branding.img3);
      setImgSrc04(images.branding.img4);
      setImgSrc05(images.branding.img5);
      setImgSrc06(images.branding.img6);
    }

    if (portWorkStatus === "foto") {
      console.log("foto");
      setImgSrc01(images.foto.img1);
      setImgSrc02(images.foto.img2);
      setImgSrc03(images.foto.img3);
      setImgSrc04(images.foto.img4);
      setImgSrc05(images.foto.img5);
      setImgSrc06(images.foto.img6);
    }

    if (portWorkStatus === "edicao") {
      console.log("edicao");
      setImgSrc01(images.edicao.img1);
      setImgSrc02(images.edicao.img2);
      setImgSrc03(images.edicao.img3);
      setImgSrc04(images.edicao.img4);
      setImgSrc05(images.edicao.img5);
      setImgSrc06(images.edicao.img6);
    }
  }, [portWorkStatus]);

  // console.log(portWorkStatus);
  // console.log(imgSrc01);

  return (
    <>
      <ModalWindow
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        postImg={postImg}
        setPostImg={setPostImg}
        portWorkInfo={portWorkInfo}
      />
      {/* {window.innerWidth <= 961 ? (
        
        ) : (
          
        )} */}
      <div
        className="bg-[#19142A] w-screen h-full sm:h-screen flex flex-col "
        id="port"
      >
        <div ref={ref} className="container mx-auto sm:mt-40 mt-16">
          <div className="flex sm:flex-row flex-col p-5">
            <div className="sm:w-[50%] w-full flex flex-col">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.05 }}
                className=""
              >
                Portifólio
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="max-w-md py-5 text-sm"
              >
                Aqui você encontrará uma coleção diversificada de projetos em
                que trabalhei ao longo dos anos. Meu portfólio abrange uma ampla
                gama de trabalhos, desde branding até desenvolvimento web.
              </motion.p>
            </div>

            {/* /////////////////////////////////////////////////////////////////////////BUTTONS///////////////////////////////////////////////////////////////////////// */}

            {window.innerWidth <= 961 ? (
              <div className="w-full flex flex-row  justify-between overflow-y-hidden ">
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setPortWorkStatus("uiux");
                  }}
                  className={`w-full mt-5 py-1 h-[50px] ${
                    portWorkStatus === "uiux"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } whitespace-nowrap mx-2`}
                >
                  UI / UX
                </motion.button>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setPortWorkStatus("impressos");

                    handleImages();
                  }}
                  className={`mt-5 py-1 h-[50px] ${
                    portWorkStatus === "impressos"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } mx-2 whitespace-nowrap`}
                >
                  IMPRESSOS
                </motion.button>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPortWorkStatus("branding")}
                  className={`mt-5 py-1 h-[50px] ${
                    portWorkStatus === "branding"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } mx-2 uppercase whitespace-nowrap`}
                >
                  Branding
                </motion.button>
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPortWorkStatus("foto")}
                  className={`mt-5 py-1 h-[50px] ${
                    portWorkStatus === "foto"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } mx-2 uppercase whitespace-nowrap`}
                >
                  Fotografia
                </motion.button>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPortWorkStatus("edicao")}
                  className={`mx-2 mt-5 py-1 h-[50px] ${
                    portWorkStatus === "edicao"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  }  uppercase whitespace-nowrap`}
                >
                  Edição
                </motion.button>
              </div>
            ) : (
              <div className="sm:w-[50%] w-full flex sm:flex-row flex-col justify-end ">
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setPortWorkStatus("uiux");
                  }}
                  className={`w-full mt-5 py-1 h-[50px] ${
                    portWorkStatus === "uiux"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } whitespace-nowrap`}
                >
                  UI / UX
                </motion.button>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setPortWorkStatus("impressos");

                    handleImages();
                  }}
                  className={`mt-5 py-1 h-[50px] ${
                    portWorkStatus === "impressos"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } sm:ml-10 whitespace-nowrap`}
                >
                  IMPRESSOS
                </motion.button>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPortWorkStatus("branding")}
                  className={`mt-5 py-1 h-[50px] ${
                    portWorkStatus === "branding"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } sm:ml-10 uppercase whitespace-nowrap`}
                >
                  Branding
                </motion.button>
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPortWorkStatus("foto")}
                  className={`mt-5 py-1 h-[50px] ${
                    portWorkStatus === "foto"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } sm:ml-10 uppercase whitespace-nowrap`}
                >
                  Fotografia
                </motion.button>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPortWorkStatus("edicao")}
                  className={`mt-5 py-1 h-[50px] ${
                    portWorkStatus === "edicao"
                      ? "bg-[#D6223B] text-white"
                      : "bg-[#19142A] border border-gray-500 text-gray-500"
                  } sm:ml-10 uppercase whitespace-nowrap`}
                >
                  Edição
                </motion.button>
              </div>
            )}
          </div>

          {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}

          <div className="grid gap-6 sm:grid-cols-6 grid-cols-3 sm:grid-rows-1 grid-rows-2 text-center cursor-pointer p-10 mb-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-black sm:h-[400px] h-[200px]"
              onClick={() => {
                console.log("CLICOUUUUU");
                setModalStatus(true);
                dispatch(hideNavbar());
                dispatch(freezeScroll());
                dispatch(particlesOff());
                setPostImg([
                  "https://picsum.photos/seed/picsum1/1000/",
                  "https://picsum.photos/seed/picsum2/500/500",
                  "https://picsum.photos/seed/picsum3/500/500",
                  "https://picsum.photos/seed/picsum4/500/500",
                  "https://picsum.photos/seed/picsum5/500/500",
                  "https://picsum.photos/seed/picsum6/1000/",
                  "https://picsum.photos/seed/picsum7/500/500",
                  "https://picsum.photos/seed/picsum8/500/500",
                  "https://picsum.photos/seed/picsum9/500/500",
                  "https://picsum.photos/seed/picsum10/500/500",
                  "https://picsum.photos/seed/picsum11/1000/",
                  "https://picsum.photos/seed/picsum12/500/500",
                ]);
                setPortWorkInfo({
                  kindOfProject: "ReBranding",
                  companyName: "C3Tech",
                  techs: ["React", "NextJS", "TailwindCSS"],
                  jobDescription: "Era uma merda, agora é uma bosta",
                });
              }}
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                // src={`${images}${portWorkStatus}.img1`}
                src={imgSrc01}
                alt=""
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black sm:h-[400px] h-[200px]"
              onClick={() => {
                console.log("CLICOUUUUU N2");
                setModalStatus(true);
                dispatch(hideNavbar());
                dispatch(freezeScroll());
                setPostImg([
                  "https://picsum.photos/seed/picsum7/1000/",
                  "https://picsum.photos/seed/picsum8/500/500",
                  "https://picsum.photos/seed/picsum9/500/500",
                  "https://picsum.photos/seed/picsum10/500/500",
                  "https://picsum.photos/seed/picsum11/500/500",
                ]);
                setPortWorkInfo({
                  kindOfProject: "ReBranding",
                  companyName: "GIBSON TECH E DESASTRES",
                  techs: ["React", "NextJS", "TailwindCSS"],
                  jobDescription: "Era uma merda, agora é uma bosta",
                });
              }}
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={imgSrc02}
                alt=""
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-black sm:h-[400px] h-[200px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={imgSrc03}
                alt=""
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black sm:h-[400px] h-[200px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={imgSrc04}
                alt=""
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="bg-black sm:h-[400px] h-[200px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={imgSrc05}
                alt=""
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-black sm:h-[400px] h-[200px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={imgSrc06}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
