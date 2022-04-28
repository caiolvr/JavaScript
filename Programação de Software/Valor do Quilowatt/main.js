var salario;
var quilowatts;

var valor_quilowatt;
var valor_residencia;
var valor_desconto;
var novo_valor;

salario = Number(prompt("Por favor, informe o valor do salário mínimo.\nNão coloque vírgula no valor informado. Por exemplo, coloque 1039.00 ao invés de 1.039,00."));
quilowatts = Number(prompt("Agora informe a quantidade de quilowatts gasto na residência.\nNovamente, não coloque vírgula no valor informado. Por exemplo, coloque 152.2 ao invés de 152,2."));

valor_quilowatt = salario * 0.02;
valor_residencia = quilowatts * valor_quilowatt;
valor_desconto = valor_residencia * 0.15;
novo_valor = valor_residencia - valor_desconto;

if(isNaN(salario))
{
	alert("O valor do salário mínimo não está no formato correto. Por favor, recarregue a página e tente novamente.");
}
else if(isNaN(quilowatts))
{
	alert("A quantidade de quilowatts gasto na residência não está no formato correto. Por favor, recarregue a página e tente novamente.");
}
else
{
	alert("Valor Quilowatt: R$" + valor_quilowatt + "\nValor a ser pago: R$" + valor_residencia + "\nValor a ser pago com um desconto de 15%: R$" + novo_valor);
}
