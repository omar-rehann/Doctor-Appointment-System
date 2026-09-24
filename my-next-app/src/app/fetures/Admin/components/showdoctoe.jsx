"use client"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Showdoctor() {
  const [name, setname] = useState('');
  const [email, setemial] = useState('');
  const [pass, setpass] = useState('');
  const [image, setimage] = useState('');
  const [about, setabout] = useState('');
  const [address, setadress] = useState('');
  const [date, setdata] = useState('');
  const [specialty, setspecialty] = useState('');
  const [experience, setexperience] = useState('');
  const [degree, setdegree] = useState('');
  // Modal
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null); 
  const [oldImage, setOldImage] = useState('');
  const handleClose = () => {
    setShow(false);
    setEditId(null);
  };
  const handleShow = (doctor) => {
    setEditId(doctor._id);
    setname(doctor.name || '');
    setemial(doctor.email || '');
    setpass('');
    setabout(doctor.about || '');
    setadress(doctor.address || '');
    setdata(doctor.date || '');
    setspecialty(doctor.specialty || '');
    setexperience(doctor.experience || '');
    setdegree(doctor.degree || '');
    setOldImage(doctor.image || '');
    setimage(''); 
    setShow(true);
  };

  const [alldocotr, setall] = useState([]);
  useEffect(() => {
    async function getdoctor() {
      const result = await fetch("http://localhost:4000/admin/opreation/showdoctor");
      const final = await result.json();
      setall(final.data);
    }
    getdoctor();
  }, []);

  // Delete
  const deleteitem = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/admin/opreation/deletedoctor/${id}`,
        { method: "DELETE" }
      );
      let data = await response.json();
      if (data.success) {
        setall((prev) => prev.filter((doctor) => doctor._id !== id));
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

  // Edit
  const edititem = async () => {
    if (!editId) return;
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    if (pass) formdata.append("password", pass); 
    formdata.append("about", about);
    formdata.append("address", address);
    formdata.append("experience", experience);
    formdata.append("date", date);
    formdata.append("specialty", specialty);
    formdata.append("degree", degree);

    if (image) {
      formdata.append("image", image);
    } else {
      formdata.append("image", oldImage); 
    }

    try {
      const response = await fetch(
        `http://localhost:4000/admin/opreation/editdoctor/${editId}`,
        {
          method: "POST",
          body: formdata
        }
      );
      let data = await response.json();

      if (data.success) {
        setall((prev) =>
          prev.map((doc) =>
            doc._id === editId
              ? {
                  ...doc,
                  name,
                  email,
                  about,
                  address,
                  experience,
                  date,
                  specialty,
                  degree,
                  image: image ? URL.createObjectURL(image) : oldImage
                }
              : doc
          )
        );

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Doctor updated successfully',
          confirmButtonColor: '#3085d6'
        });
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h4 className="relative inline-block m-0 pb-3 text-lg font-bold text-gray-800 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-1 before:bg-gray-800 after:content-[''] after:absolute after:-bottom-1 after:left-14 after:right-0 after:h-1 after:bg-gray-800 after:opacity-20">
          Admin Panel / Show Doctor
        </h4>
      </div>

      <div className="content p-4 mt-3 m-2">
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>About</th>
              <th>Address</th>
              <th>Date</th>
              <th>Degree</th>
              <th>Experience</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {alldocotr.map((e, i) => (
              <tr key={e._id || i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td>{e.about}</td>
                <td>{e.address}</td>
                <td>{e.date}</td>
                <td>{e.degree}</td>
                <td>{e.experience}</td>
                <td>{e.specialty}</td>
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
          <Modal.Title>Edit Doctor</Modal.Title>
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

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setemial(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Doctor email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  value={pass}
                  onChange={(event) => setpass(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter new password (optional)"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block mb-1 font-medium">Experience</label>
                <select
                  value={experience}
                  onChange={(event) => setexperience(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select Experience</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Year">2 Year</option>
                  <option value="3 Year">3 Year</option>
                  <option value="4 Year">4 Year</option>
                  <option value="5 Year">5 Year</option>
                  <option value="6 Year">6 Year</option>
                  <option value="7 Year">7 Year</option>
                  <option value="8 Year">8 Year</option>
                  <option value="9 Year">9 Year</option>
                  <option value="10+ Year">10+ Year</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block mb-1 font-medium">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setdata(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Specialty */}
              <div>
                <label className="block mb-1 font-medium">Specialty</label>
                <select
                  value={specialty}
                  onChange={(event) => setspecialty(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select Specialty</option>
                  <option value="Dentistry">Dentistry</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Internal_Medicine">Internal Medicine</option>
                </select>
              </div>

              {/* Degree */}
              <div>
                <label className="block mb-1 font-medium">Degree</label>
                <input
                  type="text"
                  value={degree}
                  onChange={(event) => setdegree(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Degree"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1 font-medium">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(event) => setadress(event.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Address"
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

            {/* About */}
            <div className="flex flex-col gap-1 mt-4">
              <label className="font-medium">About Doctor</label>
              <textarea
                value={about}
                onChange={(event) => setabout(event.target.value)}
                className="w-full px-4 py-2 border rounded"
                placeholder="Write about doctor"
                rows={5}
                style={{ resize: "none" }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edititem}>
            Update Doctor
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Showdoctor;