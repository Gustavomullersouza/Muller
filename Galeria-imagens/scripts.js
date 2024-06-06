
document.addEventListener('DOMContentLoaded', function () {

        const baseImagens = {
            todas: [ 'cidade.jpg', 'animais.jpg', 'natureza.jpg'],
            natureza: ['natureza.jpg'],
            cidade: ['cidade.jpg'],
            animais: ['animais.jpg'],
            
        }
        
        function carregaImagens(categoria){
            //Selecionar elementos HTML com basse em um seletor
            const galeria = document.querySelector("#galeria-imagens");
            galeria.innerHTML=''; // Limpar bloco, apaga tudo dentro
            const imagens = baseImagens[categoria];

            imagens.forEach(img => {
                galeria.innerHTML += '<div class="imagem-item" > <img src="imagens/'+img+' " alt="' + img + '" /> </div>';

              })
              
        }
        function ordenaImagens(ordem){
        
            const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item")) 

            imagens.sort((a, b) => {
                const nameA = a.querySelector('img'). getAttribute('alt');
                const nameB = b.querySelector('img'). getAttribute('alt');
                //operador ternário - se for true ? se não :
                return ordem == 'asc' ? nameA.localeCompare(nameB)  : nameB.localeCompare(nameA);


            })

            const galeria = document.getElementById('galeria-imagens');

            galeria.innerHTML = ''; // esvazia box das imagens

            imagens.forEach(imagem => { 
                galeria.appendChild(imagem);//adiciona as imagens novamente, agora ordenada

               } )

        }

    // Evento de clique
    document.body.addEventListener('click', function(event) {
            // acessa a lista de classe de onde clicou  e
            // procura pela classe botao-categoria
        if(event.target.classList.contains('botao-categoria')) {   
            
            const categoria = event.target.dataset.categoria;
            
            //alert(categoria);
            
            carregaImagens(categoria);
        }
        if(event.target.classList.contains('botao-ordenar')){
            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem);
    
        }
    
    
    })
    carregaImagens('todas');
    
} ) 