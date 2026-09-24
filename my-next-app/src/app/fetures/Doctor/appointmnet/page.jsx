import Navbarcomponent from "../components/navbar"
import Allappointemt from "../components/appointmnet"
import About from "../components/about"
import Footer from "../components/footer"
export const metadata = {
  title: "Appointments | Doctor Panel",
  description: "View and manage patient appointments booked across the platform.",
  keywords: ["appointments", "manage appointments", "admin panel", "hospital admin"],
  
}
function Appointmentpage(){
    return(
        <>
        <Navbarcomponent/>
        <Allappointemt/>
        <About/>
        <Footer/>
        </>
    )
}
export default Appointmentpage