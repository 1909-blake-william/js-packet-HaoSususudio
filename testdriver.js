let a = {
    id: 1,
    name: 'Zord',
    hp: 500,
    level: 5,
    type: {
        id: 5,
        name: 'Steel'
    },
    trainer: {
        id: 1,
        name: 'tommy'
    }
}
function traverseObject(someObj) {
    console.log(someObj);
}
traverseObject(a);