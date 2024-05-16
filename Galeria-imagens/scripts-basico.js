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


    // ------------------ / --------------------

    //funções são blocos de código que podem ser chamados e
    // reutilizados
    // Dentro dos parenteses da função vai os parâmetros

     
    function primeiraFuncao(parametro, segundoParamentro) {
         return parametro + ' ,' + segundoParamentro; //variáveis concatenadas(+)
                
    }

    const parametro = "Essa é uma função com parâmetro";
    const segundoParamentro = "agora com dois parâmetros";


    // console.log(primeiraFuncao(parametro, segundoParamentro ))

    // ----------------- / -------------------

    //arrays em javascript são estruturas de dados que permitem
    //armazenar uma coleção ordenada de elementos.

    let priemiroArray = [ 'Lucas', 'João', 'Paulo', 'Marcos'];

    console.log(priemiroArray[3]); // Número 2 para percorrer o array

    // ----------------------/------------------

    // Os obejtos são coleções NÃO ORDENADAS de
    //pares chave-valor, onde cada valor é associado
    //a uma chave única

    let pessoa = {
        nome: "Maria", 
        idade: "22",
        profissao: "Programadora",

    }
        console.log(pessoa["idade"])






});

