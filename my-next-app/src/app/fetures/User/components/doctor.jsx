"use client";
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useEffect, useState } from "react"
function  Doctor(){
    const [doctor,setdoctor]=useState([]);
    useEffect(()=>{
        async function getdoctor() {
           const data = await fetch("http://localhost:4000/admin/opreation/showdoctor");
            let result=await data.json();
            setdoctor(result.data);
        }
        getdoctor()
    },[])
      return(
        
        <>
        <div className="services  mt-5 p-5">
       <div className="container mx-auto text-center py-6">
  <h3 className="text-2xl md:text-3xl font-bold">
     <span className="text-blue-700">Our Doctors</span>
  </h3>
  <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
    Connect with highly qualified, board-certified doctors across various specialties. Book your appointment online quickly and securely.
  </p>
</div>
<div className="grid md:grid-cols-3">
  {doctor.map((item) => (
    <div
      key={item._id}
      className="box  cursor-pointer  m-2 bg-white shadow-md hover:shadow-xl rounded-2xl p-3 transition-shadow duration-300 border border-gray-100"
    >
       <div className="image">
                    <img src={item.image} className="w-full h-56 object-cover rounded-lg" alt={item.name} />
                </div>
      <h5 className="text-base font-semibold text-gray-800 mt-3">{item.name}</h5>
      <Link href={`/fetures/User/choosedotor/${(item._id)}`} >
                      <Button variant="outline-primary mt-2">More Detials</Button>

      
      </Link>

    </div>
  ))}
</div>


        </div>
        </>
    )
}
export default Doctor