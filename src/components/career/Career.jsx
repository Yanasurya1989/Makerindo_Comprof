import React, { useState } from "react";
import Image from './Image'
import App from '../../App'
import ApplyCreateModal from "./components/applyCreateModal";
import applyService from "./utils/service";
import { useEffect } from "react";
import List from "./list";
import style from './style.module.css'

const Career = () => {
    const [showCreateModal, setShowModal] = useState(false);
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

    useEffect(() => {
        fetchApply();
    }, []);

    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex justify-center container mx-auto px-32 pt-35">
        <div>
            <Image />
            {/* <a className="flex justify-center pt-5" href="#" onClick={toggleCreateModal}>Apply now!</a> */}
            
        </div>
        <div>
            <h6 className="font-bold text-5xl mb-1 lg:mb-1">Web Developer</h6>
            <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est necessitatibus amet dolore. Accusamus officia esse vero dolor illum repellendus distinctio fuga velit debitis cumque non, qui incidunt, ea facilis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est necessitatibus amet dolore. Accusamus officia esse vero dolor illum repellendus distinctio fuga velit debitis cumque non, qui incidunt, ea facilis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est necessitatibus amet dolore. Accusamus officia esse vero dolor illum repellendus distinctio fuga velit debitis cumque non, qui incidunt, ea facilis.</p>
        </div>  
        <ApplyCreateModal
            show={showCreateModal}
            handleClose={toggleCreateModal}
            handleSubmit={handleApply}
        />


        {/* <div className="container max-w-12xl">
            <div className="grid grid-cols-12 gap-4">
                <div className="hide col-span-12 md:col-span-12">
                                      
                </div>
            </div>            
        </div>         */}
    </div>

    
}

export default Career;