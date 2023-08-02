import { motion } from "framer-motion";
import { useState } from "react";

function InputForm({title, placeholder, name, type}) {
  return (
    <div className="form-control w-full mb-2">
      <label className="label">
        <span className="label-text text-lg mb-1">{title}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="input w-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"
      />
    </div>
  )
}

export default function Contact() {

  const [successMessage, setSuccessMessage] = useState('');

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
      setName(event.target.value);
  };


  const handlePhoneChange = (event) => {
      setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
      setMessage(event.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault()

    const data = {
      name, email, phone, message 
    }
    console.log(data)
    fetch(`${import.meta.env.VITE_APP_DOMAIN}/inbox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccessMessage('Pesan terkirim')
        setEmail('')
        setName('')
        setPhone('')
        setMessage('')
        // console.log('Data berhasil disimpan:', data);
      })
      .catch((error) => {
        // console.error('Terjadi kesalahan:', error);
        alert('fail')
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
  };

  return (
    <motion.section
      id="contact"
      className="h-[100vh] flex justify-center items-center pt-20"
    >
      <div className="contact-wrapper px-20 mx-auto montserrat w-full animate_animated animate__fadeOutUp">
        <h1 className="text-4xl font-bold text-gray-500 uppercase mb-4">
          Contact Us
        </h1>
        
        {successMessage !== "" && 
          <div className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{successMessage}</span>
          </div>
        }
          
        <form action="" onSubmit={handleSubmit} method="post" className="grid grid-cols-2 gap-3 sm:gap-1 w-full">
          <div className="left-column p-4">
            {/* <InputForm /> */}
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text text-lg mb-1">Email</span>
              </label>
              <input
                title="Email" placeholder="johndoe@gmail.com" value={email} type="email" onChange={handleEmailChange}
                className="input w-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"
              />
            </div>
            
            <div>
              <label className="label">
                <span className="label-text text-lg mb-1">Nama</span>
              </label>
              <input 
                title="Name" placeholder="John doe" value={name} type="text" onChange={handleNameChange}
                className="input w-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"            
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg mb-1">Phone Number</span>
              </label>
              <input 
                title="Phone Number" placeholder="+62 8xx" value={phone} type="text" onChange={handlePhoneChange}
                className="input w-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"
              />
            </div> 
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg mb-1">Message</span>
              </label>
              <textarea
                onChange={handleMessageChange} className="textarea w-full h-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"
                placeholder="Hi, Makerindo can you help to..."
                rows={5}
                value={message}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-block text-center rounded-none border-black border-1 hover:border-black hover:bg-transparent bg-transparent col-span-2">SEND</button>
                                  
          </div>
          <div className="right-column p-4">
            {/* <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg mb-1">Message</span>
              </label>
              <textarea
                onChange={handleMessageChange} className="textarea w-full h-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"
                placeholder="Hi, Makerindo can you help to..."
                rows={9}
                value={message}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-block text-center rounded-none border-black border-1 hover:border-black hover:bg-transparent bg-transparent col-span-2">SEND</button> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3513358379514!2d107.65594292381124!3d-6.967814368222427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9465bf21013%3A0x52be50500715e36c!2sPT.%20Makerindo%20Prima%20Solusi!5e0!3m2!1sid!2sid!4v1690968191636!5m2!1sid!2sid" width="600" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
          {/* <button type="submit" className="btn btn-block text-center rounded-none border-black border-1 hover:border-black hover:bg-transparent bg-transparent col-span-2">SEND</button> */}
        </form>
      </div>
    </motion.section>
  );
}
