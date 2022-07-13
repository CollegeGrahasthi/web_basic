import Image from './Image';
import room from '../images/room.jpeg';
import food from '../images/food.jpeg';
import laundry from '../images/laundry.jpeg'
import roommates from '../images/roommates.jpeg';
import gym from '../images/gym.jpeg';
import maid from '../images/maid.jpeg';

const ServicesSection = () => {
  return (
    <div className='h-fit'>
      <h1 className='text-4xl p-10 pb-0 text-c1'>Services</h1>
      <div className='bg-c1 w-20 h-1 ml-10'></div>

      <div className='flex justify-center items-center py-10 flex-wrap'>
        <Image image={room} name="ROOMS" link="https://forms.gle/ia26Wm7Fk11Hh2Cw8" />
        <Image image={roommates} name="ROOMMATES" link="https://forms.gle/aLvpjA4F4J9J3nrx9" />
        <Image image={food} name="FOOD" link="/comingsoon" />
        <Image image={laundry} name="Laundry" link="/comingsoon" />
        <Image image={gym} name="GYM" link="/comingsoon" />
        <Image image={maid} name="MAID" link="/comingsoon" />
      </div>

    </div>
  );
};

export default ServicesSection;
