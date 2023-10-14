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
    <div className='flex items-center justify-center text-center object-center w-full relative'>
      <h1 className='font-extrabold text-9xl cursor-pointer'>
        <span
          className={`font-extrabold text-9xl ${
            isWebDeveloperHovered ? "stroke" : ""
          }`}
          onMouseEnter={handleWebDeveloperMouseEnter}
          onMouseLeave={handleWebDeveloperMouseLeave}
        >
          Web Developer
        </span>
        <br />{" "}
        <span
          className={`font-extrabold text-9xl stroke ${
            isWebDeveloperHovered ? "no-stroke" : ""
          }`}
          onMouseEnter={handleWebDeveloperMouseEnter}
          onMouseLeave={handleWebDeveloperMouseLeave}
        >
          & Web Designer
        </span>
      </h1>
    </div>
  );
}

export default Hero;
