var menu;
// Área do Retângulo
// A = b.h
var area_retangulo;
var base_retangulo;
var altura_retangulo;
// Área do Triângulo
// a = b.h / 2
var area_triangulo;
var base_triangulo;
var altura_triangulo;
// Área da Circunferência
// A = π·r²
var area_circunferencia;
var raio_circunferencia;
// Área do Trapézio
// A = (B + b).h / 2
var area_trapezio;
var b1_trapezio;
var b2_trapezio;
var altura_trapezio;
// Bhaskara
var a_bhaskara;
var b_bhaskara;
var c_bhaskara;
var delta_bhaskara;
var x1_bhaskara;
var x2_bhaskara;

menu = Number(prompt("Bem-vindo(a) à calculadora. Por favor, escolha uma opção:\n\n1. Área do Retângulo\n2. Área do Triângulo\n3. Área da Circunferência\n4. Área do Trapézio\n5. Bhaskara"));

if(isNaN(menu) || menu < 1 || menu > 5)
{
	alert("A opção informada não está formato correto. Por favor, recarregue a página e tente novamente.");
}
else if(menu == 1) // Área do Retângulo
{
	base_retangulo = Number(prompt("Para calcular a área do retângulo informe o valor da sua base."));
	altura_retangulo = Number(prompt("Agora informe o valor da sua altura."));
	
	if(isNaN(base_retangulo) || isNaN(altura_retangulo))
	{
		alert("Os valores informados não estão no formato correto. Por favor, recarregue a página e tente novamente.");
	}
	else
	{
		area_retangulo = base_retangulo * altura_retangulo;
		alert("A área do retângulo é igual a " + area_retangulo + ".");
	}
}
else if(menu == 2) // Área do Triângulo
{
	base_triangulo = Number(prompt("Para calcular a área do triângulo informe o valor da sua base."));
	altura_triangulo = Number(prompt("Agora informe o valor da sua altura."));

	if(isNaN(base_triangulo) || isNaN(altura_triangulo))
	{
		alert("Os valores informados não estão no formato correto. Por favor, recarregue a página e tente novamente.");
	}
	else
	{
		area_triangulo = (base_triangulo * altura_triangulo) / 2;
		alert("A área do triângulo é igual a " + area_triangulo + ".");
	}
}
else if(menu == 3) // Área da Circunferência
{
	raio_circunferencia = Number(prompt("Para calcular a área da circunferência informe o valor do seu raio."));

	if(isNaN(raio_circunferencia))
	{
		alert("O valor informado não está no formato correto. Por favor, recarregue a página e tente novamente.");
	}
	else
	{
		area_circunferencia = Math.PI * (raio_circunferencia * 2);
		alert("A área da circunferência é igual a " + area_circunferencia + ".");
	}
}
else if(menu == 4) // Área do Trapézio
{
	b1_trapezio = Number(prompt("Para calcular a área do trapézio informe o valor da base maior."));
	b2_trapezio = Number(prompt("Agora informe o valor da base menor."));
	altura_trapezio = Number(prompt("Por fim, informe o valor da sua altura."));

	if(isNaN(b1_trapezio) || isNaN(b2_trapezio) || isNaN(altura_trapezio))
	{
		alert("Os valores informados não estão no formato correto. Por favor, recarregue a página e tente novamente.");
	}
	else
	{
		area_trapezio = ((b1_trapezio + b2_trapezio) * altura_trapezio) / 2;
		alert("A área do trapézio é igual a " + area_trapezio + ".");
	}
}
else if(menu == 5) // Bhaskara
{
	a_bhaskara = Number(prompt("Para resolver uma equação do segundo grau informe o valor de A."));
	b_bhaskara = Number(prompt("Agora informe o valor de B."));
	c_bhaskara = Number(prompt("Por fim, informe o valor de C."));
	
	if(isNaN(a_bhaskara) || isNaN(b_bhaskara) || isNaN(c_bhaskara))
	{
		alert("Os valores informados não estão no formato correto. Por favor, recarregue a página e tente novamente.");
	}
	else
	{
		delta_bhaskara = Math.pow(b_bhaskara, 2) - 4*a_bhaskara*c_bhaskara;
		x1_bhaskara = (-b_bhaskara + Math.sqrt(delta_bhaskara)) / (2*a_bhaskara);
		x2_bhaskara = (-b_bhaskara - Math.sqrt(delta_bhaskara)) / (2*a_bhaskara);	

		alert("Resultado:\nx': " + x1_bhaskara + "\nx'': " + x2_bhaskara);
	}
}
