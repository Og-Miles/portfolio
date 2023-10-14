import { useState } from "react";

function Hero() {
  const [isWebDeveloperHovered, setIsWebDeveloperHovered] = useState(false);

  const handleWebDeveloperMouseEnter = () => {
    setIsWebDeveloperHovered(true);
  };

  const handleWebDeveloperMouseLeave = () => {
    setIsWebDeveloperHovered(false);
  };

  return (
    <div className='flex w-full justify-center mt-5 h-screen mx-auto'>
      <div className='text-center'>
        <p className='mb-5 text-slate-400'>
          Hi, my name is Emmanuel Ogbuji and i work based on your needs.
        </p>
        <span
          className={`font-extrabold text-5xl  cursor-pointer lg:text-9xl ${
            isWebDeveloperHovered ? "stroke" : ""
          }`}
          onMouseEnter={handleWebDeveloperMouseEnter}
          onMouseLeave={handleWebDeveloperMouseLeave}
        >
          Web Developer
        </span>
        <br />{" "}
        <span
          className={`font-extrabold text-5xl lg:text-9xl stroke ${
            isWebDeveloperHovered ? "no-stroke" : ""
          }`}
          onMouseEnter={handleWebDeveloperMouseEnter}
          onMouseLeave={handleWebDeveloperMouseLeave}
        >
          & Web Designer
        </span>
        <p className='mt-3 text-slate-400'>Based Remotely</p>
        {/* call to action */}
        <div className='flex-col lg:flex-row justify-between mt-3 mx-auto'>
          <button className='border border-black text-white bg-black px-5 py-3 min-w-[220px] lg:mr-2 mt-5'>
            Need a Web developer
          </button>
          <button className='border border-black bg-white text-black px-5 py-3 min-w-[220px] lg:ml-2 mt-5'>
            Need a Web designer
          </button>
        </div>
        {/* <div className='rounded-full w-[300px] h-[400px] bg-slate-400'></div> */}
      </div>
    </div>
  );
}

export default Hero;
