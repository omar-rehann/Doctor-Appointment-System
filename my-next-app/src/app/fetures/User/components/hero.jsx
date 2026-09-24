"use client"
import Button from 'react-bootstrap/Button';
function HeroSection(){
    return(
        <>
        <section className=" relative p-[50px] h-[100vh]">
      <div className="mx-auto w-[100%] max-w-7xl px-4 py-8 sm:px-6 lg:px-8   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">

          {/* Text Section */}
          <div>
  <div className="max-w-prose md:max-w-none mb-2">
    <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
      Book Your Doctor <span className="text-blue-700">Appointment</span> Easily & Quickly With Yor Fav  <span className="text-blue-700">Docotrs</span>
    </h2>

    <p className="mt-4 text-black mb-3">
      Find the right doctor, choose your specialty, and book your appointment in just a few clicks.
      Our platform helps you connect with trusted doctors and manage your visits with ease.
    </p>
  </div>
  <div className="explore">
      <Button variant="outline-primary">Explore Now</Button>
  </div>
</div>

          {/* Image Section */}
         <div className="image text-center">
<img src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="rounded w-full" alt="photo" />         </div>

        </div>
      </div>
    </section>

        </>
    )
}
export default HeroSection