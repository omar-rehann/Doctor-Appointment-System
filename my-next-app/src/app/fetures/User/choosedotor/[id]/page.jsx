"use client"
import Navbarcomponent from "../../components/navbar"
import PosterSection from "../../components/poster";
import Footer from "../../components/footer"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function Choosedoctor() {
  // ---------- form state ----------
  const [day, setday] = useState("");
  const [time, settime] = useState("");
  const [note, setnote] = useState("");

  // ---------- modal ----------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ---------- doctor data ----------
  const { id } = useParams();
  const [doctor, setdoctor] = useState([]);
  const [without, setwithout] = useState([]);

  useEffect(() => {
    async function getdoctor() {
      try {
        const data = await fetch("http://localhost:4000/admin/opreation/showdoctor");
        const result = await data.json();
        setdoctor(result.data.filter((e) => e._id === id));
        setwithout(result.data.filter((e) => e._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
    getdoctor();
  }, [id]);

  // ---------- add appointment ----------
  async function addapointment(item) {
    try {
      const res = await fetch("http://localhost:4000/admin/opreation/addappointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctorId: item._id, name: item.name, day, time, note }),
      });

      const finaldata = await res.json();

      if (finaldata.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Appointment added successfully",
          confirmButtonColor: "#3085d6",
        });
        setday("");
        settime("");
        setnote("");
        handleClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${finaldata.message}`,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Could not connect to the server",
      });
    }
  }

  return (
    <>
      <Navbarcomponent />
      <div className="doctordetials">
        <div className="p-3">
          {doctor.map((item) => (
            <div
              key={item._id}
              className="box cursor-pointer w-full m-2 bg-white shadow-md hover:shadow-xl rounded-2xl p-3 transition-shadow duration-300 border border-gray-100 md:flex-row flex flex-col gap-4"
            >
              {/* img (left) */}
              <div className="image md:w-70 sm:w-full shrink-0">
                <img
                  src={item.image}
                  className="w-full h-full min-h-56 object-cover rounded-lg"
                  alt={item.name}
                />
              </div>

              {/* content (right) */}
              <div className="">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>

                <span className="self-start mt-1 px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                  {item.specialty}
                </span>

                <p className="mt-2 text-sm text-gray-700">🎓 {item.degree}</p>
                <p className="text-sm text-gray-700">💼 {item.experience} of experience</p>
                <p className="text-sm text-gray-500">✉️ {item.email}</p>
                <p className="text-sm text-gray-500">📍 {item.address}</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{item.about}</p>

                {/* social (Font Awesome) */}
                <div className="social flex gap-2 mt-auto pt-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-sky-500 hover:text-white transition-colors duration-300"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white transition-colors duration-300"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>

                {/* appointment */}
                <Button className="mt-5" variant="primary" onClick={handleShow}>
                  Booking Appoitments
                </Button>

                <Modal className="mt-5" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Book Appointment with {item.name}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Form>
                      {/* doctor name (disabled) */}
                      <Form.Group className="mb-3" controlId="appointmentName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={item.name}
                          placeholder="Enter your name"
                          disabled
                        />
                      </Form.Group>

                      {/* day */}
                      <Form.Group className="mb-3" controlId="appointmentDay">
                        <Form.Label>Day</Form.Label>
                        <Form.Control
                          type="date"
                          value={day}
                          onChange={(e) => setday(e.target.value)}
                        />
                      </Form.Group>

                      {/* time */}
                      <Form.Group className="mb-3" controlId="appointmentTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                          type="time"
                          value={time}
                          onChange={(e) => settime(e.target.value)}
                        />
                      </Form.Group>

                      {/* notes */}
                      <Form.Group className="mb-3" controlId="appointmentNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          value={note}
                          placeholder="Write anything you want the doctor to know..."
                          onChange={(e) => setnote(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => addapointment(item)}>
                      Add Appointment
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          ))}
        </div>

        {/* all doctors without the chosen one */}
        <div className="all grid grid-cols-3">
          {without.map((item) => (
            <div
              key={item._id}
              className="box cursor-pointer m-2 bg-white shadow-md hover:shadow-xl rounded-2xl p-3 transition-shadow duration-300 border border-gray-100"
            >
              <div className="image">
                <img
                  src={item.image}
                  className="w-full h-56 object-cover rounded-lg"
                  alt={item.name}
                />
              </div>
              <h5 className="text-base font-semibold text-gray-800 mt-3">{item.name}</h5>
              <Link href={`/fetures/User/choosedotor/${item._id}`}>
                <Button variant="outline-primary mt-2">More Detials</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <PosterSection />
      <Footer />
    </>
  );
}

export default Choosedoctor;