function PosterSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* Content - Left */}
          <div className="p-10 md:p-14 lg:p-16 text-white">
            <span className="inline-flex items-center gap-2 text-blue-200 text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              <span className="w-8 h-px bg-blue-200"></span>
              Book Now
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Your health deserves
              <br />
              the best care.
            </h2>

            <p className="text-blue-100 text-base leading-7 mb-8 max-w-md">
              Book an appointment with our specialist doctors in just a few
              clicks. Fast, easy, and available whenever you need us.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white rounded text-blue-600 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-blue-50 transition-colors duration-300">
                Book Appointment
              </button>
              <button className="border rounded border-white/40 text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-colors duration-300">
                View Doctors
              </button>
            </div>
          </div>

          {/* Image - Right */}
          <div className="relative h-72 lg:h-full min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=60"
              alt="Doctor ready to help patients"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft overlay on the left edge for better blend */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-600 to-transparent hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PosterSection;