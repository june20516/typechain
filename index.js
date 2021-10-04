"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "bran", age = 33, gender = "male";
const sayHi = (name, age, gender) => {
    let hi = `hello ${name}, you are ${age}`;
    if (gender)
        hi += `, you are a ${gender}`;
    console.log(hi);
};
sayHi(name, age, gender);
//# sourceMappingURL=index.js.map