import imgWebdev from '../assets/img/hiring/web-developer.png';
import imgProject from '../assets/img/hiring/project-manager.png';
import imgUi from '../assets/img/hiring/ui-ux.png';
import { useState } from 'react';

const hiringList = [
  {
    id: '1',
    image: imgWebdev,
    title: "Web Developer"
  },
  {
    id: '2',
    image: imgProject,
    title: "Project Manager"
  },
  {
    id: '3',
    image: imgUi,
    title: "UI/UX Designer"
  },
];

export default function Hiring() {
  const [currentHiring, setCurrentHiring] = useState(hiringList[0]);
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  function HiringCard({ id, img, title }) {
    return (
      <>
        <div className="card w-full">
          <figure className="p-1">
            <img src={img} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-start px-0 py-3">
            <h2 className="card-title font-bold text-xl montserrat">{title}</h2>
            <div className="card-actions text-left">
              <button className="btn btn-ghost capitalize font-light text-md p-0 hover:bg-transparent montserrat">Apply Now</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <section id="hiring" className="h-[100vh] flex flex-col justify-center items-center">
      <div className="hiring-title mb-3">
        <h4 className="font-bold text-4xl montserrat mb-0">
          Want to Make a Difference in the Tech World?
        </h4>
        <h4 className="font-light text-4xl montserrat">Apply to Join Makerindo Tech Today</h4>
      </div>
      <div className="hiring-content lg:px-32">
        <div className="grid grid-cols-3 gap-0">
          {hiringList.map((item) => 
            <HiringCard key={item.id} id={item.id} img={item.image} title={item.title}/>
          )}
        </div>
      </div>
    </section>
  )
}