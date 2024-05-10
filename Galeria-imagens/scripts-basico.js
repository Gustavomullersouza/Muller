//O vento DOM é acionado quando o HTML foi completamente carregado

document.addEventListener('DOMContentLoaded', function () {



    //Tipos de dados
    //String: Sequencia de caracter
    //Number: Números inteiros ou pontos flutuantes (10.4)
    //booLeon: Rtona dois valores, true ou false
    //object: estrutura de dados que pode armazenar multiplos valores
    //NULL: quanto está vazio;
    //array: objeto especial ordenado
    //function: bloco de codigo reutilizável

    //É usado para declarar uma variavel cujo valor é permanente
    const test = 50;

    //LET é usado para declarar variáveis que nao podem ser
    //retribuidos
    let C = 0;
    C = 10;
    console.log(C)

    const notaMedia = 6;

    if(notaMedia >= 6){ 
       // alert("Aluno passou")

    }
    else if(notaMedia >= 4 && notaMedia < 6){
        //alert("aluno quase passou");

    }

    else{
        //alert("aluno reprovou!");

    }

    // ------------OPERADORES--------------

    // = sinal de atribuição
    // == sianl de comparação
    // === verifica se os dois são igual e tem o mesmo tipo de dados
    // != se é diferente
    // !== se é estritamente diferente

    const num = "6";

    if (num === 6) {
        alert("é igual");

    }
    else{
        alert("O tipo de dado é diferente");
    }

    const professor = "joão";
    if (professor == "lucas") {
        console.log("sim é lucas")
    } else {
        console.log("não é lucas")
    
    }



});

