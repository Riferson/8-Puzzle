const grid = document.querySelector('.grid');
const characters = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    " ",
  ];

  const createElement = (character,i) => {
    const Card = document.createElement('div');
    
    Card.innerHTML = character;
    Card.setAttribute('class', 'Card');
    Card.setAttribute('name', i);
    
    
    console.log(character);
    Card.addEventListener('click',moverPeca);
    return Card;
  }

  const loadGame = () => {
    i=0;
    shuffledArray = characters.sort(() => Math.random() - 0.5);
    shuffledArray.forEach((character) => {
        const Case = createElement(character,i);
        i++;
        grid.appendChild(Case);
      });
  }

  window.onload = () => {
    loadGame();
  }
const FimDeGame = () =>{
    var i=0;
    for(i=0;i<8 && grid.children[i].innerHTML==i+1;i++){
    }
    if(i==8){
        window.alert("Parabens você vendeu!!!");
    }
}
const moverPeca = ({ target }) => {
    CardSelect = target;
    Position = CardSelect.getAttribute('name');

    console.log(grid.children[Position].innerHTML);

    switch(Position){
        case '0':
            if(grid.children[1].innerHTML === ' '){
                grid.children[1].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[3].innerHTML === ' '){
                grid.children[3].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }
            break;
        case '1':
            if(grid.children[0].innerHTML === ' '){
                grid.children[0].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[2].innerHTML === ' '){
                grid.children[2].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                break;
            }
            break;
        case '2':
            if(grid.children[1].innerHTML === ' '){
                grid.children[1].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[5].innerHTML === ' '){
                grid.children[5].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                break;
            }
            break;
        case '3':
            if(grid.children[0].innerHTML === ' '){
                grid.children[0].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[6].innerHTML === ' '){
                grid.children[6].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                break;
            }
            break;
        case '4':
            if(grid.children[1].innerHTML === ' '){
                grid.children[1].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[3].innerHTML === ' '){
                grid.children[3].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[5].innerHTML === ' '){
                grid.children[5].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                break;
            }else if(grid.children[7].innerHTML === ' '){
                grid.children[7].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                break;
            }
            break;
        case '5':
            if(grid.children[2].innerHTML === ' '){
                grid.children[2].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[8].innerHTML === ' '){
                grid.children[8].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                break;
            }
            break;
        case '6':
            if(grid.children[3].innerHTML === ' '){
                grid.children[3].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[7].innerHTML === ' '){
                grid.children[7].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }
            break;
        case '7':
            if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[6].innerHTML === ' '){
                grid.children[6].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[8].innerHTML === ' '){
                grid.children[8].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                break;
            }
            break;
        case '8':
            if(grid.children[5].innerHTML === ' '){
                grid.children[5].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }else if(grid.children[7].innerHTML === ' '){
                grid.children[7].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                break;
            }
    }
    FimDeGame();

}