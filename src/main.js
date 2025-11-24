class Aluno {
    static array = [];

    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;

        Aluno.array.push(this);
    }
}

const mateus = new Aluno('Mateus', 10);
const joao = new Aluno('João', 7);
const ana = new Aluno('Ana', 6);
const andre = new Aluno('André', 4);
const pedro = new Aluno('Pedro', 5);
const maria = new Aluno('Maria', 8);

function notaAzul() {
    return Aluno.array.filter(item => item.nota >= 6);
}

console.log(notaAzul());