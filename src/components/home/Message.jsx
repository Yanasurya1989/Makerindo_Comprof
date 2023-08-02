import React, { useState } from 'react';

const DataForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

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

  const handleSubmit = () => {

    const data = {
      name, email, phone, message 
    }
    console.log(data)
    fetch('http://192.168.1.20:5000/inbox', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    })
      .then((response) => response.json())
      .then((data) => {
        // Lakukan sesuatu setelah berhasil menyimpan data
        console.log('Data berhasil disimpan:', data);
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  };

  return (
      <form>
        <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
            Phone:
            <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <br />
        <label>
            Message:
            <input type="text" value={message} onChange={handleMessageChange} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
            Submit
        </button>
    </form>
  );
};


export default DataForm;
