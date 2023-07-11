import React, { useState, useEffect } from "react";
import useForm from "./useForm";

const ApplyCreateModal = ({show, handleClose, handleSubmit, inputs, handleChange, errors}) => {
    
    // useEffect(()=>{
    //     console.log(errors)
    //     if(Object.keys(errors).length == 0){
    //         alert('all field are fullfilled')
    //     }
    // },[errors])
    
    const [nama, setNama] = useState("");
    const [usia, setUsia] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const [telp, setTelp] = useState("");

    function validatePhoneNumber(inputtxt) {
        var phoneno = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
        if(inputtxt.match(phoneno)) {
            setTelp(inputtxt)
        }
        else {
          alert("Phone number tidak valid");
          return false;
        }
    }
    
    // function PhoneNumberInput(){
    //     const [inputValue, setInputValue] = useState('')
    //     const handleInput = e => {
    //         const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    //         setInputValue(formattedPhoneNumber);

    //     };

    //     return <input onChange={e => handle(e)} value={inputValue}/>
    // }

    // function formatPhoneNumber(value){
    //     if(!value) return value;
    //     const phoneNumber = value.replace(/[^\d]/g, '');
    //     const phoneNumberLength = phoneNumber.length;

    //     if(phoneNumberLength < 4) return phoneNumber;

    //     if(phoneNumberLength < 7){
    //         return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    //     }
    //     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    //         3,
    //         6,
    //     )}-${phoneNumber.slice(6, 10)}`; 
    // }

    const onSubmit = () => {
        const timeStamp = Math.floor(Date.now() / 1000);
        const payload = {
            id: timeStamp,
            nama: nama,
            usia: usia,
            pendidikan: pendidikan,
            telp: telp
        }

        console.log(payload );
        
        handleSubmit(payload);
    }
    return (
        <>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={toggleCreateModal}>Apply now !</button> */}
            <a className="btn px-50" onClick={()=>window.my_modal_1.showModal()} href="#">Apply now !</a>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-center">Insert Form</h3>
                    <p className="py-4 text-center">Silahkan lengkapi data berikut</p>

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
                        
                        <label className="label">
                            <span className="label-text">Usia</span>
                        </label>                        
                        <input 
                            onChange={(e) => setUsia(e.target.value)} type="text" 
                            className="input input-bordered w-full max-w-xs" 

                            id="usia"
                            name="usia"
                        />

                        <label className="label">
                            <span className="label-text">Pendidikan Terakhir</span>
                        </label>                        
                        {/* <input onChange={(e) => setPendidikan(e.target.value)} type="text" className="input input-bordered w-full max-w-xs" /> */}

                        <select 
                            onChange={(e) => setPendidikan(e.target.value)} className="select select-ghost w-full max-w-xs"
                        
                            id="pendidikan"
                            name="pendidikan"
                        >
                            <option disabled selected>option ..</option>
                            <option>SMA</option>
                            <option>S1</option>
                            <option>S2</option>
                            <option>S3</option>
                        </select>

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