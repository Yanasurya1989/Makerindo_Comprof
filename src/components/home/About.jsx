import { useEffect, useState } from "react";
import { Button } from "react-daisyui";
import { Navigate, Outlet } from "react-router-dom";
import Youtube from "react-youtube";
import 'animate.css';
import { useQuery } from "react-query";
import axios from "axios";


export default function About() {
  const aboutVideoOpts = {
    playerVars: {
      autoplay: 1,
    },
  };
  const [isVisibleTitle, setIsVisibleTitle] = useState(true);

  const handleScrollTitle = () => {
    const scrollY = window.scrollY;
    if (scrollY > 600) {
      setIsVisibleTitle(false);
    } else {
      setIsVisibleTitle(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTitle);
    return () => {
      window.removeEventListener('scroll', handleScrollTitle);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/about`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(data)

  const aboutDescription =
    "Makerindo adalah perusahaan IT yang fokus pada pembuatan dan pengembangan produk serta integrator sistem. Makerindo berdiri pada 6 Juni 2019 di Bandung. Kami memiliki kompetensi pada bidang Website, Mobile App, Dekstop, Embedded System dan Internet of Things (IoT). Kami memberikan layanan prima untuk semua segment customer dalam membuat produk sesuai spesifikasi dan kesepakatan bersama pada bidang embedded system, Website, Desktop, Mobile App, dan Internet of Things. Kami juga dapat menjadi mitra pelaksanaan seminar/workshop.";   

  const [isShow, setIsShow] = useState(false)

  function klik(){
    setIsShow(!isShow)
  }

  return (
    <section id="about">
      <>
        <div className="about-title flex justify-center items-center h-screen hidden md:flex  animate__animated animate__backInUp h-[130vh] pt-0">
          <div>
            <h1 className="uppercase text-center font-bold lg:text-8xl text-gradient-primary">
              About Us
            </h1> 
            {/* {
              isVisibleTitle &&(
              )
            } */}
            {
              isVisible && (
                <div className="about-video flex flex-col justify-center items-center h-screen md:my-6">
                  <h1 className="uppercase text-center font-bold text-4xl text-gradient-primary mb-1 md:hidden">
                    About Us
                  </h1>
                  
                  <Youtube
                    videoId={data?.videoId}
                    opts={aboutVideoOpts}
                    iframeClassName="w-[100vh] lg:h-[90vh] lg:w-[80vw]"
                  />
                </div>)      
            }
          </div>
        </div>
      </>       
      
      <div className="about-content flex flex-col justify-center items-center h-screen hidden md:flex">
        <h1 className="uppercase text-center font-bold lg:text-[6rem] text-gradient-primary mb-6">
          About Us
        </h1>
          {data?.description}
      </div>
      <div className="about-counter flex flex-col justify-center items-center h-[100vh] relative animate__animated animate__zoomInUp">
        <div className="about-counter-content relative">
          <h1 className="text-center lg:text-left z-10 absolute lg:-top-20 lg:-right-5 font-bold lg:text-[8rem] uppercase text-gradient-primary lg:opacity-40 mb-3 md:mt-12 ">About Us</h1>
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
    </section>
  );
}
