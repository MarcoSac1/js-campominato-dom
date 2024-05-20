// seleziono il container dentro il 'DOM'

const gridContainer = document.querySelector('section.container');
// console.log(gridContainer);

const startGame =  document.querySelector('.start');
// console.log(startGame)

startGame.addEventListener('click', function() {

    let levelChoiseEl = document.querySelector('.select_level');
    let level = levelChoiseEl.value;

    let numberOfCell;
    if(level === 'hard'){
        numberOfCell = 49;
    }else if(level === 'medium'){
        numberOfCell = 81;
    }else{
        numberOfCell = 100;
    }
    
    gridContainer.innerHTML = ''


    // creo un ciclo 'for' per inserire 100 elementi al interno del container
    for (let index = 0; index < numberOfCell; index++) {

        // creo un elemento 
        const squareEl = document.createElement('article');
        // aggiungo una classe a squareEl
        squareEl.classList.add('box',  `${level}`);
        squareEl.append(index + 1);
        // lo stampo nel 'DOM'
        gridContainer.appendChild(squareEl);

        squareEl.addEventListener('click', function(){
            squareEl.classList.add('active');
            // faccio un console.log per stampare il numero che corrisponde alla cella cliccata
            console.log(index + 1);
        });

    }
});



