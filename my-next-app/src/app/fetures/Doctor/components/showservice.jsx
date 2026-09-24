"use client"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function  Showser(){
   
    
    
      const [allservicce, setall] = useState([]);
      useEffect(() => {
        async function getservice() {
          const result = await fetch("http://localhost:4000/admin/opreation/showservice");
          const final = await result.json();
          setall(final.data);
        }
        getservice();
      }, []);
    
     
    
     
    
    return(
        <>
        <div className="showservice">
             <div className="container">
        <h4 className="relative inline-block m-0 pb-3 text-lg font-bold text-gray-800 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-1 before:bg-gray-800 after:content-[''] after:absolute after:-bottom-1 after:left-14 after:right-0 after:h-1 after:bg-gray-800 after:opacity-20">
          Admin Panel / Show Service
        </h4>
      </div>
        <div className="content p-4 mt-3 m-2">
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Descrption</th>            
            </tr>
          </thead>
          <tbody className="text-center">
            {allservicce.map((e, i) => (
              <tr key={e._id || i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-10 h-10 rounded-full object-cover text-center mx-auto"
                  />
                </td>
                <td>{e.description}</td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
        </div>
        </>
    )
}
export default Showser