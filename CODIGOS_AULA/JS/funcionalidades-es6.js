const alunos = [
    {
        nome: 'João',
        idade: 25
    },
    {
        nome: 'José',
        idade: 22
    },
    {
        nome: 'Pedro',
        idade: 17
    },
]

const alunosMaioresDeIdade = alunos.filter((aluno) => aluno.idade >= 18);
console.log(alunosMaioresDeIdade)
console.table(alunosMaioresDeIdade)

const nomes = alunos.map((alunos) => alunos.nome);
console.table(nomes)

const alunoPedro = alunos.find((aluno) => aluno.nome === "Pedro");
console.table(alunoPedro)

const alunoPedroIndex = alunos.findIndex((aluno) => aluno.nome === "Pedro");
console.table(alunoPedroIndex)

const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade
}, 0);
console.log(`Soma idades: ${idades}`)

const maiorDeIdade = alunos.some(alunos => alunos.idade > 18);
console.log(maiorDeIdade)

const acimaDeNoventa = alunos.every(alunos => alunos.idade > 90);
console.log(acimaDeNoventa)