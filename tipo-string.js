const estudante = "Caroline";
const docente = "Ana";
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = "`Ju diz: nosso lema é 'estudar bastante!'";

console.log(cumprimento);
console.log(citacao);

console.log("A estudante chama " + estudante);
console.log(`A estudante chama ${estudante}!`); //template string

const senha = "SenhaSegura123" + estudante.toUpperCase();
console.log(senha);
