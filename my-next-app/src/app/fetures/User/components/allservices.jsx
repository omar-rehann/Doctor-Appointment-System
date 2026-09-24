"use client";

import { useEffect, useState } from "react"
function  AllServices(){
    const [allservices,allsetservices]=useState([]);
    useEffect(()=>{
        async function getservices() {
  let data=await fetch("http://localhost:4000/admin/opreation/showservice");
              let result=await data.json();
            allsetservices(result.data);
        }
        getservices()
    },[])
  
    return(
        
        <>
        <div className="services  mt-5 p-5">
            <div className="continer  text-center">
  <h3 className="text-2xl font-nold">Comprehensive  <span className="text-blue-700 text-2xl font-bold"> Medical AllServices</span></h3>
  <p>
    We provide a wide range of healthcare solutions with the highest standards of quality and safety. 
    
  </p>
</div>
<div className="grid md:grid-cols-3">
  {allservices.map((item) => (
    <div
      key={item._id}
      className="box  cursor-pointer  m-2 bg-white shadow-md hover:shadow-xl rounded-2xl p-3 transition-shadow duration-300 border border-gray-100"
    >
       <div className="image ">
                    <img src={item.image} className="w-full h-56 object-cover rounded-lg" alt={item.name} />
                </div>
      <h4 className="text-base font-semibold text-gray-800">{item.name}</h4>
      <h6 className="text-sm font-normal text-gray-400 leading-relaxed">{item.description}</h6>
    </div>
  ))}
</div>

        </div>
        </>
    )
}
export default AllServices