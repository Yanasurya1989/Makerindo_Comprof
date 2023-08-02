import imgWebdev from '../assets/img/hiring/web-developer.png';
import imgProject from '../assets/img/hiring/project-manager.png';
import imgUi from '../assets/img/hiring/ui-ux.png';
import { useEffect, useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { motion } from "framer-motion";
import '../career/felex/View.css';
import axios from 'axios';

const hiringList = [
  {
    id: '1',
    image: imgWebdev,
    title: "Web Developer",
    url: "/career"
  },
  {
    id: '2',
    image: imgProject,
    title: "Project Manager",
    url: "/manager"
  },
  {
    id: '3',
    image: imgUi,
    title: "UI/UX Designer",
    url: "/ui"
  },
];

export default function Hiring() {
  const [currentHiring, setCurrentHiring] = useState(hiringList[0]);
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const [isShow, setIsShow] = useState(false)

  function list(){
    setIsShow(!isShow)
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 500) {
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

  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/career`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  function HiringCard({ id, image, title, url }) {
    
    return (
      <motion.section
        id="career"
        className="h-[80vh] flex justify-center items-center animate_animated animate__bounceInUp"
      >        
        <div className="card w-full">
          <figure className="p-1">
            <img src={image} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-start px-0 py-3">
            <h2 className="card-title font-bold text-xl montserrat">{title}</h2>
            <div className="card-actions text-left">
              <button onClick={url} className="btn btn-ghost capitalize font-light text-md p-0 hover:bg-transparent montserrat">
                <Link to={`/vacancy/${id}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  Apply Now
                </Link>
              </button>
              
            </div>
            { 
                isShow ?
                <div className='container'>
                  <ul className='item'>
                    <li className='btn btn-primary'><Link to={url}>Internship</Link></li>
                  </ul>
                  <ul className='item'>
                    <li><li className='btn btn-success'>Employee</li></li>
                  </ul>
                </div>:null
              }
          </div>
        </div>
       
      </motion.section>
    )
  }
  
  return (
    <section id="hiring" className="h-[130vh] flex flex-col justify-center items-center pt-0">
      {isVisible &&(
        <div className="hiring-title">        
          <h4 className="font-bold text-4xl montserrat animate_animated animate__bounceInUp">
            {data?.title}
          </h4>
          <h4 className="font-light text-4xl montserrat">{data?.subtitle}</h4>
        </div>
      )}
      <div className="hiring-content lg:px-32">
        <div className="grid grid-cols-3 gap-0">
          {/* {data ? data.vacancy.map((data, index) => (
            <HiringCard key={index} img={data.image} title={data.title} url={data.url} />
          )) : ''} */}
           {data && data.vacancy.map((data, index) => (
            <HiringCard key={data.id} id={data.id} image={data.image} title={data.title} url={data.id} />
          ))}
        </div>
      </div>
    </section>
  )
}