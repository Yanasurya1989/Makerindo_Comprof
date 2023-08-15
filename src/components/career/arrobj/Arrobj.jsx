
const Arrobj = () => {
    const people = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Mike', age: 22 },
        { name: 'Emily', age: 28 },
    ];

    const filteredPeople = people.filter(person => person.age > 25);

    console.log(filteredPeople);

}

export default Arrobj;