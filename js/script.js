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

    // const listBomb = getUniqueRandomInt (1, 16, numberOfCell);
    
    // for (let index = 0; index < getRandomInt; index++) {
    //     // creo un elemento
    //     const bombCell = document.createElement('article');
    //     // agiungo classi a bombCell
    //     bombCell.classList.add('box_bomb', `${level}`);
    //     bombCell.append(index + 1);
    //     // lo stampo nel 'DOM'
    //     gridContainer.appendChild(bombCell);
    //     if(bombCell){
    //         bombCell.addEventListener('click', function(){
    //             bombCell.classList.add('active_bomb');
    //             // faccio un console.log per stampare il numero che corrisponde alla cella cliccata
    //             console.log(index + 1);
    //         });

    //     }
        
        
    // }

    const bombArray = [];

    
    for (let index = 0; index < 16 ; index++) {
        // console.log(index + 1);
        let randomNumber = Math.floor(Math.random() * 100);
        bombArray.push(randomNumber)
        
    }function getUniqueRandomInt(randomNumber, min, max) {
            let otherNumber;
            let isFound = true;
        
            while (!isFound) {
                otherNumber = randomNumber (1, 100);
                if(randomNumber.includes(otherNumber) !== false){
                    isFound = true;
                }
                
            }
            return randomNumber;
        }
    console.log(bombArray);
    



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
            if(numberOfCell.includes(bombArray)){
                // creo un elemento
                const bombCell = document.createElement('article');
                // agiungo classi a bombCell
                bombCell.classList.add('box_bomb', `${level}`);
                bombCell.append(index + 1);
                // lo stampo nel 'DOM'
                gridContainer.appendChild(bombCell);
                alert('Game Over')
            }
        });

    }

});


// // creo una function che generi un numero randomico tra 1 e 16
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * ((max + 1) - min)) + min;

// }

// function getUniqueRandomInt(randomNumber, min, max) {

//     let otherNumber;
//     let isFound = true;

//     while (!isFound) {
//         otherNumber = randomNumber (1, 100);
//         if(randomNumber.includes(otherNumber) !== false){
//             isFound = true;
//         }
        
//     }
//     return randomNumber;
// }
