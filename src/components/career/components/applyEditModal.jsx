import React, { useState, useEffect } from "react";  

const ApplyEditModal = ({show, handleClose, handleSubmit, inputs, handleChange, errors, data}) => {

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
    
    const onSubmit = () => {
        const payload = {
            id: data.id,
            nama: nama,
            usia: usia,
            pendidikan: pendidikan,
            telp: telp
        };

        // console.log(payload );
        
        handleSubmit(payload);
    };

    useEffect(()=>{
        setNama(data.nama);
        setUsia(data.usia);
        setPendidikan(data.pendidikan);
        setTelp(data.telp);
    }, [data])

    return (
        <>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={toggleCreateModal}>Apply now !</button> */}
            <button className="btn btn-warning mx-3" onClick={()=>window.my_modal_update.showModal()}>Edit</button>
            <dialog id="my_modal_update" className="modal">
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
                            value={nama}
                        />
                        
                        <label className="label">
                            <span className="label-text">Usia</span>
                        </label>                        
                        <input 
                            onChange={(e) => setUsia(e.target.value)} type="text" 
                            className="input input-bordered w-full max-w-xs" 

                            id="usia"
                            name="usia"
                            value={usia}
                        />

                        <label className="label">
                            <span className="label-text">Pendidikan Terakhir</span>
                        </label>                        
                        {/* <input onChange={(e) => setPendidikan(e.target.value)} type="text" className="input input-bordered w-full max-w-xs" /> */}

                        <select 
                            onChange={(e) => setPendidikan(e.target.value)} className="select select-ghost w-full max-w-xs"
                        
                            id="pendidikan"
                            name="pendidikan"
                            value={pendidikan}
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
                            value={telp}
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

export default ApplyEditModal;