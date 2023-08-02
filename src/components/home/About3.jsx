import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const About3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_DOMAIN}/about`)
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);  
    console.log(data)

    return (
        <section id="about">
            <>
            <div className="about-counter flex flex-col justify-center items-center h-[100vh] relative animate__animated animate__zoomInUp">
            <div className="about-counter-content relative p-20">
                <h1 className="text-center lg:text-left z-10 absolute lg:-top-20 lg:-right-10 font-bold lg:text-[8rem] uppercase text-gradient-primary lg:opacity-40 mb-3 md:mt-10 ">About Us</h1>
                <p className="about-description z-20 text-center mb-12 text-md mx-35">
                    {data?.description}
                </p>
                <h2 className="text-2xl font-bold uppercase mb-8">
                    makerindo in number
                </h2>
                <div className="counter grid grid-cols-4 gap-4">
                    <div className="counter-team text-center montserrat">
                    <h1 className="text-2xl md:text-8xl font-bold">{data?._count?.team}+</h1>
                    <p className="text-md md:text-lg">Team</p>
                    </div>
                    <div className="counter-project text-center montserrat">
                    <h1 className="text-2xl md:text-8xl font-bold">{data?._count?.project}+</h1>
                    <p className="text-md md:text-lg">projects in year</p>
                    </div>
                    <div className="counter-client text-center montserrat">
                    <h1 className="text-2xl md:text-8xl font-bold">{data?._count?.client}+</h1>
                    <p className="text-md md:text-lg">Client</p>
                    </div>
                    <div className="counter-partner text-center montserrat">
                    <h1 className="text-2xl md:text-8xl font-bold">{data?._count?.partner}+</h1>
                    <p className="text-md md:text-lg">Partner</p>
                    </div>
                </div>
            </div>
        </div>
            </>
        </section>
    );
}

export default About3;