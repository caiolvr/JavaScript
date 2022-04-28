var codigoProduto;
var valorProduto;
var valorAumento;
var valorFinal;

codigoProduto = Number(prompt("Por favor, informe o código do produto."));
valorProduto = Number(prompt("Agora, informe o valor desse produto."));

switch(codigoProduto)
{
    case 1:
    {
        valorAumento = (valorProduto * 0.15);
        valorFinal = (valorProduto + valorAumento);
        alert("Novo valor do produto: R$ " + valorFinal + ".")
        break;
    }
    case 3:
    {
        valorAumento = (valorProduto * 0.20);
        valorFinal = (valorProduto + valorAumento);
        alert("Novo valor do produto: R$ " + valorFinal + ".")
        break;
    }
    case 4:
    {
        valorAumento = (valorProduto * 0.35);
        valorFinal = (valorProduto + valorAumento);
        alert("Novo valor do produto: R$ " + valorFinal + ".")
        break;
    }
    case 8:
    {
        valorAumento = (valorProduto * 0.40);
        valorFinal = (valorProduto + valorAumento);
        alert("Novo valor do produto: R$ " + valorFinal + ".")

    }
    default:
    {
        alert("Produto não encontrado.")
    }
}