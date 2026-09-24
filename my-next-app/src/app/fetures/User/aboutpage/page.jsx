import Navbarcomponent from "../components/navbar"
import About from "../components/about"
import Whychoose from "../components/whychoose"
import Footer from "../components/footer"
export const metadata = {
  title: "About  Page",
  description: "Learn about our mission to make healthcare accessible for everyone. We connect patients with verified doctors, trusted specialists, and secure online consultations.",
};
function Aboutpage(){
    return(
        <>
        <Navbarcomponent/>
        <About/>
        <Whychoose/>
        <Footer/>
        </>
    )
}
export default Aboutpage