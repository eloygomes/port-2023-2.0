import { useSelector } from "react-redux";
import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";


function NavBar() {
  //Redux
  const navbarZindex = useSelector((state) => state.navbarZindex);

  const [mobileShowMenu, setMobileShowMenu] = useState(false);

  console.log(mobileShowMenu);
  console.log("window.innerWidth < 961?" + window.innerWidth < 961);
  return (
    <>
      {window.innerWidth <= 961 ? (
        <div
          className={` w-screen py-5 fixed left-0 top-0 drop-shadow-md ${
            navbarZindex === "show" ? "z-10" : "-z-10"
          }`}
        >
          <AiOutlineMenu
            className="text-3xl text-white m-10 cursor-pointer absolute top-0 right-0 z-10"
            onClick={() => {
              setMobileShowMenu(!mobileShowMenu);
              console.log(mobileShowMenu);
            }}
          />
          <div
            className={`w-screen h-screen   backdrop-blur-xl bg-[#19142A]/95 absolute top-0 left-0 
            ${
              mobileShowMenu ? "flex flex-col justify-between" : "hidden"
            } z-10`}
          >
            <div className="h-[90%] w-screen flex flex-col  text-center p-5">
              <div
                className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10  hover:scale-105   my-2"
                onClick={() => setMobileShowMenu(!mobileShowMenu)}
              >
                <a href="#bio" className="px-2 text-4xl font-black">
                  EVG
                </a>
              </div>

              <div className="h-[80%] flex flex-col justify-between">
                <div
                  className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
                  onClick={() => setMobileShowMenu(!mobileShowMenu)}
                >
                  <a href="#bio" className="px-2">
                    BIO
                  </a>
                </div>
                <div
                  className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
                  onClick={() => setMobileShowMenu(!mobileShowMenu)}
                >
                  <a href="#port" className="px-2">
                    PORTFÓLIO
                  </a>
                </div>
                <div
                  className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
                  onClick={() => setMobileShowMenu(!mobileShowMenu)}
                >
                  <a href="#carreira" className="px-2">
                    CARREIRA
                  </a>
                </div>
                <div
                  className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
                  onClick={() => setMobileShowMenu(!mobileShowMenu)}
                >
                  <a href="#services" className="px-2">
                    SERVIÇOS
                  </a>
                </div>

                <div
                  className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
                  onClick={() => setMobileShowMenu(!mobileShowMenu)}
                >
                  <a href="#contato" className="px-2">
                    CONTATO
                  </a>
                </div>

                <div className=" flex items-center justify-center bg-[#D6223B] text-xs whitespace-nowrap rounded-full mx-36 my-10 p-5 cursor-pointer ">
                  DOWNLOAD CV
                </div>
              </div>
            </div>

            <div className=" h-[10%] w-screen  text-center p-5">
              <div className="font-black text-2xl hover:scale-105">
                <a
                  className="font-extrabold text-center "
                  href="#"
                  onClick={() => setMobileShowMenu(!mobileShowMenu)}
                >
                  FECHAR
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`sm:bg-[#19142A] md:w-screen w-screen py-5 fixed left-0 top-0 drop-shadow-md hidden lg:block ${
            navbarZindex === "show" ? "z-10" : "-z-10"
          }`}
        >
          <div className="lg:flex hidden flex-row justify-between container mx-auto ">
            <div className="font-black text-2xl hover:scale-105">
              <a className="font-extrabold " href="#">
                EVG
              </a>
            </div>
            <div className="w-[40%] flex flex-row justify-around cursor-pointer">
              <a href="#bio" className="px-2">
                BIO
              </a>
              <a href="#port" className="px-2">
                PORTFÓLIO
              </a>
              <a href="#carreira" className="px-2">
                CARREIRA
              </a>
              <a href="#services" className="px-2">
                SERVIÇOS
              </a>
              <a href="#contato" className="px-2">
                CONTATO
              </a>
              <div className="pl-5">
                <p className="bg-[#D6223B] text-xs p-1.5 whitespace-nowrap rounded">
                  DOWNLOAD CV
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
