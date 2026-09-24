import Navbarcomponent from "../components/navbar";
import HeroSection from "../components/hero";
import Speclices from "../components/speciles";
import Services from "../components/services";
import Doctor from "../components/doctor";
import PosterSection from "../components/poster";
import Footer from "../components/footer";
export const metadata = {
  title: "Home Page",
  description: "Book trusted doctors online in minutes. Easy appointment scheduling, verified specialists, real patient reviews, and secure consultations — all in one place.",
};
export default function HomePage() {
  return (
    <>
     <Navbarcomponent/>
    <HeroSection/>
    <Speclices/>
     <Doctor/>
    <Services/>
    <PosterSection/>
    <Footer/>
    </>
   
  );
}
