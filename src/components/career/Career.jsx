import React, { useState } from "react";
import Image from './Image'
import App from '../../App'
import ApplyCreateModal from "./components/applyCreateModal";
import ApplyCreateInternshipModal from "./components/applyCreateInternshipModal";
import applyService from "./utils/service";
import { useEffect } from "react";
import List from "./list";
import style from './style.module.css'
import uploadCV from "./components/uploadCV";
import '../career/felex/View.css';
import axios from "axios";
import { useParams } from "react-router-dom";

const Career = () => {
    const {id} = useParams()
    console.log(id)
    
    const [showCreateModal, setShowModal] = useState(false);
    const [showCreateInternshipModal, setShowInternshipModal] = useState(false);

    const [apply, setApply] = useState([]);

    const toggleCreateModal = () => {
        setShowModal(!showCreateModal);
    };

    const toggleCreateInternshipModal = () => {
        setShowInternshipModal(!showCreateInternshipModal);
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

    const [isShow, setIsShow] = useState(false)

    function list(){
        setIsShow(!isShow)
        console.log('show')
    }

    // fetching start
    const [data, setData] = useState(null);
    useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/vacancy/${id}`)
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []); 
    // fetching end

    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex justify-center container mx-auto px-30 pt-35">
        {data && (          
            <>
                <div>
                    <div>
                        <Image img={data.image} />
                    </div>   
                    <div className="card-actions flex justify-center">
                        <button onClick={list} className="btn btn-ghost capitalize font-light text-md p-0 hover:bg-transparent montserrat">Apply Now</button>
                    </div>
                    {
                        isShow?
                        <div className='container'>
                            <div className="flex justify-between w-full ulcar">                        
                                <button className="btn btn-primary" onClick={()=>window.my_modal_create.showModal()}>
                                    <ApplyCreateModal
                                        show={showCreateModal}
                                        handleClose={toggleCreateModal}
                                        handleSubmit={handleApply}
                                    />
                                </button>
                                <button className="btn btn-warning" onClick={()=>window.my_modal_create_internship.showModal()}>
                                    <ApplyCreateInternshipModal
                                        show={showCreateInternshipModal}
                                        handleClose={toggleCreateInternshipModal}
                                        handleSubmit={handleApply}
                                    />
                                </button>                            
                            </div>
                        </div>:null
                    }
                </div>
                <div>
                    <h6 className="font-bold text-5xl mb-1 lg:mb-1">{data.title}</h6>
                    <br />
                    <p>{data.description}</p>
                </div>  
            </>
        )
        }        
    </div>    
}

export default Career;