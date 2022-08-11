function handleMouseEnter(){
   this.classList.add('s-card--hovered')
/* Função para reconhecer ao passar o mouse e abrir a imagem */
document.body.id = `${this.id}-hovered`; 
/* Trocar o fundo do background ao passar o mouse*/
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    /* Função para sair ao passar o mouse e desfazer a ação acima */
    document.body.id ='';
    /* Mudar o ID ao sair do mouse */
}

function addEventListenersToCards () {
    const cardElements = document.getElementsByClassName('s-card');
    /* for criado para o carElements ser menor que o index e ++ utilizado para ser utilizado para cada iteração de 1 em 1*/
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        /* Criado para quando o usuário clicar no card fazer uma iteração */
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded",addEventListenersToCards, false);

/* Função para rotacionar as imagens como carrosel */
function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); /* Expressões regulares */
    const rotateYDeg = -120 * (Number(selectedItem) - 1); /* Valor negativo para rodar sentido anti-horário */
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
    carousel.style.transform = newTransform;
  
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
  }