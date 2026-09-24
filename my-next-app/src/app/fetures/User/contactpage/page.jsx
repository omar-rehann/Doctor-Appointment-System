import Navbarcomponent from "../components/navbar"
import ContactPage from "../components/contact"
import Footer from "../components/footer"
export const metadata = {
  title: "Contact  Page",
  description: "Book trusted doctors online in minutes. Enjoy easy appointment scheduling, verified specialists, real patient reviews, and secure consultations.",
};
function Contact(){
    return(
        <>
        <Navbarcomponent/>
        <ContactPage/>
        <Footer/>
        </>
    )
}
export default Contact