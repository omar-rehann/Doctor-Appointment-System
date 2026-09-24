import Navbarcomponent from "../components/navbar"
import USer from "../components/user"
import PosterSection from "../components/poster"
import Footer from "../components/footer"
export const metadata = {
  title: "All Users | Doctor Panel",
  description: "View and manage all registered users on the platform.",
  keywords: ["all users", "manage users", "admin panel", "hospital admin"],
 
}
function ALluser(){
    return(
        <>
        <Navbarcomponent/>
        <USer/>
        <PosterSection/>
        <Footer/>
        </>
    )
}
export default ALluser