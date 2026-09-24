import Navbarcomponent from "../components/navbar"
import AddDoctor from "../components/adddoctor"
import PosterSection from "../components/poster"
import Footer from "../components/footer"
export const metadata = {
  title: "Add Doctor | Admin Panel",
  description: "Add a new doctor to the system with their details, specialty, and profile information.",
  keywords: ["add doctor", "admin panel", "doctor management", "hospital admin"],
 
}
function AddDoctorpage(){
    return(
        <>
        <Navbarcomponent/>
        <AddDoctor/>
        <PosterSection/>
        <Footer/>
        </>
    )
}
export default AddDoctorpage