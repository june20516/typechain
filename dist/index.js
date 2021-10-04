"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const dratini = new Human('Dratini', 27, 'female');
const moko = {
    name: 'Bran',
    age: 33,
    gender: 'male'
};
const sayHi = (person) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(moko));
console.log(sayHi(dratini));
//# sourceMappingURL=index.js.map