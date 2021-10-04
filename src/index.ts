const sayHi = (name: string, age: number, gender: string): string => {
    let hi = `hello ${name}, you are ${age}`;
    if (gender) hi += `, you are a ${gender}`
    
    return hi;
}

console.log(sayHi('bran', 33, 'mail'));

export { };