const grid = document.querySelector('.grid');
const timer = document.querySelector('.Timer');

const characters = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    ' ',
];

const createElement = (character,i) => {
    const Card = document.createElement('div');
    
    Card.innerHTML = character;

    Card.setAttribute('class', 'Card');
    Card.setAttribute('name', i);
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
    startTimer();
    setPrimeiroVazio();
}
const FimDeGame = () =>{
    var i=0;
    for(i=0;i<8 && grid.children[i].innerHTML==i+1;i++){
    }
    if(i==8){
        window.alert("Parabens você venceu!!!");
        setTimeout(() => {}, 500);
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
                EspacoVazio(Position,1);
                break;
            }else if(grid.children[3].innerHTML === ' '){
                grid.children[3].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,3);
                break;
            }
            break;
        case '1':
            if(grid.children[0].innerHTML === ' '){
                grid.children[0].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,0);
                break;
            }else if(grid.children[2].innerHTML === ' '){
                grid.children[2].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,2);
                break;
            }else if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                EspacoVazio(Position,4);
                break;
            }
            break;
        case '2':
            if(grid.children[1].innerHTML === ' '){
                grid.children[1].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,1);
                break;
            }else if(grid.children[5].innerHTML === ' '){
                grid.children[5].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                EspacoVazio(Position,5);
                break;
            }
            break;
        case '3':
            if(grid.children[0].innerHTML === ' '){
                grid.children[0].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,0);
                break;
            }else if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,4);
                break;
            }else if(grid.children[6].innerHTML === ' '){
                grid.children[6].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                EspacoVazio(Position,6);
                break;
            }
            break;
        case '4':
            if(grid.children[1].innerHTML === ' '){
                grid.children[1].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,1);
                break;
            }else if(grid.children[3].innerHTML === ' '){
                grid.children[3].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,3);
                break;
            }else if(grid.children[5].innerHTML === ' '){
                grid.children[5].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                EspacoVazio(Position,5);
                break;
            }else if(grid.children[7].innerHTML === ' '){
                grid.children[7].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                EspacoVazio(Position,7);
                break;
            }
            break;
        case '5':
            if(grid.children[2].innerHTML === ' '){
                grid.children[2].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,2);
                break;
            }else if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,4);
                break;
            }else if(grid.children[8].innerHTML === ' '){
                grid.children[8].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                EspacoVazio(Position,8);
                break;
            }
            break;
        case '6':
            if(grid.children[3].innerHTML === ' '){
                grid.children[3].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,3);
                break;
            }else if(grid.children[7].innerHTML === ' '){
                grid.children[7].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,7);
                break;
            }
            break;
        case '7':
            if(grid.children[4].innerHTML === ' '){
                grid.children[4].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,4);
                break;
            }else if(grid.children[6].innerHTML === ' '){
                grid.children[6].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,6);
                break;
            }else if(grid.children[8].innerHTML === ' '){
                grid.children[8].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ';
                EspacoVazio(Position,8);
                break;
            }
            break;
        case '8':
            if(grid.children[5].innerHTML === ' '){
                grid.children[5].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,5);
                break;
            }else if(grid.children[7].innerHTML === ' '){
                grid.children[7].innerHTML = grid.children[Position].innerHTML;
                grid.children[Position].innerHTML = ' ' ;
                EspacoVazio(Position,7);
                break;
            }
    }

    FimDeGame();
    
}

const startTimer = () => {
    this.loop = setInterval(() => {
      const currentTime = +timer.innerHTML;
      timer.innerHTML = currentTime + 1;
    }, 1000);
}

const EspacoVazio = (pos1,pos2) =>{
    grid.children[pos1].setAttribute('class','EspacoVazio');
    grid.children[pos2].setAttribute('class','Card');
}

const setPrimeiroVazio = () =>{
    for(let i=0;i<9;i++){
        if(grid.children[i].innerHTML == ' '){
            EspacoVazio(i,null);
        }
    }
}