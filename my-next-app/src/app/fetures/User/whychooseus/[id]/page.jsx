"use client";
import Navbarcomponent from "../../components/navbar"
import Footer from "../../components/footer"
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useEffect, useState } from "react"
import { useParams } from "next/navigation";
function Choosespeicles(){
const params = useParams();
     const [specialties,setspecialties]=useState([]);
         const [doctor,setdoctor]=useState([]);
    useEffect(()=>{

        async function getspecialties(){
            let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/opreation/showSpecialties`);
            let result=await data.json();
            setspecialties(result.data)
        }
        async function getdoctor() {
              let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/opreation/showdoctor`);
            let result=await data.json();
            setdoctor(result.data.filter((e)=>e.category===params.id));
        }      
          getspecialties()
                getdoctor()

    },[])
    return(
        <>
        <Navbarcomponent/>
        <div className="continer text-center ">
    <h4 className="text-3xl font-bold text-gray-800  capitalize">
        {params.id}
    </h4>
    <p className="text-gray-500 max-w-xl mx-auto">
        Browse our specialists in {params.id} and book your appointment with the best available doctors.
    </p>
</div>
        <div className="continerside grid md:grid-cols-2">
            {/* left side */}
            <div className="services  mt-5 p-5">
      
<div className="grid md:grid-cols-2">
  {specialties.map((item) => {
  return (
    <Link 
      key={item.title} 
      href={`/fetures/User/whychooseus/${encodeURIComponent(item._id)}`}
      className="text-gray-900 !no-underline hover:no-underline block"
    >
      <div className="box cursor-pointer m-2 bg-white shadow-md hover:shadow-xl rounded-2xl p-3 transition-shadow duration-300 border border-gray-100">
        <div className="image">
          <img 
            src={item.image} 
            className="w-full h-56 object-cover rounded-lg" 
            alt={item.name} 
          />
        </div>

        <h5 className="text-black font-bold font-medium text-sm mt-2 flex items-center gap-2">
          <i className="fa-solid fa-circle-check text-green-500"></i>
          Active
        </h5>

        <div className="title mt-2 ms-2">
          <h5 className="text-lg font-bold text-black font-bold">{item.name}</h5>
        </div>
      </div>
    </Link>
  );
})}
</div>


        </div>
            {/*  right side */}
            <div className="alldoctor mt-5">
                <div className="grid md:grid-cols-1">
  {doctor.map((item) => (
    <div
      key={item.title}
      className="box  cursor-pointer  m-2 bg-white shadow-md hover:shadow-xl rounded-2xl p-3 transition-shadow duration-300 border border-gray-100"
    >
       <div className="image">
                    <img src={item.image} className="w-full h-56 object-cover rounded-lg" alt={item.title} />
                </div>
      <h5 className="text-base font-semibold text-gray-800 mt-3">{item.name}</h5>
<Link href={`/fetures/User/choosedotor/${encodeURIComponent(item._id)}`} >
                      <Button variant="outline-primary mt-2">More Detials</Button>

      
      </Link>
    </div>
  ))}
</div>

            </div>
        </div>
        
        <Footer/>
        </>
    )
}
export default Choosespeicles