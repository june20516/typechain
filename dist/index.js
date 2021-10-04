"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayHi = (name, age, gender) => {
    let hi = `hello ${name}, you are ${age}`;
    if (gender)
        hi += `, you are a ${gender}`;
    return hi;
};
console.log(sayHi('bran', 33, 'mail'));
//# sourceMappingURL=index.js.map