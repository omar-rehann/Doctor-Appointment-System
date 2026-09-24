"use client"
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

function RegsiterPage() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [pass,setpass]=useState('');
  const data={
    name:name,
    email:email,
    password:pass
  }



const regsiteraction = async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/user/controller/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Account created successfully",
      });
      setemail('');
      setname('')
      setpass('')
    } 
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Cannot connect to the server",
    });
  }
};
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl flex rounded-2xl overflow-hidden shadow-lg border border-gray-100">

        {/* ───── Left Panel ───── */}
        <div className="hidden md:flex flex-col justify-end relative flex-1 bg-[#0F6E56] p-10 overflow-hidden">
          <div className="absolute w-56 h-56 rounded-full bg-white/5 -top-16 -right-16 pointer-events-none" />
          <div className="absolute w-32 h-32 rounded-full bg-white/5 top-1/2 -left-10 pointer-events-none" />

          <div
            className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=700&q=80')",
            }}
          />

          <div className="relative z-10">
            {/* Brand badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <i className="fa-solid fa-heart-pulse text-[#5DCAA5] text-sm"></i>
              <span className="text-white text-sm font-medium tracking-wide">
                Doctor Appointments
              </span>
            </div>

            <h1 className="text-white text-3xl font-semibold leading-snug mb-3">
              Book your visit<br />with trusted doctors
            </h1>

            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Browse verified specialists across every field, check real-time
              availability, and book your appointment in just a few taps.
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-white text-xl font-semibold">500+</p>
                <p className="text-white/60 text-xs mt-0.5">Specialists</p>
              </div>
              <div>
                <p className="text-white text-xl font-semibold">24/7</p>
                <p className="text-white/60 text-xs mt-0.5">Support</p>
              </div>
              <div>
                <p className="text-white text-xl font-semibold">98%</p>
                <p className="text-white/60 text-xs mt-0.5">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* ───── Right Panel ───── */}
        <div className="flex-1 bg-white flex flex-col justify-center px-8 py-10 md:px-12">

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome back 👋</h2>
            <p className="text-sm text-gray-500 mt-1">
              Sign in to manage your appointments
            </p>
          </div>
          {/* login */}
          <div className="login space-y-4">
            <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      User Name
    </label>
    <input
    onChange={(e)=>setname(e.target.value)}
      type="text"
      placeholder="Enter your Name"
      name="name"
      id="name"
      value={name}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F6E56] focus:border-transparent transition"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
    onChange={(e)=>setemail(e.target.value)}
      type="email"
      placeholder="Enter your email"
      name="email"
      id="email"
      value={email}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F6E56] focus:border-transparent transition"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Password
    </label>
    <input
    onChange={(e)=>setpass(e.target.value)}
      type="password"
      placeholder="Enter your password"
      name="password"
      id="password"
      value={pass}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F6E56] focus:border-transparent transition"
    />
  </div>

  <div className="flex items-center justify-between text-sm">
    <p className="text-gray-400">Create New Account ? <Link href="../../fetures/login"><span className="cursor-pointer">Login</span></Link></p>
  </div>
  <button
  onClick={regsiteraction}
    type="submit"
    className="w-full rounded mb-2  bg-[#0F6E56] hover:bg-[#0d5c48] text-white font-medium py-2.5 rounded-lg transition duration-200"
  >
    Regsiter
  </button>
</div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-8 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-50 text-[#0F6E56] rounded-full px-3 py-1.5">
              <i className="fa-solid fa-calendar-check text-xs"></i>
              Easy Booking
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-50 text-[#0F6E56] rounded-full px-3 py-1.5">
              <i className="fa-solid fa-shield-halved text-xs"></i>
              Secure & Private
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-50 text-[#0F6E56] rounded-full px-3 py-1.5">
              <i className="fa-solid fa-bell text-xs"></i>
              Reminders
            </span>
          </div>

        </div>
      </div>
    </main>
  );
}

export default RegsiterPage;