"use client"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Showspe(){
     const [name, setname] = useState('');
          const [image, setimage] = useState('');
          const [show, setShow] = useState(false);
          const [editId, setEditId] = useState(null); 
          const [oldImage, setOldImage] = useState('');
          const handleClose = () => {
            setShow(false);
            setEditId(null);
          };
          const handleShow = (service) => {
            setEditId(service._id);
            setname(service.name || '');
            setOldImage(service.image || '');
            setimage(''); 
            setShow(true);
          };
        
          const [allSpecialties, setall] = useState([]);
          useEffect(() => {
            async function getSpecialties() {
              const result = await fetch("http://localhost:4000/admin/opreation/showSpecialties");
              const final = await result.json();
              setall(final.data);
            }
            getSpecialties();
          }, []);
        
          // Delete
          const deleteitem = async (id) => {
            try {
              const response = await fetch(
                `http://localhost:4000/admin/opreation/deleteSpecialties/${id}`,
                { method: "DELETE" }
              );
              let data = await response.json();
              if (data.success) {
                setall((prev) => prev.filter((Specialties) => Specialties._id !== id));
                Swal.fire({
                  icon: 'success',
                  title: 'Success!',
                  text: 'Specialties deleted successfully',
                  confirmButtonColor: '#3085d6'
                });
              }
            } catch (error) {
              console.log(error);
            }
          };
        
          // Edit
          const edititem = async () => {
            if (!editId) return;
            let formdata = new FormData();
            formdata.append("name", name);
            if (image) {
              formdata.append("image", image);
            } else {
              formdata.append("image", oldImage); 
            }
        
            try {
              const response = await fetch(
                `http://localhost:4000/admin/opreation/editSpecialties/${editId}`,
                {
                  method: "POST",
                  body: formdata
                }
              );
              let data = await response.json();
        
              if (data.success) {
                setall((prev) =>
                  prev.map((Specialties) =>
                    Specialties._id === editId
                      ? {
                          ...service,
                          name,
                          image: image ? URL.createObjectURL(image) : oldImage
                        }
                      : Specialties
                  )
                );
        
                Swal.fire({
                  icon: 'success',
                  title: 'Success!',
                  text: 'Specialties updated successfully',
                  confirmButtonColor: '#3085d6'
                });
                handleClose();
              }
            } catch (error) {
              console.log(error);
            }
          };
    return(
        <>
        <div className="showSpecialties">
               <div className="container">
        <h4 className="relative inline-block m-0 pb-3 text-lg font-bold text-gray-800 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-1 before:bg-gray-800 after:content-[''] after:absolute after:-bottom-1 after:left-14 after:right-0 after:h-1 after:bg-gray-800 after:opacity-20">
          Admin Panel / Show Specialties
        </h4>
      </div>
       <div className="content p-4 mt-3 m-2">
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {allSpecialties.map((e, i) => (
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
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      onClick={() => deleteitem(e._id)}
                      className="px-4 py-2 rounded bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                    <Button variant="primary" onClick={() => handleShow(e)}>
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Specialties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setname(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Doctor name"
                />
              </div>

           


              {/* Image */}
              <div>
                <label className="block mb-1 font-medium">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => setimage(event.target.files[0])}
                  className="w-full border rounded-md px-3 py-2"
                />
                {oldImage && !image && (
                  <img src={oldImage} alt="current" className="mt-2 w-16 h-16 rounded object-cover" />
                )}
              </div>
            </div>

            
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edititem}>
            Update Specialties
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </>
    )
}
export default Showspe