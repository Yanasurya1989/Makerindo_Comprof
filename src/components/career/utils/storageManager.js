const career = [
    {
        id : 1,
        name: 'nama',
        usia: 'usia',
        pendidikan: 'pendidikan',
        telp: 'telp',
        taemsetem: 'taemsetem'
    }
]

const storageKey = 'career';

const setItem = (value) => {
    const valueToString = JSON.stringify(value);

    localStorage.setItem(storageKey, valueToString);
}

const getItem = ()=>{
    const data = localStorage.getItem(storageKey);

    if(data){
        return JSON.parse(data)
    }
    return null;
}

const storageManager = {
    set: setItem,
    get: getItem,
}

export default storageManager;