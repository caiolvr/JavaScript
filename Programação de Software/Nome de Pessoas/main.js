var nome = [];
var consulta;

nome[0] = prompt("Digite o nome da primeira pessoa.");
nome[1] = prompt("Digite o nome da segunda pessoa.");
nome[2] = prompt("Digite o nome da terceira pessoa.");
nome[3] = prompt("Digite o nome da quarta pessoa.");
nome[4] = prompt("Digite o nome da quinta pessoa.");
console.table(nome);
consulta = prompt("Para verificar se a pessoa está ou não cadastrado, por favor digite o nome abaixo.");

if(nome == consulta)
{
	alert("O nome informado está cadastrado.");
}
else
{
	alert("O nome informado não está cadastrado.");
}
