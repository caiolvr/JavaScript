var menu;

menu = prompt('Bem-vindo(a) ao programa. Por favor, selecione uma opção:\n\n'
            + 'a. Calcular a média de X e Y\n'
            + 'b. Calcular a área de um trapézio\n'
            + 'c. Gerar uma vogal aleatória\n'
            + 'd. Somar todos os valores de um vetor qualquer\n'
            + 's. Sair do programa\n');

// ---------------------------------------------------------------------------------------------------------------------

switch (menu) {
    case 'a': {
        var x, y;
        var media;

        x = Number(window.prompt('Digite um valor para X.'));
        y = Number(window.prompt('Digite um valor para Y.'));

        if (isNaN(x) || isNaN(y) || x < 0 || y < 0) { 
            window.alert('Você inseriu um valor inválido.');
        }
        else {
            media = calculo_media(x, y);
            window.alert(`A sua média equivale a ${media}.`);
        }
        break;
    }
    
    case 'b': {
        var base_maior, base_menor;
        var altura;
        var area;

        base_maior = Number(window.prompt('Digite um valor para a base maior.'));
        base_menor = Number(window.prompt('Digite um valor para a base menor.'));
        altura = Number(window.prompt('Digite um valor para a altura.'));

        if (isNaN(base_maior) || isNaN(base_menor) || isNaN(altura) || base_maior < 0 || base_menor < 0 || altura < 0) {
            window.alert('Você inseriu um valor inválido.');
        }
        else {
            area = calculo_area(base_maior, base_menor, altura);
            window.alert(`A sua área equivale a ${area}.`);
        }
        break;
    }

    case 'c': {
        alert(`Sorteio de Vogais!\nA vogal sorteada foi ${sortearVogal()}.`);
        break;
    }

    case 'd': {
        let v = [];
        let cont = true;

        while (cont == true) {
            let user = Number(prompt('Digite um número para inserir no seu vetor:'));

            while (isNaN(user) == true) {
                alert('Número inválido!');
                user = Number(prompt('Digite um número para inserir no seu vetor:'));
            }
            v.push(user);
            cont = confirm(`Vetor: [${v}]\nVocê quer adicionar mais valores ao seu vetor?`);
        }
        alert(`O seu vetor é [${v}]\nA soma de todos os valores do seu vetor é ${somarVetor(v)}.`);
        break;
    }

    case 's': {
        alert('Você saiu do programa. Para iniciar novamente, recarregue a página.');
        break;
    }

    default: {
        alert('Você selecionou uma opção inválida. Por favor, recarregue a página e tente novamente.');
        break;
    }
}

// ---------------------------------------------------------------------------------------------------------------------

// Opção A
function calculo_media(x, y) {
    var calculo = (x + y) /2;
    return calculo;
}

// Opção B
function calculo_area(base_maior, base_menor, altura) {
    var calculo = ((base_maior + base_menor) * altura) /2;
    return calculo;
}

// Opção C
function sortearVogal() {
    let vogais = "AEIOU";
    let sorteio = parseInt(Math.random() * 5);

    return vogais[sorteio];
}

// Opção D
function somarVetor(vetor) {
    let sum = 0;
    for (let i of vetor) {
        sum += i;
    }

    return sum;
}
