import React, { useState } from 'react';

function WhatsAppForm() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendWhatsAppMessage = () => {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <label htmlFor="phone">Nomor WhatsApp:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Contoh: +628123456789"
      />
      <br />
      <label htmlFor="message">Pesan:</label>
      <textarea
        id="message"
        value={message}
        onChange={handleMessageChange}
        rows="4"
        cols="50"
        placeholder="Isi pesan Anda di sini"
      />
      <br />
      <button onClick={sendWhatsAppMessage}>Kirim Pesan WhatsApp</button>
    </div>
  );
}


export default WhatsAppForm;
