import React, { useState, useEffect } from "react";
import Career from "./Career";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ApplyCreateModal from "./components/applyCreateModal";
import applyService from "./utils/service";
import ApplyDeleteModal from "./components/applyDeleteModal";

const List = () => {
    const [showCreateModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedApply, setSelectedApply] = useState({});
    const [apply, setApply] = useState([]);

    const toggleCreateModal = () => {
        setShowModal(!showCreateModal);
    };

    const handleApply = (payload) => {
        applyService.addApply(payload);
        toggleCreateModal();
        fetchApply();
    };

    const fetchApply = () => {
        const response = applyService.getApply();
        setApply(response.data);
    };

    const openDeleteModal = (del) => {
        setSelectedApply(del)
        setShowDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setSelectedApply({});
        setShowDeleteModal(false)
    }

    useEffect(() => {
        fetchApply();
    }, []);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Usia</th>
                        <th>Pendidikan</th>
                        <th>Telp</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {apply.map((item, list) => {
                        return(
                            <tr key={list}>
                                <td>{list+1}</td>
                                <td>{item.nama}</td>
                                <td>{item.usia}</td>
                                <td>{item.pendidikan}</td>
                                <td>{item.telp}</td>
                                <td>
                                    <button className="btn btn-warning mx-3">Edit</button>
                                    <button className="btn btn-error" onClick={() => openDeleteModal(item)}>Delete</button>
                                </td>
                            </tr>  
                        )
                    })}
                                      
                </tbody>
            </table>
            {/* <ApplyCreateModal
                show={showCreateModal}
                handleClose={toggleCreateModal}
                handleSubmit={handleApply}
            /> */}

            <ApplyDeleteModal
                show={true}
                handleClose={closeDeleteModal}
                onConfirm={()=>{}}
            />
        </div>        
    );
}

export default List;