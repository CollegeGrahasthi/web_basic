import Button from './Button';
import Nav from './Nav';
import SearchBar from './SearchBar';
import checkMark from '../images/checked.png';

const Hero = () => {

  return (
    <>
      <div className='bg-home-bg bg-cover'>
        <Nav />

        <div className='flex flex-col gap-6 items-center justify-center text-white py-10 sm:py-20'>

          <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text text-7xl text-center md:text-left'>College Grahasthi</h1>
            <p className='text-xl text-center md:text-left'>
              All your accommodation needs in one place.
            </p>
          </div>

          <div className='w-[100%] md:w-6/12'>
            <SearchBar />
          </div>

          <div className='flex w-[90%] md:w-4/12 items-center justify-between bg-black/50 h-12 rounded-xl px-2'>

            <div className='flex items-center'>
              <img src={checkMark} alt="check mark" className='w-5' />
              <p className='text-sm pl-1'>Verified Listings</p>
            </div>

            <div className='flex items-center'>
              <img src={checkMark} alt="check mark" className='w-5' />
              <p className='text-sm pl-1'>Lowest price Guaranteed</p>
            </div>

            <div className='flex items-center'>
              <img src={checkMark} alt="check mark" className='w-5' />
              <p className='text-sm pl-1'>Best services</p>
            </div>

          </div>

        </div>
      </div>

      <div className='bg-c1 bg-banner bg-contain bg-no-repeat bg-center flex flex-col lg:flex-row h-40 my-10 mx-6 rounded-xl justify-evenly items-center'>
        <p className='text-5xl text-white'>
          Resister your PG Now
        </p>
          
        <div className=''>
          <Button value="Book Now !!" link="https://forms.gle/5eTREtdYEzCyFHFV6" bgColor="bg-white" />
        </div>
      </div>
    </>
  );
};

export default Hero;
