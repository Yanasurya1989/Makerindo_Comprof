import { handleDelete } from "../utils/firebase";


const ApplyDeleteModal = ({show, handleClose, onConfirm}) => {
    return (
        <>
            {/* Open the modal using ID.showModal() method */}
            {/* <button onHide={handleClose}  className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button> */}
            <button className="btn btn-error" onClick={()=>window.my_modal_delete.showModal()}>delete</button>
            <dialog id="my_modal_delete" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Confirm</h3>
                <p className="py-4">Are you teh sure...?</p>
                <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error" onClick={() => {
                    handleDelete()
                    handleClose
                }}>Yes</button>
                <button className="btn btn-success" onClick={onConfirm}>Cancel</button>
                </div>
            </form>
            </dialog>
        </>
    );
}

export default ApplyDeleteModal;