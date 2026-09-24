import Navbarcomponent from "../components/navbar"
import AllServices from "../components/allservices"
import PosterSection from "../components/poster"
import Footer from "../components/footer"
export const metadata = {
  title: "ALl Services  Page",
  description: "Explore our full range of healthcare services. From online doctor appointments and verified specialist consultations to secure health records, find everything you need.",
};
function AllservicesPage(){
    return(
        <>
        <Navbarcomponent/>
        <AllServices/>
        <PosterSection/>
        <Footer/>
        </>
    )
}
export default AllservicesPage