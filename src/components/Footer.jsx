import star from '../images/star.png';
import call from '../images/call.png';
import mail from '../images/mail.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const Footer = ({ bgColor, borderColor }) => {
  return (
    <div className={`${bgColor} text-white pt-20 pb-10 md:px-32 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start`}>

        <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl font-bold pb-2 md:text-left text-center'>College Grahasthi</h1>
            <p className='text-gray-200 text-sm md:text-left text-center' >© 2022 All Rights Reserved.</p>
            <p className='flex justify-center md:justify-start text-gray-200 text-xs w-64 text-justify my-3 lg:my-0'>
                The company name, website, and information used on this website are owned by Collège Grahasthi. 
                All of these are copyright protected, and Collège Grahasthi owners are the exclusive proprietors of the copyrights. 
                The usage aims to advertise, identify, and search. No involvement or endorsement is suggested.
            </p>

            <div className='lg:flex hidden gap-2 pt-10'>
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
            </div>
        </div>

        <div className='flex justify-between lg:w-3/5'>
            <div className='lg:flex hidden flex-col gap-7'>
                <h1 className='text-xl font-bold'>Company</h1>
                <div className='flex flex-col gap-2'>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>About</a>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>Careers</a>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>Blogs</a>
                </div>
            </div>
            
            <div className='lg:flex hidden flex-col gap-7'>
                <h1 className='text-xl font-bold'>Get Help</h1>
                <div className='flex flex-col gap-2'>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>How It Works</a>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>FAQs</a>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>Contact</a>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>Terms</a>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>Privacy</a>
                    <a href="/comingsoon" className={`${borderColor} border-b-2 hover:border-white`}>Sitemap</a>
                </div>          
            </div>

            <div className='flex flex-col gap-7 md:text-left text-center'>
                <h1 className='hidden lg:flex text-xl font-bold md:text-left text-center'>Contact Us</h1>
                <div className='flex flex-col gap-2 justify-center items-center lg:items-start text-center'>
                    <a href="tel:7850037958" className='bg-white w-full text-black rounded-lg p-1 flex items-center justify-center lg:justify-start border-black border-b-2 hover:border-white'>
                        <img src={call} alt="call" className='w-6 pr-2' />
                        <p className='text-sm'>+91 7850037958</p>
                    </a>

                    <a href="tel:7091045216" className='bg-white w-full text-black rounded-lg p-1 flex items-center justify-center lg:justify-start border-black border-b-2 hover:border-white'>
                        <img src={call} alt="call" className='w-6 pr-2' />
                        <p className='text-sm'>+91 7091045216</p>
                    </a>

                    <a href="mailto:collegegrahasthi@gmail.com" target="_blank" rel="noopener noreferrer" className='bg-white w-full text-black rounded-lg p-1 flex items-center justify-center lg:justify-start border-black border-b-2 hover:border-white'>
                        <img src={mail} alt="mail" className='w-6 pr-2' />
                        <p className='text-sm'>collegegrahasthi@gmail.com</p>
                    </a>
                </div>

                <div className='flex flex-wrap lg:flex-col gap-2 justify-center'>

                    <a href="https://www.instagram.com/collegegrahasthi/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center ${borderColor} border-b-2 hover:border-white`}>
                        <img src={instagram} alt="mail" className='w-6 pr-2' />
                        <p>Instagram</p>
                    </a>

                    <a href="https://www.linkedin.com/company/collegegrahasthi" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center ${borderColor} border-b-2 hover:border-white`}>
                        <img src={linkedin} alt="mail" className='w-6 pr-2' />
                        <p>LinkedIn</p>
                    </a>
                </div>       
            </div>

        </div>
    </div>
  );
};

export default Footer;
