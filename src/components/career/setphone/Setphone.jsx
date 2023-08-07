import { useState } from "react";

const Setphone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const handleChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hapus semua karakter non-digit dari nomor telepon
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

        // Validasi nomor telepon
        if (cleanedPhoneNumber.length !== 10) {
            setPhoneNumberError('Nomor telepon harus terdiri dari 10 angka.');
        } else {
            // Lakukan aksi lain jika nomor telepon valid
            console.log('Nomor telepon valid:', cleanedPhoneNumber);
        }
    };
    return (
        <div>
            <h1>Validasi Nomor Telepon</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Nomor Telepon:</label>
                <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                />
                {phoneNumberError && <p style={{ color: 'red' }}>{phoneNumberError}</p>}
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Setphone;