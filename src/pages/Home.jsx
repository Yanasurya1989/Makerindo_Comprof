import About from "../components/home/About";
import Video from "../components/home/Video";
import About2 from "../components/home/About2";
import About3 from "../components/home/About3";
import Hero from "../components/home/Hero";
import Socials from "../components/home/Socials";
import Gallery from "../components/home/Gallery";
import Products from "../components/home/Products";
import News from "../components/home/News";
import Hiring from "../components/home/Hiring";
import Contact from "../components/home/Contact";
import Hera from '../components/career/hero/Hero'
import './Home.css'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';

export default function Home() {
  return (
    <>
      <div id="fullpage" className="grid grid-cols-1">
        <div className="section active"><Hera /><div class="clearLeft"></div></div>
        
        <div className="section"><About/></div>
        <div className="section"><Gallery/></div>
        <div className="section"><Products/></div>
        <div className="section"><News/></div>
        <div className="section"><Hiring/></div>
        <div className="section"><Contact/></div>
      </div> 

      {/* <Fullpage>
          <FullpageNavigation/>
            <FullPageSections>
              <FullpageSection>
                <Hero tagline="Build Solution Without Exception"/>
                <Hero/>
                <Socials/>
              </FullpageSection>
              <FullpageSection>
                <About/>
              </FullpageSection>
              <FullpageSection>
                <Video/>
              </FullpageSection>
              <FullpageSection>
                <About2/>
              </FullpageSection>
              <FullpageSection>
                <About3/>
              </FullpageSection>
              <FullpageSection>
                <Gallery/>
              </FullpageSection>
              <FullpageSection>
                <Products/>
              </FullpageSection>
              <FullpageSection>
                <News/>
              </FullpageSection>
              <FullpageSection>
                <Hiring/>
              </FullpageSection>
              <FullpageSection>
                <Contact/>
              </FullpageSection>
            </FullPageSections>
      </Fullpage>     */}
    </>
  )
}