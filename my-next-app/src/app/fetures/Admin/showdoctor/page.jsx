import Navbarcomponent from "../components/navbar"
import Showdoctor from "../components/showdoctoe"
import About from "../components/about"
import Whychoose from "../components/whychoose"
import Footer from "../components/footer"
export const metadata = {
  title: "Show Doctors | Admin Panel",
  description: "View, edit, and manage all registered doctors on the platform.",
  keywords: ["show doctors", "manage doctors", "admin panel", "hospital admin"],
 
}
function Showdoctorpage(){
    return(
        <>
        <Navbarcomponent/>
        <Showdoctor/>
        <hr  className="m-2"/>
        <About/>
        <Whychoose/>
        <Footer/>
        </>
    )
}
export default Showdoctorpage