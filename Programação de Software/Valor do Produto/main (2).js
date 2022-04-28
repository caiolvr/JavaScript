var codigo;
var valor;
var valor_aumento;
var novo_valor;

codigo = Number(prompt("Por favor, informe o código do produto desejado.\nProdutos: 1, 3, 4 ou 8."));
valor = Number(prompt("Agora informe o valor deste produto."));

if(isNaN(codigo))
{
	alert("O código do produto desejado não está no formato correto. Por favor, recarregue a página e tente novamente.");
}
else if(isNaN(valor))
{
	alert("O código do produto desejado não está no formato correto. Por favor, recarregue a página e tente novamente.");
}
else
{
	switch(codigo)
	{
		case 1:
			valor_aumento = valor * 0.15;
			novo_valor = financial(valor + valor_aumento);
			alert("Com um aumento de 15%, o novo preço do produto é de R$ " + novo_valor);
			break;
		case 3:
			valor_aumento = valor * 0.20;
			novo_valor = financial(valor + valor_aumento);
			alert("Com um aumento de 20%, o novo preço do produto é de R$ " + novo_valor);
			break;
		case 4:
			valor_aumento = valor * 0.35;
			novo_valor = financial(valor + valor_aumento);
			alert("Com um aumento de 35%, o novo preço do produto é de R$ " + novo_valor);
			break;
		case 8:
			valor_aumento = valor * 0.40;
			novo_valor = financial(valor + valor_aumento);
			alert("Com um aumento de 40%, o novo preço do produto é de R$ " + novo_valor);
			break;
		default:
			alert("O código do produto informado não é válido. Por favor, recarregue a página e tente novamente.");
	}
}

function financial(x)
{
	return Number.parseFloat(x).toFixed(2);
}
