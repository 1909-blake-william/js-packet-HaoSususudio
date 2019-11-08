function getPerson(name, age) {
    let person = {
        personName: name,
        personAge: age
    };
    return person;
}
let johnJr = getPerson("John", 30);
console.log(johnJr);
