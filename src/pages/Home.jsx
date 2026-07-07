import HeroSection from "../components/HeroSection";
import Courses from "../components/Courses";
import WhyChoose from "../components/WhyChoose";
import PlacementStats from "../components/PlacementStats";
import Testimonials from "../components/Testimonials";
import Recruiters from "../components/Recruiters";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <WhyChoose />
      <PlacementStats />
      <Testimonials />
      <Recruiters />
      <Contact />
    </>
  );
}

export default Home;