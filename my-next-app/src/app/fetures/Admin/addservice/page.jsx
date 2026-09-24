import Navbarcomponent from "../components/navbar";
import Addservices from "../components/addservices";
import PosterSection from "../components/poster";
import Footer from "../components/footer";
export const metadata = {
  title: "Manage Services | Admin Panel",
  description: "Add and manage medical services offered, including specialties and treatment details.",
  keywords: ["add services", "medical services", "admin panel", "hospital admin"],

}
function ServicesPage(){
    return(
        <>
        <Navbarcomponent/>
        <Addservices/>
        <PosterSection/>
        <Footer/>
        </>
    )
}
export default ServicesPage