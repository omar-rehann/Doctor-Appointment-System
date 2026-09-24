import Navbarcomponent from "../components/navbar"
import Showser from "../components/showservice"
import Whychoose from "../components/whychoose"
import Footer from "../components/footer"
export const metadata = {
  title: "Show Services | Admin Panel",
  description: "View and manage all medical services offered on the platform.",
  keywords: ["show services", "manage services", "admin panel", "hospital admin"],
 
}
function ShowServcie(){
    return(
        <>
        <Navbarcomponent/>
        <Showser/>
        <hr className="mt-2 mb-2 m-2" />
        <Whychoose/>
        <Footer/>
        </>
    )
}
export default ShowServcie