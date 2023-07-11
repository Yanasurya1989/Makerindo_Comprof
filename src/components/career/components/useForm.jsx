import { useEffect, useState } from "react";

const useForm = ()=>{
    const [inputs, setInputs] = useState({
        nama: '',
        usia: '',
        pendidikan: '',
        telp: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) =>{
        let objectProperty = event.target.name;
        let value = event.target.value 
        setInputs({
            ...inputs,
            [objectProperty]: value
        })
    }

    const handleErrors = (values)=>{
        let errors = {}
        if(!values.nama) errors.nama = "Nama tidak boleh kosong!"
        if(!values.usia) errors.usia = "Usia tidak boleh kosong!"
        if(!values.pendidikan) errors.pendidikan = "Pendidikan tidak boleh kosong!"
        if(!values.telp) errors.telp = "Nomer telpon tidak boleh kosong!"
        setErrors(errors)
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        handleErrors(inputs)
    }

    return {
        inputs,
        handleChange,
        handleSubmit,
        errors
    }
}

export default useForm