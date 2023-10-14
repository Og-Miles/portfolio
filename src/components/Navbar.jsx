const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      {/* Logo */}
      <div className='justify-start'>
        <h1 className='text-4xl lg:text-7xl font-extrabold'>
          E.<span className='stroke'>O</span>
        </h1>
      </div>

      {/* NavLinks */}
      <div className='hidden lg:flex flex-end '>
        <ul className='flex items-center '>
          <li className='px-[32px] text-lg cursor-pointer hover:pb-2 ease-in-out'>
            <a href='https://moore-blog.vercel.app'>Blog</a>
          </li>
          <li className='px-[32px] text-lg cursor-pointer hover:pb-2 ease-in-out'>
            About Me
          </li>
          <li className='px-[32px] text-lg cursor-pointer hover:pb-2 ease-in-out'>
            Portfolio
          </li>
          <button className=' bg-black py-2 ml-4 px-4 text-white rounded text-lg'>
            Contact
          </button>
        </ul>
      </div>

      {/* NavLinks Mobile */}
      <div className='flex lg:hidden rounded-full outline bg-white min-w-[100px] py-2'></div>

      <div className='flex flex-end lg:hidden'>menu</div>
    </div>
  );
};

export default Navbar;
