for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} x 5 = ${i * 5}`);
    }
}

console.log("=====================")
let x = 1
while (x <= 10) {
    console.log(`${x} x 2 = ${x * 2}`);
    x++;
}

console.log("=====================")
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
valores.forEach(value => {
    console.log(`${value} x 3 = ${value * 3}`);
});

console.log("=====================")
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultado = valores2.map(value => {
    return value * 4
});
console.log(resultado);