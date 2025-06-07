import Newsletter from "../Common/Newsletter";
import BestSeller from "./BestSeller";
import Categories from "./Categories";
import CountDown from "./Countdown";
import Hero from "./Hero";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />          
     <h1>Cursos de programacion</h1>
      <BestSeller />
      <CountDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
