"use client"
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
  
    return(
        <>
       <div className="appontiment m-3">
        <Table striped bordered hover size="sm">
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>Doctor</th>
          <th>Time </th>
          <th>Date</th>
          <th>Note </th>

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
      
    </tr>
  ))}
</tbody>
    </Table>
       </div>
        </>

    )
}
export default Allappointemt