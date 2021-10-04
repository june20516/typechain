class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}

const dratini = new Human('Dratini', 27, 'female');

const moko: Human = {
    name: 'Bran',
    age: 33,
    gender: 'male'
};

const sayHi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(moko));
console.log(sayHi(dratini));
