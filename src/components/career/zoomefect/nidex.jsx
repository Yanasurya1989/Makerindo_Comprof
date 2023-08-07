import imgApa from '../../assets/img/gallery/web-programming.png'
import './zoom.css'

const nidex = () => {
    return (
        <>
            <h1>Membuat Efek Zoom Dengan CSS3 | www.malasngoding.com</h1>
 
            <p>
                <a href="https://www.malasngoding.com/zoom-effect-image-css/">Tutorial Efek Hover Zoom CSS3</a>
            </p>

            <div className="wrapper">
                <div className="zoom-effect">
                    <div className="kotak">
                        <img src={imgApa} style={{height: "500px"}}/>
                    </div>
                </div>		
            </div>
        </>
    );
}

export default nidex;