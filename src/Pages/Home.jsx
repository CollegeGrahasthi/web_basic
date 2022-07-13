import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Footer bgColor="bg-c1" borderColor="border-c1" />
    </div>
  );
};

export default Home;
