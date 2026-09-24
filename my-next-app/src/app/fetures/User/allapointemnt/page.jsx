"use client"
import Navbarcomponent from '../components/navbar';
import Footer from '../components/footer';
import PosterSection from '../components/poster';
import Table from 'react-bootstrap/Table';

import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
function Allappointemt(){
  const [Allappointemt,setappointments]=useState([]);
  useEffect(()=>{
   async function getappointment(){
    let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/opreation/showappointment`);
    let result=await data.json();
    setappointments(result.data);
    }
    getappointment()
  },[])
  // Delete
   const deleteitem = async (id) => {
     try {
       const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/admin/opreation/deleteappointment/${id}`,
         { method: "DELETE" }
       );
       let data = await response.json();
       if (data.success) {
         setappointments((prev) => prev.filter((app) => app._id !== id));
         Swal.fire({
           icon: 'success',
           title: 'Success!',
           text: 'Doctor deleted successfully',
           confirmButtonColor: '#3085d6'
         });
       }
     } catch (error) {
       console.log(error);
     }
   };
    return(
        <>
        <Navbarcomponent/>
       <div className="appontiment m-1">
        <Table striped bordered hover size="sm">
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>Doctor</th>
          <th>Time </th>
          <th>Date</th>
          <th>Note </th>
          <th>Action</th>

        </tr>
      </thead>
     <tbody className="text-center p-4">
  {Allappointemt.map((e, i) => (
    <tr key={e._id}>
      <td>{i + 1}</td>
      <td>{e.name}</td>
      <td>{e.day}</td>
      <td>{e.time}</td>
      <td>{e.note}</td>
      <td>
        <div className="flex justify-center gap-2">
          <button  onClick={() => deleteitem(e._id)} className="inline-flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300">
            <i className="fa-solid fa-trash"></i>
            Delete
          </button>

          
        </div>
      </td>
    </tr>
  ))}
</tbody>
    </Table>
       </div>
       <PosterSection/>
       <Footer/>
        </>

    )
}
export default Allappointemt