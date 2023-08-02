const UploadCV = () => {
    return (
        <>
            {/* Open the modal using ID.showModal() method */}
            <button className="btn" onClick={()=>window.my_modal_1.showModal()}>Upload CV</button>
            <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Upload CV!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <label className="label">
                <span className="label-text">Upload CV</span>
            </label>                        
            <input 
                onChange={(e) => validatePhoneNumber(e.target.value)} 
                type="file" 
                className="input input-bordered w-full max-w-xs" 
            />
            <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
            </div>
            </form>
            </dialog>
        </>
    );
}

export default UploadCV;