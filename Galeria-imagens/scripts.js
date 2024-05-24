
document.addEventListener('DOMContentLoaded', function () {

        const baseImagens = {
            todas: ['imagem.png', 'cidade.jpg', 'animais.jpg', 'natureza.jpg'],
            natureza: ['natureza.jpg'],
            cidade: ['cidade.jpg'],
            animais: ['animais.jpg'],
            
        }
        
        function carregaImagens(categoria){
            //Selecionar elementos HTML com basse em um seletor
            const galeria = document.querySelector("#GALERIA-IMAGENS");
            galeria.innerHTML=''; // Limpar bloco, apaga tudo dentro
            const imagens = baseImagens[categoria];

            imagens.forEach(img => {
                console.log(img);
                galeria.innerHTML += '<div> <img src="imagens/'+img+' " /> </div>';

              })

        }
        carregaImagens('todas');

    // Evento de clique
    document.body.addEventListener('click', function(event) {
            // acessa a lista de classe de onde clicou  e
            // procura pela classe botao-categoria
        if(event.target.classList.contains('botao-categoria')) {   
            
            const categoria = event.target.dataset.categoria;
            
            //alert(categoria);
            
            carregaImagens(categoria);
        }
    
    })

    












} ) 