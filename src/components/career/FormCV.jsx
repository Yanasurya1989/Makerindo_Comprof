import axios from "axios";
import { progress } from "framer-motion";
import { useState } from "react";

function FormCV(){

    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState({started: false, pc: 0});
    const [msg, setMsg] = useState(null);

    function handleUpload(){
        if(!file){
            setMsg("No file selected");
            return;
        }

        const fd = new FormData();
        fd.append('file', file);

        setMsg("Uploading...");
        setProgress(prevState => {
          return{...prevState, started: true}  
        })
        axios.post('https://64afa84dc60b8f941af45a55.mockapi.io/:endpoint', fd, {
            onUploadProgress: (ProgressEvent) => {setProgress(prevState => {
                return {...prevState, pc: ProgressEvent.progress*100}
            }) },
            headers: {
                "Custom-Header": "value",
            }
        })
        .then(res => {
            setMsg("Upload successful");
            console.log(res.data);
        })
        .catch(err => {
            setMsg("Upload failed");
            console.error(err)
        });
    }
    return (
        <div className="FormCV">
            <h1>Upload CV</h1>

            <input onChange={(e) => {setFile(e.target.files[0]) } } type="file" />

            <button onClick={handleUpload}>Upload</button>

            { progress.started && <progress max="100" value={progress.pc}></progress> }
            
            { msg && <span>{msg}</span> }
        </div>
    );
}

export default FormCV;