const name = "bran",
    age = 33,
    gender = "male";

const sayHi = (name, age, gender?) => {
    let hi = `hello ${name}, you are ${age}`;
    if (gender) hi += `, you are a ${gender}`
    console.log(hi);
}

sayHi(name, age, gender);

export {};