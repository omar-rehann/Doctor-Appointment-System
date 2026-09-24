"use client"
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
function USer(){
    const [alluser,setuser]=useState([]);
    useEffect(()=>{
       async function getuser(){
        let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/controller/showuser`);
        console.log("data",data)
        let result =await data.json();
        setuser(result.data);
        }
        getuser();
    },[])
    console.log("all user ",alluser)
    return(
        <>
        <div className="user m-2">
             <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Email</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {alluser.map((e,i)=>{
            return(
 <tr>
          <td>{i}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.createdAt.slice(0,10)}</td>
        </tr>
            )
             

        })}
 
      </tbody>
    </Table>
        </div>
        </>
    )
}
export default USer