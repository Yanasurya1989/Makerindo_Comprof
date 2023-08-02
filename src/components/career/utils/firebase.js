import {
    ref,
    uploadBytesResumable,
    getDownloadURL, 
    getStorage
} from "firebase/storage";
import { collection, doc, getDocs, addDoc} from "firebase/firestore";
import { getFirestore, orderBy, query } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbNhkoxr4wQ4Y6SI0gIcWjHmkYxKmZZdI",
  authDomain: "makerindo-comprof.firebaseapp.com",
  projectId: "makerindo-comprof",
  storageBucket: "makerindo-comprof.appspot.com",
  messagingSenderId: "518772639615",
  appId: "1:518772639615:web:1d6d1e4bb223dd17e8bc4a",
  measurementId: "G-X56BNNBS3J"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default firebase;

const db = getFirestore(firebase)

const storage = getStorage(firebase)

const insertCV = async(payload, file) => {
    
    try {
        const storageRef = ref(storage, `/files/${file.name}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        const fileUrl = await getDownloadURL(uploadTask.snapshot.ref)
 
        // uploadTask.on(
        //     "state_changed",
        //     (snapshot) => {
        //         const percent = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
 
        //         // update progress
        //         setPercent(percent);
        //     },
        //     (err) => console.log(err),
        //     () => {
        //         // download url
        //         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        //             console.log(url);
        //         });
        //     }
        // );

        const docRef = await addDoc(collection(db, "apply"), {
          ...payload, 
            cvUrl:fileUrl
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const getCV = async(payload) => {
    
    try {
        let data 
        await getDocs(collection(db, "apply"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                // setTodos(newData);                
                // console.log(todos, newData);
                data = newData

            })

        // console.log("Document written with ID: ", docRef.id);
        return data
      } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const DeleteComponent = async(payload) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (payload) => {
      const db = firebase.firestore();
      const snapshot = await db.collection('apply').get();
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    };

    fetchData();
  }, []);

  
}

const handleDelete = async (id) => {
  const db = firebase.firestore();
  await db.collection('apply').doc(id).delete();
  const newData = data.filter((item) => item.id !== id);
  setData(newData);
};


// export default insertCV;
export{
    insertCV,
    getCV,
    DeleteComponent,
    handleDelete,
}