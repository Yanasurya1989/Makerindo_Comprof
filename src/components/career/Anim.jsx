import React, { useState, useEffect } from 'react';
import './Animaa.css';

const Anim = () => {
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

    return (
        <>
            {/* <div className={`container ${isScrolled ? 'scrolled' : ''}`}>
                <h1>Scroll down to see the animation!</h1>
            </div> */}
            <div>
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <p className={`container ${isScrolled ? 'scrolledKiri' : ''}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores similique at delectus, libero quibusdam earum eius vero minus! Exercitationem nemo illo facilis eveniet similique veniam quod quia, architecto excepturi!
                        </p>
                    </div>
                    <div>
                        <p className={`container ${isScrolled ? 'scrolledKanan' : ''}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores similique at delectus, libero quibusdam earum eius vero minus! Exercitationem nemo illo facilis eveniet similique veniam quod quia, architecto excepturi!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Anim;