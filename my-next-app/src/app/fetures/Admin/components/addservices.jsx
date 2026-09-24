"use client"
import Swal from 'sweetalert2';
import { useState } from "react"
function Addservices(){
     const [name,setname]=useState('');
    const [image,setimage]=useState('');
        const [description,setdesc]=useState('');

             async function sendservices(e){
        e.preventDefault()
            let alldata={
                name:name,
                description:description,
                image:image,
                
            }
            let formdata= new FormData();
            formdata.append("name",alldata.name);
            formdata.append("description",alldata.description);
            formdata.append("image", alldata.image);
        
          let senddata = await fetch(
        "http://localhost:4000/admin/opreation/addservice",
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
        text: 'Service added successfully',
        confirmButtonColor: '#3085d6'
    });
        setname('');
        setimage('');
        setdesc('')
      
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
        <div className="services">
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
  Admin Panel / Add Services
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
                Upload Service <br /> picture
            </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            {/* left column */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">
                {/* name doctor */}
                <div className="flex flex-col gap-1">
                    <p>Add Service</p>
                    <input
                    onChange={(e)=>setname(e.target.value)}
                    value={name}
                        className="border rounded px-3 py-2"
                        type="text"
                        placeholder="Name Service"
                        required
                    />
                </div>


               
               
            </div>

            
        </div>

        {/* DEscrption */}
        <div className="flex flex-col gap-1 mt-4">
            <p>Descrption Service</p>
            <textarea
            onChange={(e)=>setdesc(e.target.value)}
                className="w-full px-4 pt-2 border rounded"
                placeholder="Write about Service"
                rows={5}
                required
                value={description}
            />
        </div>

        <button
            type="submit"
            onClick={sendservices}
            className="bg-primary rounded px-5 py-3 mt-4 text-white rounded-full"
        >
            Add Service
        </button>
    </div>
</div>

            </div>
        </div>
        </>
    )
}
export default Addservices