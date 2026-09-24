import Link from "next/link";

function Footer() {
 
  return (
    <footer className="bg-gray-900 text-white pt-12  ">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
           <h2 className="text-2xl font-bold mb-4">Doctor Appointments</h2>
<p className="text-gray-600 text-sm leading-6">
  Book your appointment with ease and confidence. 
  Our dedicated medical team is committed to providing 
  personalized care and ensuring your health is always 
  our top priority.
</p>


            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-blue-500 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
                      
                    <li>
                   <Link
        href="/fetures/Admin/adddoctor"
        className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-user-doctor me-2"></i>
        Add Doctor
    </Link>
                    </li>
                       <li>
                    <Link
         href="/fetures/Admin/showdoctor"
        className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-users me-2"></i>
        Show Doctor
    </Link>
                    </li>
                       <li>
           <Link
     href="/fetures/Admin/showservice"
        className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-list me-2"></i>
        Show Services
    </Link>
                    </li>
                      <li>
        <Link
        href="/fetures/Admin/addspeciaty"
      className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-layer-group me-2"></i>
        Add Specialties
    </Link>
                    </li>
                      <li>
         <Link
           href="/fetures/Admin/showspecialty"
      className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-list-check me-2"></i>
        Show Specialties
    </Link>
                    </li>
                      <li>
                       <Link
    href="/fetures/Admin/addservice"
        className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-stethoscope me-2"></i>
        Add Services
    </Link>
                    </li>
                    <li><Link
     href="/fetures/Admin/appointmnet"
       className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-calendar-check me-2"></i>
        All Appointment
    </Link></li>
                    <li><Link
     href="/fetures/Admin/alluser"
  className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
    >
        <i className="fa-solid fa-users me-2"></i>
        All User
    </Link></li>
                     

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white" href="#">FAQ</a></li>
              <li><a className="hover:text-white" href="#">Help Center</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white" href="#">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for updates, news, and exclusive offers.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md text-white outline-none"
              />
              <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <ul className="flex gap-4 mb-3 md:mb-0">
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="#">Terms</a></li>
            <li><a className="hover:text-white" href="#">Cookies</a></li>
          </ul>

          <p>© 2026 CompanyName. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;