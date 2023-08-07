import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import Result from "postcss/lib/result";
import UploadCV from "./uploadCV";
import { Button } from "react-daisyui";

const ApplyCreateModal = ({handleFormValidate, handleFormOnChange, show, handleClose, handleSubmit, inputs, handleChange, errors}) => {
    
    
    const [nama, setNama] = useState("");
    const [usia, setUsia] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const [telp, setTelp] = useState("");
    const [taemsetem, setTimesetem] = useState("");
    const [selectedFile, setselectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const[error, setError] = useState("")

    const changeHandler = (event) => {
        setselectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };    

    function validatePhoneNumber(inputtxt) {
        var phoneno = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
        if(inputtxt.match(phoneno)) {
            setTelp(inputtxt)
            setError("");
        }
        else {
          setError("Format number is not valid");
          return false;
        }
    }

    const onSubmit = () => {
        const timeStamp = Math.floor(Date.now() / 1000);
        const payload = {
            nama: nama,
            usia: usia,
            pendidikan: pendidikan,
            telp: telp,
            taemsetem: taemsetem
        }

        

        console.log(payload );
        
        insertCV(payload, selectedFile);        
    }

    return (
        <>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={toggleCreateModal}>Apply now !</button> */}
            <button className="px-50" onClick={()=>window.my_modal_create.showModal()}>Employee</button>
            <dialog id="my_modal_create" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-center">Employee's Form</h3>
                    <p className="py-4 text-center"> </p>

                    {/* form input */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text form">Nama</span>
                        </label>                        
                        <input 
                            onChange={(e) => setNama(e.target.value)} 
                            type="text" 
                            className="input input-bordered w-full max-w-xs" 

                            id="nama"
                            name="nama"
                            
                            // value={inputs.nama}
                        />
                        {/* <p>{errors.name}</p> */}
                        
                        <label className="label">
                            <span className="label-text">Telp</span>
                        </label>                        
                        <input 
                            onChange={(e) => validatePhoneNumber(e.target.value)} 
                            type="text" 
                            className="input input-bordered w-full max-w-xs" 

                            id="telp"
                            name="telp"
                        />
                        
                        {error && <span className="text-red-500 py-2">{error}</span> }

                        <label className="label">
                            <span className="label-text">Nama  dan Posisi Pekerjaan Terakhir</span>
                        </label>                        
                        <input 
                            onChange={(e) => setUsia(e.target.value)} type="text" 
                            className="input input-bordered w-full max-w-xs" 

                            id="usia"
                            name="usia"
                            required
                        />

                        <label className="label">
                            <span className="label-text">Pendidikan Terakhir</span>
                        </label>                        
                        {/* <input onChange={(e) => setPendidikan(e.target.value)} type="text" className="input input-bordered w-full max-w-xs" /> */}

                        <select 
                            onChange={(e) => setPendidikan(e.target.value)} className="select select-ghost w-full max-w-xs"
                        
                            id="pendidikan"
                            name="pendidikan"
                            required
                        >
                            <option disabled selected>option ..</option>
                            <option>SMA</option>
                            <option>S1</option>
                            <option>S2</option>
                            <option>S3</option>
                        </select>

                        <label className="label">
                            <span className="label-text">Skill dan Portfolio</span>
                        </label>                        
                        <input 
                            onChange={(e) => setUsia(e.target.value)} type="text" 
                            className="input input-bordered w-full max-w-xs" 

                            id="usia"
                            name="usia"
                            required
                        />

                        <label className="label">
                            <span className="label-text">Upload CV</span>
                        </label>                        
                        <input 
                            onChange={changeHandler} 
                            type="file" 
                            required
                             
                        />

                        <label className="label">
                            <span className="label-text">Rekomendasi(Optional)</span>
                        </label>                        
                        <input 
                            onChange={changeHandler} 
                            type="file" 
                            required
                             
                        />

                        {/* <label className="label">
                            <span className="label-text">Telp</span>
                        </label> 

                        <button className="btn btn-primary" onClick={UploadCV}>Upload CV</button> */}

                        {/* <UploadCV
                            show={showUploadCVModal}
                            handleClose={toggleUploadCVeModal}
                            handleSubmit={()=>{}}
                        /> */}

{/* <label className="label">
                <span className="label-text">Upload CV</span>
            </label>                        
            <input 
                onChange={(e) => validatePhoneNumber(e.target.value)} 
                type="file" 
                className="input input-bordered w-full max-w-xs" 
            />

                         */}
                        {/* input type="text" onChange={(e) => validatePhoneNumber(e.target.text)} */}
                    </div>

                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={onSubmit} className="btn btn-primary">Submit</button>
                        {/* <button onClick={handleClose} className="btn btn-error">Close</button> */}
                    </div>
                </form>
            </dialog>
        </>        
    );
}


export default ApplyCreateModal;