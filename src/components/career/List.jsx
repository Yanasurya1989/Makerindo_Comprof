import React, { useState, useEffect } from "react";
import Career from "./Career";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ApplyCreateModal from "./components/applyCreateModal";
import applyService from "./utils/service";
import ApplyDeleteModal from "./components/applyDeleteModal";
import Timestamp from "react-timestamp";
import dayjs from "dayjs";
import ApplyEditModal from "./components/applyEditModal";
import { getCV } from "./utils/firebase";

const List = () => {
    const [showCreateModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);    
    const [selectedApply, setSelectedApply] = useState({});
    const [apply, setApply] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(true);

    const openDeleteModal = () => {
        setSelectedApply()
        setShowDeleteModal(!showDeleteModal);
    }

    const toggleCreateModal = () => {
        setShowModal(!showCreateModal);
    };

    const handleApply = (payload) => {
        applyService.addApply(payload);
        toggleCreateModal();
        fetchApply();
    };

    const fetchApply = async() => {
        // const response = applyService.getApply();
        // setApply(response.data);

        const response = await getCV()
        setApply(response)
        console.log(response)
    };

    const closeDeleteModal = () => {
        setSelectedApply({});
        setShowDeleteModal(false)
    }

    const openEditModal = (editapply) => {
        setSelectedApply(editapply);
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setSelectedApply({});
        setShowEditModal(false)
    }

    const handleEditApply = (editapply) => {
        const {id, ...others} = editapply;
        applyService.updateApply(id, others);
        closeEditModal();
        fetchApply();
    };

    const handleDeleteApply = () => {
        const {id} = selectedApply;
        applyService.deleteApply(id);
        fetchApply()
        closeDeleteModal()
    }

    useEffect(() => {
        fetchApply();
    }, []);
    console.log(apply)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Apply At</th>
                        <th>Nama</th>
                        <th>Usia</th>
                        <th>Pendidikan</th>
                        <th>Telp</th>
                        <th>CV</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {apply.map((item, list) => {
                        console.log('item',item.taemsetem)
                        return(
                            <tr key={list}>
                                <td>{list+1}</td>
                                <td> </td>
                                <td>{item.nama}</td>
                                <td>{item.usia}</td>
                                <td>{item.pendidikan}</td>
                                <td>{item.telp}</td>
                                <td><a href={item.cvUrl}>Show file</a></td>
                                <td>
                                    <button className="btn btn-warning mx-3" onClick={()=>window.my_modal_update.showModal()}>Edit</button>
                                    <button className="btn btn-error" onClick={()=>window.my_modal_delete.showModal(item)}>delete</button>
                                </td>
                            </tr>  
                        )
                    })}
                                      
                </tbody>
            </table>
            <ApplyEditModal
                data={selectedApply}
                show={showEditModal}
                handleClose={closeEditModal}
                handleSubmit={handleEditApply}
            />
            <ApplyDeleteModal
                show={showDeleteModal}
                handleClose={closeDeleteModal}
                onConfirm={handleDeleteApply}
            />
        </div>        
    );
}

export default List;