var pergunta1;
var pergunta2;
var pergunta3;
var pergunta4;
var pergunta5;
var resultado;

alert("Você é suspeito de um crime. Responda as perguntas com '0' para não e '1' para sim.");

pergunta1 = Number(prompt("Você telefonou para a vítima?\n0 = Não | 1 = Sim"));
pergunta2 = Number(prompt("Você esteve no local do crime?\n0 = Não | 1 = Sim"));
pergunta3 = Number(prompt("Você mora perto da vítima?\n0 = Não | 1 = Sim"));
pergunta4 = Number(prompt("Você devia dinheiro ou algum favor para a vítima?\n0 = Não | 1 = Sim"));
pergunta5 = Number(prompt("Você já trabalhou para a vítima?\n0 = Não | 1 = Sim"));
resultado = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5;

if(pergunta1 < 0 || pergunta1 > 1 || pergunta2 < 0 || pergunta2 > 1 || pergunta3 < 0 || pergunta3 > 1 || pergunta4 < 0 || pergunta4 > 1 || pergunta5 < 0 || pergunta5 > 1 || isNaN(pergunta1) || isNaN(pergunta2) || isNaN(pergunta3) || isNaN(pergunta4) || isNaN(pergunta5))
{
	alert("Você respondeu alguma pergunta em um formato incorreto. Por favor, recarregue a página e tente novamente.");
}
else if(resultado == 0)
{
	alert("Você foi classificado como 'Inocente' do crime.");
}
else if(resultado == 2)
{
	alert("Você foi classificado como 'Suspeito(a)' do crime.");
}
else if(resultado == 3 || resultado == 4)
{
	alert("Você foi classificado como 'Cúmplice' do crime.");
}
else if(resultado == 5)
{
	alert("Você foi classificado como 'Assassino(a)'.");
}
