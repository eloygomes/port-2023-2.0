import React from "react";

import KrabSession from "./session4/krabSession";

function Session04() {
  return (
    <>
      <div
        className="bg-[#2A2344] w-screen h-screen items-center flex flex-row "
        id="carreira"
      >
        <div className="container mx-auto  grid h-[50%] overflow-x-auto  h-screen">
          <h1 className="text-6xl py-10 absolute mt-[100px]">Carreira</h1>
          <p className="mt-[250px]">
            Na seção abaixo, apresento um panorama completo da minha experiência
            profissional até o presente momento.”
          </p>
          <div className="flex flex-row justify-between text-4xl font-extralight  h-[100px] ">
            <h1 className="h-full opacity-10 hover:opacity-70 cursor-pointer">
              2017
            </h1>
            <h1 className="h-full opacity-10 hover:opacity-70 cursor-pointer">
              2018
            </h1>
            <h1 className="h-full opacity-10 hover:opacity-70 cursor-pointer">
              2019
            </h1>
            <h1 className="h-full opacity-10 hover:opacity-70 cursor-pointer">
              2020
            </h1>
            <h1 className="h-full opacity-10 hover:opacity-70 cursor-pointer">
              2021...
            </h1>
          </div>
          <KrabSession />
        </div>
      </div>
    </>
  );
}

export default Session04;
