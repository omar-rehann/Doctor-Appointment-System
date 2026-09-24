"use client"
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from "react"
import Link from 'next/link';
function Speclices(){
    const [specialties,setspecialties]=useState([]);
    useEffect(()=>{

        async function getspecialties(){
          let data = await fetch("http://localhost:4000/admin/opreation/showSpecialties");
            let result=await data.json();
            setspecialties(result.data)
        }
        getspecialties()
    },[])
    return(
        <>
      <div className="specialties">
    <div className="container text-center">
        <h4>Medical <span className="text-blue-700">Specialties</span></h4>
        <p>Choose the right specialty and book with the best doctors</p>
    </div>
    <div className="content grid md:grid-cols-3">
        {specialties.map((item)=>{
          return(
              <div  className="box  cursor-pointer  m-2 bg-white shadow-md hover:shadow-xl rounded-2xl p-3 transition-shadow duration-300 border border-gray-100" key={item.name}>
                
                <div className="image">
                    <img src={item.image} className="w-full h-56 object-cover rounded-lg" alt={item.name} />
                </div>
                <h5 className="text-gray-300  mt-2 flex items-center gap-2">
 <i className="fa-solid fa-circle-check text-green-500"></i>
  Active
</h5>
                <div className="title mt-2 gap-2 ms-2">
                    <h5>{item.name}</h5>
                </div>
                <div className="more">
                    <Link href={`/fetures/User/whychooseus/${item._id}`}>
                    
                   <Button variant="outline-primary mt-2">More Detials</Button>

                    </Link>

                </div>
            </div>
          )
        })}

    </div>
</div>
        </>
    )
}
export default Speclices