import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import imgDesktop from '../assets/img/gallery/desktop-programming.png';
import imgIot from '../assets/img/gallery/iot.png';
import imgMobile from '../assets/img/gallery/mobile-programming.png';
import imgEmbedded from '../assets/img/gallery/embedded-system.png';
import imgMachine from '../assets/img/gallery/machine-learning.png';
import imgProduct from '../assets/img/gallery/product-design.png';
import imgUi from '../assets/img/gallery/ui-ux.png';
import imgWeb from '../assets/img/gallery/web-programming.png';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function GalleryLg() {
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
      {
          id: 'qwb-programming',
          size: 'auto',
          src: imgWeb,
          thumb: imgWeb,
      },
      {
          id: 'mobile-programming',
          size: 'auto',
          src: imgMobile,
          thumb: imgMobile,
      },
      {
          id: 'desktopp-programming',
          size: 'auto',
          src: imgDesktop,
          thumb: imgDesktop,
      },
      {
          id: 'iot',
          size: 'auto',
          src: imgIot,
          thumb: imgIot,
      },
      {
          id: 'embedded-system',
          size: 'auto',
          src: imgEmbedded,
          thumb: imgEmbedded,
      },
      {
          id: 'machine-learning',
          size: 'auto',
          src: imgMachine,
          thumb: imgMachine,
      },
      {
          id: 'product-design',
          size: 'auto',
          src: imgProduct,
          thumb: imgProduct,
      },
      {
          id: 'ui-ux',
          size: 'auto',
          src: imgUi,
          thumb: imgUi,
      },
  ]);

  const onInit = useCallback((detail) => {
      if (detail) {
          lightGallery.current = detail.instance;
      }
  }, []);

  const getItems = useCallback(() => {
        // fetching start
  const [data, setData] = useState(null);

    useEffect(() => {
    // Penggunaan useEffect akan memastikan pemanggilan API hanya terjadi sekali saat komponen dimuat.
    axios.get(`${import.meta.env.VITE_APP_DOMAIN}/newsroom`)
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []); 
    // fetching end

    console.info(data)
    return items.map((item) => {
        return (
            <div
                key={item.id}
                data-lg-size={item.size}
                className="gallery-item"
                data-src={item.src}
            >
                <img className="img-responsive" src={item.thumb} />
            </div>
        );
    });
  }, [items]);

  useEffect(() => {
      lightGallery.current.refresh();
  }, [items]);

  return (
      <div className="w-full">
          <LightGallery
              plugins={[lgZoom]}
              elementClassNames="grid grid-flow-col grid-cols-2 grid-rows-4 gap-3 w-full"
              onInit={onInit}
          >
              {getItems()}
          </LightGallery>
      </div>
  );
}