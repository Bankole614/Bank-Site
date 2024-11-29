import Faq from "./Home-components/Faq";
import Features from "./Home-components/Features";
import HeroSection from "./Home-components/HeroSection";
import Products from "./Home-components/ProductsSection";
import Testimonials from "./Home-components/Testimonials";
import UseCases from "./Home-components/UseCases";
import Start from "./Home-components/Start";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <UseCases />
      <Features />
      <Faq />
      <Testimonials />
      <Start />
    </>
  );
};

export default Home;
