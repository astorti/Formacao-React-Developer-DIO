const idade = 25;

if (idade > 18) {
    console.log("Maior que 18");
} else {
    console.log("Menor que 18");
}

const nota = 7;
if (nota <5) {
    console.log("Abaixo da média");
} else if (nota >= 5 && nota < 7) {
    console.log("Na média");
} else {
    console.log("Acima da média");
}

switch (nota) {
    case nota < 5:
        console.log("Abaixo da média");
        break;
    case nota >= 5 && nota < 7:
        console.log("Na média");
        break;
    default:
        console.log("Acima da média")
}

nota > 5 ? console.log("aprovado") : console.log("reprovado");