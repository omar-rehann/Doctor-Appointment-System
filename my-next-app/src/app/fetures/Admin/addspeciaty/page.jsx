import Navbarcomponent from "../components/navbar"
import Addspe from "../components/addsep"
import About from "../components/about"
import PosterSection from "../components/poster"
import Footer from "../components/footer"
export const metadata = {
  title: "Add Specialty | Admin Panel",
  description: "Add and manage medical specialties available across the platform.",
  keywords: ["add specialty", "medical specialty", "admin panel", "hospital admin"],
 
}
function AddSpecialty(){
    return(
        <>
        <Navbarcomponent/>
        <Addspe/>
        <About/>
        <PosterSection/>
        <Footer/>
        </>
    )
}
export default AddSpecialty