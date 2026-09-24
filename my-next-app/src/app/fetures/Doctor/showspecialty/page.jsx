import Navbarcomponent from "../components/navbar"
import Showspe from "../components/showspe"
import About from "../components/about"
import PosterSection from "../components/poster"
import Footer from "../components/footer"
export const metadata = {
  title: "Show Specialty | Doctor Panel",
  description: "View and manage all medical specialties available on the platform.",
  keywords: ["show specialty", "manage specialty", "admin panel", "hospital admin"],
 
}
function ShowSpecialty(){
    return(
        <>
        <Navbarcomponent/>
        <Showspe/>
        <About/>
        <PosterSection/>
        <Footer/>
        </>
    )
}
export default ShowSpecialty