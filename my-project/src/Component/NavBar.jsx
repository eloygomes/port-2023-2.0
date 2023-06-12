import { useSelector } from "react-redux";

function NavBar() {
  //Redux
  const navbarZindex = useSelector((state) => state.navbarZindex);

  return (
    <>
      <div
        className={`sm:bg-[#19142A] w-screen py-5 fixed left-0 top-0 drop-shadow-md ${
          navbarZindex === "show" ? "z-10" : "-z-10"
        }`}
      >
        <div className="sm:flex hidden flex flex-row justify-between container mx-auto ">
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
    </>
  );
}

export default NavBar;
