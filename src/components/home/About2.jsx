import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const About2 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/about`)
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []); 

    return (
        <>
            <div className="about-content flex flex-col justify-center items-center h-screen hidden md:flex mx-auto p-20">
                <h1 className="uppercase text-center font-bold lg:text-[6rem] text-gradient-primary mb-6">
                    About Us
                </h1>
                {data?.description} 
            </div>
                
        </>
    );
}

export default About2;