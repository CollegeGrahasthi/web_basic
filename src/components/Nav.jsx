// Import required images.
import logo from '../images/CGLogoWhite.png';

const Nav = () => {

  return (
    <div className='flex flex-row justify-center sm:justify-between items-center px-24 text-xl'>
      <a href="/">
        <img src={logo} alt="logo" className='w-32' />
      </a>

      <div className='hidden sm:flex bg-black/25 rounded p-2'>
        <a href='/comingsoon' className='px-2 text-gray-300 hover:text-white hover:cursor-pointer'>
          LogIn/SignUp
        </a>
      </div>
    </div>
  );
};

export default Nav;
