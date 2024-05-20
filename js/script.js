// seleziono il container dentro il 'DOM'

const gridContainer = document.querySelector('section.container');
// console.log(gridContainer);

const startGame =  document.querySelector('.start');
// console.log(startGame)

startGame.addEventListener('click', function() {

    let levelChoiseEl = document.querySelector('.select_level');
    // console.log(levelChoiseEl.value);
    let level = levelChoiseEl.value;

    let numberOfCell;
    if(level === 'hard'){
        numberOfCell = 49;
    }else if(level === 'medium'){
        numberOfCell = 81;
    }else{
        numberOfCell = 100;
    }
    // console.log(numberOfCell);
    
    gridContainer.innerHTML = ''

    // creo un ciclo 'for' per inserire 100 elementi al interno del container
    for (let index = 0; index < numberOfCell; index++) {

        // creo un elemento 
        const squareEl = document.createElement('article');
        // aggiungo classi a squareEl
        squareEl.classList.add('box', `${level}`);
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


// creo una function che generi un numero randomico tra 1 e 16
function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;

}

function getUniqueRandomInt(notDesiredNumber, min, max) {
    let randomNumber;
    let isFound = true;

    while (!isFound) {
        randomNumber = getRandomInt (min, max);
        if(notDesiredNumber.includes(randomNumber) !== false){
            isFound = true;
        }
        
    }
    return randomNumber;
}
