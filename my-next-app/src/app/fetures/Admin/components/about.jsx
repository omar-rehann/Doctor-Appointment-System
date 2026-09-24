import Image from "next/image";

function About() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "50+", label: "Specialist Doctors" },
    { value: "20k+", label: "Happy Patients" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Content - Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-blue-600"></span>
            About Us
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-slate-900 mb-6">
            Medical care
            <br />
            you and your family can trust.
          </h2>

          <p className="text-slate-600 text-base leading-7 mb-4">
            What started as a small clinic has grown into a trusted place where
            thousands of patients return. We still work the same way we did on
            day one — specialized doctors, accurate diagnosis, and continuous
            follow-up until you feel completely at ease.
          </p>

          <p className="text-slate-600 text-base leading-7 mb-8">
            From the first consultation to the end of treatment, every step is
            designed to make your experience smooth and safe. Our goal is simple:
            to make you feel like you&apos;re in a place that truly cares about
            your health.
          </p>

          <button className="bg-blue-600 rounded text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-blue-700 transition-colors duration-300">
            Book Your Appointment
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="font-serif text-3xl text-blue-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-500 text-xs leading-5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image - Right */}
        <div className="relative">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60"
              alt="Doctor talking with a patient"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Accent frame */}
          <div className="hidden md:block absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-blue-600 rounded-[2rem] -z-10"></div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 left-6 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3">
            <i className="fa-solid fa-user-doctor text-white text-xl"></i>
            <div>
              <p className="text-sm font-semibold leading-4">Expert Care</p>
              <p className="text-xs text-blue-100 leading-4">Certified doctors</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;