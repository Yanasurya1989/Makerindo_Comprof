import React, { useState } from "react";
import Image_manager from './Image_manager'
import App from '../../App'
import ApplyCreateModal from "./components/applyCreateModal";
import ApplyCreateInternshipModal from "./components/applyCreateInternshipModal";
import applyService from "./utils/service";
import { useEffect } from "react";
import style from './style.module.css'
import '../career/felex/View.css';

const Career = () => {
    
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
    }

    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex justify-center container mx-auto px-30 pt-35">
        <div>
            <div>
                <Image_manager />
                {/* <a className="flex justify-center pt-5" href="#" onClick={toggleCreateModal}>Apply now!</a> */}
            </div>            
            {/* <div className="flex justify-center pt-5">

                <ApplyCreateModal
                    show={showCreateModal}
                    handleClose={toggleCreateModal}
                    handleSubmit={handleApply}
                />
                
            </div>             */}

            <div className="card-actions flex justify-center">
                <button onClick={list} className="btn btn-ghost capitalize font-light text-md p-0 hover:bg-transparent montserrat">Apply Now</button>
            </div>

            {
                isShow?
                <div className='container'>
                  {/* <a href="/career">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text px-3 capitalize font-light text-md p-0 hover:bg-transparent montserrat">Internship</span> 
                      </label>
                      <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <a href="/career">
                          <span className="label-text px-3 capitalize font-light text-md p-0 hover:bg-transparent montserrat">Employee</span>
                        </a>
                         
                      </label>
                    </div>
                  </a> */}
                  
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
            <h6 className="font-bold text-5xl mb-1 lg:mb-1">Project Manajer</h6>
            <br />
            <p>
                Makerindo is a rapidly growing startup that is looking for a talented and experienced Web Developer to join our team. We are looking for someone who is passionate about building beautiful and functional websites and who has a deep understanding of web technologies. The ideal candidate will have experience in HTML, CSS, JavaScript, and React, as well as a strong understanding of web development best practices.
            </p>
            <br />
            <p>Responsibilities:</p>
            <ul className="list-disc px-6">
                <li>Collaborate with the design team to turn wireframes and mockups into fully functional websites</li>
                <li>Build and maintain our website and web-based applications</li>
                <li>Keep up-to-date with the latest web technologies and trends</li>
                <li>Ensure that all websites and web-based applications are optimized for speed, security, and usability</li>
            </ul>
            <br />
            <p>Requirements:</p>
            <ul className="list-disc px-6">
                <li>2+ years of experience in web development</li>
                <li>Strong understanding of HTML, CSS, JavaScript, and React</li>
                <li>Experience with web development best practices</li>
                <li>Strong problem-solving skills and attention to detail</li>
                <li>Ability to work independently and as part of a team</li>
                <li>Excellent written and verbal communication skills</li>
                <li>BSc in Computer Science or related field (preferred)</li>
            </ul>
            <br />
            <p>
                If you are passionate about web development and are looking for a challenging and rewarding role in a fast-paced startup environment, we would love to hear from you. Apply now to join our team at Makerindo!
            </p>
        </div>  
        

        {/* <div className="container max-w-12xl">
            <div className="grid grid-cols-12 gap-4">
                <div className="hide col-span-12 md:col-span-12">
                                      
                </div>
            </div>            
        </div>         */}
    </div>

    
}

export default Career;