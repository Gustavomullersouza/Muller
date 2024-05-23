
document.addEventListener('DOMContentLoaded', function () {

        const baseImagens = {
            todas: ['imagem.png', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
            natureza: ['naturaza.jpg'],
            cidade: ['cidade.jpg'],
            animais: ['animais.jpg'],
            
        }
        
        function carregaImagens(){
            //Selecionar elementos HTML com basse em um seletor
            const galeria = document.querySelector("#GALERIA-IMAGENS");

            const imagens = baseImagens["todas"];

            imagens.forEach(img => {
                console.log(img);
                galeria.innerHTML = '<div> <img src="imagens/'+img+' " /> </div>';

              })

        }


    // Evento de clique
    document.body.addEventListener('click', function(event) {
            // acessa a lista de classe de onde clicou  e
            // procura pela classe botao-categoria
        if(event.target.classList.contains('botao-categoria')) {   
        
            
        }
    
    })

    carregaImagens();












} ) 