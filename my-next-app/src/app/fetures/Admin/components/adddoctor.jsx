"use client"
import Swal from 'sweetalert2';
import { useState } from "react"
function AddDoctor(){
    const [name,setname]=useState('');
    const [email,setemial]=useState('');
    const [pass,setpass]=useState('');
    const [image,setimage]=useState('');
    const [about,setabout]=useState('');
    const [address,setadress]=useState('');
    const [date,setdata]=useState('');
   const [specialty, setspecialty] = useState('Dentistry');
const [experience, setexperience] = useState('1 Year');


    const[degree,setdegree]=useState('');
    console.log(name,email,pass,image,about,address,date,specialty,degree,experience)
   async function senddatadoctor(e){
    e.preventDefault()
        let alldata={
            name:name,
            email:email,
            password:pass,
            image:image,
            about:about,
            address:address,
            specialty:specialty,
            experience:experience,
            degree:degree,
            date:date
        }
        let formdata= new FormData();
        formdata.append("name",alldata.name);
        formdata.append("email",alldata.email);
        formdata.append("password",alldata.password);
formdata.append("image", alldata.image);
        formdata.append("about",alldata.about);
        formdata.append("address",alldata.address);
        formdata.append("experience",alldata.experience);
        formdata.append("date",alldata.date);
        formdata.append("specialty",alldata.specialty);
        formdata.append("degree",alldata.degree);
      let senddata = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/opreation/adddoctor`,
    {
        method: "POST",
        body: formdata
    }
);

let finaldata = await senddata.json();
if(finaldata.success){
       Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Doctor added successfully',
    confirmButtonColor: '#3085d6'
});

    setname('');
    setemial('');
    setpass('')
    setimage('');
    setabout('');
    setadress('');
    setdata('');
   setspecialty('')
    setexperience('');

}else{
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${finaldata.message}`,
});
}
console.log("final data",finaldata);
    }
    return(
        <>
        <div className="adddoctor">
            <div className="container">
    <h4
  className="
    relative inline-block m-0 pb-3
    text-lg font-bold text-gray-800
    before:content-[''] before:absolute before:-bottom-1 before:left-0
    before:w-12 before:h-1 before:bg-gray-800
    after:content-[''] after:absolute after:-bottom-1 after:left-14
    after:right-0 after:h-1 after:bg-gray-800 after:opacity-20
  "
>
  Admin Panel / Add Doctor
</h4>
    <span></span>
</div>
            <div className="content">
              <div className="fromadddoctor  p-4 w-full">

    <div className="bg-white  p-4 border rounded w-full  m-2">
        {/* upload image */}
        <div className="flex items-center gap-4 mb-8 text-gray-500">
           <label htmlFor="doc-img">
    <img
        className="w-16 bg-gray-100 rounded-full cursor-pointer"
        src="/upload_area.svg"
        alt="Upload"
    />
</label>

<input type="file"     onChange={(e) => setimage(e.target.files[0])}
 id="doc-img" hidden />
            <p>
                Upload doctor <br /> picture
            </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            {/* left column */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">
                {/* name doctor */}
                <div className="flex flex-col gap-1">
                    <p>Doctor Name</p>
                    <input
                    onChange={(e)=>setname(e.target.value)}
                    value={name}
                        className="border rounded px-3 py-2"
                        type="text"
                        placeholder="Name"
                        required
                    />
                </div>

                {/* email doctor */}
                <div className="flex flex-col gap-1">
                    <p>Doctor Email</p>
                    <input
                    onChange={(e)=>setemial(e.target.value)}
                    value={email}
                        className="border rounded px-3 py-2"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>

                {/* password doctor */}
                <div className="flex flex-col gap-1">
                    <p>Doctor Password</p>
                    <input
                    onChange={(e)=>setpass(e.target.value)}
                    value={pass}
                        className="border rounded px-3 py-2"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>

                {/* experience */}
                <div className="flex flex-col gap-1">
                    <p>Experience</p>
                    <select className="border rounded px-3 py-2" onChange={(e)=>setexperience(e.target.value)}>
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

                {/* date */}
                <div className="flex flex-col gap-1">
                    <p>Date</p>
                    <input
                    onChange={(e)=>setdata(e.target.value)}
                    value={date}
                        className="border rounded px-3 py-2"
                        type="date"
                        placeholder="Record Data"
                        required
                    />
                </div>
            </div>

            {/* right column */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">
                {/* specialty */}
                <div className="flex flex-col gap-1">
                    <p>Specialty</p>
                    <select className="border rounded px-3 py-2" onChange={(e)=>setspecialty(e.target.value)}>
                        <option value="Dentistry">Dentistry</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Ophthalmology">Ophthalmology</option>
                        <option value="Internal_Medicine">Internal_Medicine</option>

                    </select>
                </div>

                {/* degree */}
                <div className="flex flex-col gap-1">
                    <p>Degree</p>
                    <input
                    onChange={(e)=>setdegree(e.target.value)}
                        className="border rounded px-3 py-2"
                        type="text"
                        placeholder="Degree"
                        required
                        value={degree}
                    />
                </div>

                {/* address */}
                <div className="flex flex-col gap-1">
                    <p>Address</p>
                    <input
                    onChange={(e)=>setadress(e.target.value)}
                        className="border rounded px-3 py-2"
                        type="text"
                        placeholder="Address line 1"
                        required
                        value={address}
                    />
                   
                </div>
            </div>
        </div>

        {/* about */}
        <div className="flex flex-col gap-1 mt-4">
            <p>About Doctor</p>
            <textarea
            onChange={(e)=>setabout(e.target.value)}
                className="w-full px-4 pt-2 border rounded"
                placeholder="Write about doctor"
                rows={5}
                required
                value={about}
            />
        </div>

        <button
            type="submit"
            onClick={senddatadoctor}
            className="bg-primary rounded px-5 py-3 mt-4 text-white rounded-full"
        >
            Add doctor
        </button>
    </div>
</div>

            </div>
        </div>
        </>
    )
}
export default AddDoctor