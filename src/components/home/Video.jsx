import Youtube from "react-youtube";

const aboutVideoOpts = {
    playerVars: {
      autoplay: 1,
    },
  };
  
const Video = () => {
    return (
        <div className="about-video flex flex-col justify-center items-center h-screen md:my-6">
            <h1 className="uppercase text-center font-bold text-4xl text-gradient-primary mb-1 md:hidden">
              About Us
            </h1>
            
            <Youtube
              videoId="PPg4-GngWuo"
              opts={aboutVideoOpts}
              iframeClassName="w-[100vh] lg:h-[90vh] lg:w-[80vw]"
            />
        </div>
    );
}

export default Video;