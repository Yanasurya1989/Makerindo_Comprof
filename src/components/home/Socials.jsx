import axios from "axios";
import { useEffect, useState } from "react";

export default function Socials() {

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // fetching start
    const [data, setData] = useState(null);

    useEffect(() => {
      // Penggunaan useEffect akan memastikan pemanggilan API hanya terjadi sekali saat komponen dimuat.
      axios.get(`${import.meta.env.VITE_APP_DOMAIN}/hero`)
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));

        console.log(data)
    }, []); 
    // fetching end

  return (
    <div className={`container ${isScrolled ? 'scrolledKiri' : ''} flex flex-col w-full border-opacity-50 -translate-y-12 z-50 absolute left-0`}>
      <div className="divider divider-socials uppercase">
        {data ? data.socialMedia.map((data, index) => (
          <a key={index} href={data.url} 
            target="_blank"
            rel="noopener noreferrer"
          className="btn btn-ghost hover:bg-transparent">{data.name}</a>
        )) : ''}
        

        {/* <a href="/" className="btn btn-ghost hover:bg-transparent">Youtube</a>
        <a href="/" className="btn btn-ghost hover:bg-transparent">Linkedin</a>
        <a href="/" className="btn btn-ghost hover:bg-transparent">Tokopedia</a> */}

        
      </div>
    </div>
  )
}