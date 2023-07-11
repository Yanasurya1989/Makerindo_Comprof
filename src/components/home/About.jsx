import Youtube from "react-youtube";

export default function About() {
  const aboutVideoOpts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const aboutDescription =
    "Makerindo adalah perusahaan IT yang fokus pada pembuatan dan pengembangan produk serta integrator sistem. Makerindo berdiri pada 6 Juni 2019 di Bandung. Kami memiliki kompetensi pada bidang Website, Mobile App, Dekstop, Embedded System dan Internet of Things (IoT). Kami memberikan layanan prima untuk semua segment customer dalam membuat produk sesuai spesifikasi dan kesepakatan bersama pada bidang embedded system, Website, Desktop, Mobile App, dan Internet of Things. Kami juga dapat menjadi mitra pelaksanaan seminar/workshop.";

    const isShow = false

  return (
    <section id="about">
      <div className="about-title flex justify-center items-center h-screen hidden md:flex">
        <h1 className="uppercase text-center font-bold lg:text-8xl text-gradient-primary">
          About Us
        </h1>
      </div>
      {
        isShow ?
          <div className="about-video flex flex-col justify-center items-center h-screen md:my-6">
            <h1 className="uppercase text-center font-bold text-4xl text-gradient-primary mb-1 md:hidden">
              About Us
            </h1>
            
            <Youtube
              videoId="PPg4-GngWuo"
              opts={aboutVideoOpts}
              iframeClassName="w-[100vh] lg:h-[90vh] lg:w-[80vw]"
            />
          </div>:null      
      }
        
      
      <div className="about-content flex flex-col justify-center items-center h-screen hidden md:flex">
        <h1 className="uppercase text-center font-bold lg:text-[6rem] text-gradient-primary mb-6">
          About Us
        </h1>
        <p className="w-[80vw] text-l text-justify">{aboutDescription}</p>
      </div>
      <div className="about-counter flex flex-col justify-center items-center h-[100vh] relative">
        <div className="about-counter-content">
          <h2 className="text-center text-4xl lg:text-left z-10 lg:absolute lg:-top-12 lg:-right-14 font-bold lg:text-[8rem] uppercase text-gradient-primary lg:opacity-40 mb-3 md:mt-12 ">About Us</h2>
          <p className="about-description z-20 text-center mb-12 text-md">
            {aboutDescription}
          </p>
          <h2 className="text-2xl font-bold uppercase mb-8">
            makerindo in number
          </h2>
          <div className="counter grid grid-cols-4 gap-4">
            <div className="counter-team text-center montserrat">
              <h1 className="text-2xl md:text-8xl font-bold">20+</h1>
              <p className="text-md md:text-lg">Team</p>
            </div>
            <div className="counter-project text-center montserrat">
              <h1 className="text-2xl md:text-8xl font-bold">40+</h1>
              <p className="text-md md:text-lg">projects in year</p>
            </div>
            <div className="counter-client text-center montserrat">
              <h1 className="text-2xl md:text-8xl font-bold">20+</h1>
              <p className="text-md md:text-lg">Client</p>
            </div>
            <div className="counter-partner text-center montserrat">
              <h1 className="text-2xl md:text-8xl font-bold">25+</h1>
              <p className="text-md md:text-lg">Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
