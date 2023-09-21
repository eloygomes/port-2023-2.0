function NewServiceSession() {
  return (
    <div
      className="w-screen flex flex-col bg-[#19142A] bg-opacity-95"
      id="services"
    >
      <div className="container mx-auto flex flex-col justify-center">
        <div className="min-h-[85vh] mb-[10vh] mt-[15vh] mx-5 p-5 backdrop-blur-xl bg-white bg-opacity-10 rounded-xl">
          <div className="container mx-auto flex flex-col justify-center text-center p-5">
            <div className="flex flex-col">
              <h1>Services</h1>
              <p className="md:mx-20 sm:mx-0 p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-x-10 gap-y-10 md:p-5">
                <div className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative">
                  <div className=" rounded-xl flex flex-col z-50">
                    <img
                      src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_04-1a29e693.jpg"
                      alt=""
                      className="object-cover rounded-xl"
                    />
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-10 p-5">
                      UI/UX
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : ( // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative">
                  <div className=" rounded-xl flex flex-col z-50">
                    <img
                      src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_06-85a77b29.jpg"
                      alt=""
                      className="object-cover rounded-xl"
                    />
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      BRANDING
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : ( // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative">
                  <div className=" rounded-xl flex flex-col z-50">
                    <img
                      src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_05-45d24d3b.jpg"
                      alt=""
                      className="object-cover rounded-xl"
                    />
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      IMPRESSOS
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : ( // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative">
                  <div className=" rounded-xl flex flex-col z-50">
                    <img
                      src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_01-130e691d.jpg"
                      alt=""
                      className="object-cover rounded-xl"
                    />
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      FOTOGRAFIA
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : ( // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative">
                  <div className=" rounded-xl flex flex-col z-50">
                    <img
                      src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_02-51365147.jpg"
                      alt=""
                      className="object-cover rounded-xl"
                    />
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      EDIÇÃO
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : ( // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative">
                  <div className=" rounded-xl flex flex-col z-50">
                    <img
                      src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_03-afb38374.jpg"
                      alt=""
                      className="object-cover rounded-xl"
                    />
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      PODCAST
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : ( // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewServiceSession;
