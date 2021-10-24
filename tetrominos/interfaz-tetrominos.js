const  boardWidth=10;
const boardHeight=20;


// esta funcion pinta la estructura de cada bloque hay que hacer append a lo que devuelve 
//para incluir el bloque
function generateBoardBlock(){
    // <div class="bloque__contenedor">
    // <div class="bloque__interior"></div>
    // </div>
    const bloqueContenedor=document.createElement('div');
    const bloqueInterno=document.createElement('div');
    bloqueContenedor.className='bloque__contenedor';
    bloqueInterno.classList.add('bloque__interior');

    bloqueContenedor.appendChild(bloqueInterno);
    return bloqueContenedor;
}

// a esta funcion le mandas la clase del bloque que vas a rellenar con las piezas el tamaño y altura
// que va a tener y se rellenara con los cuadrados

function drawBoard(containerClass, width, heigth){
    const tablero=document.querySelector(`.${containerClass}`);

    for (let i = 0; i < width*heigth; i++) {
        tablero.appendChild(generateBoardBlock());
        
    }
}

drawBoard('contenedor__juego',10,20);


// TETROMINOS CON SUS ROTACIONES //

const lTetromino = [
    [1, boardWidth + 1, boardWidth * 2 + 1, 2],
    [boardWidth, boardWidth + 1, boardWidth + 2, boardWidth * 2 + 2],
    [1, boardWidth + 1, boardWidth * 2 + 1, boardWidth * 2],
    [boardWidth, boardWidth * 2, boardWidth * 2 + 1, boardWidth * 2 + 2]
]

const zTetromino = [
    [0, boardWidth, boardWidth + 1, boardWidth * 2 + 1],
    [boardWidth + 1, boardWidth + 2, boardWidth * 2, boardWidth * 2 + 1],
    [0, boardWidth, boardWidth + 1, boardWidth * 2 + 1],
    [boardWidth + 1, boardWidth + 2, boardWidth * 2, boardWidth * 2 + 1],
]

const tTetromino = [
    [1, boardWidth, boardWidth + 1, boardWidth + 2],
    [1, boardWidth + 1, boardWidth + 2, boardWidth * 2 + 1],
    [boardWidth, boardWidth + 1, boardWidth + 2, boardWidth * 2 + 1],
    [1, boardWidth, boardWidth + 1, boardWidth * 2 + 1],
]

const oTetromino = [
    [0, 1, boardWidth, boardWidth + 1],
    [0, 1, boardWidth, boardWidth + 1],
    [0, 1, boardWidth, boardWidth + 1],
    [0, 1, boardWidth, boardWidth + 1]
]

const iTetromino = [
    [1, boardWidth + 1, boardWidth * 2 + 1, boardWidth * 3 + 1],
    [boardWidth, boardWidth + 1, boardWidth + 1, boardWidth + 3],
    [1, boardWidth + 1, boardWidth * 2 + 1, boardWidth * 3 + 1],
    [boardWidth, boardWidth + 1, boardWidth + 1, boardWidth + 3]
]

// ARRAY DE TODOS LOS TETROMINOS

const tetrominosList = [lTetromino, zTetromino, oTetromino, iTetromino, tTetromino] 

// ESTE NO ES EL METODO DEL DOSIER DE CLASE PERO MOLARÍA PODERLO ADAPTAR //

let currentPosition = 4
let currentRotation = 0
// Seleccionamos tetromino random
let random = Math.floor(Math.random() * tetrominos.length)
console.log(random);

let current = tetrominos[random][currentRotation] // al meter aquí la variable random, hacemos que el tetromino cambie cada vez de manera random

// DIBUJA EL TETROMINO

function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino') // HAY QUE SUSTITUIR LA VARIABLE TETROMINO POR LA DE NUESTRO BLOQUE CON OPACIDAD
    })
}

// BORRA EL TETROMINO


function unDraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino')// AQUÍ LE QUITARÍAMOS LA CLASE O LE PODRÍAMOS LA QUR NO TIENE OPACIDAD
    })
}

// HACEMOS BAJAR EL TETROMINO

timerID = setInterval(moveDown, 100)

function moveDown() {
    unDraw()
    currentPosition += width
    draw()
    freeze()
}

function freeze() {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('taken'))
        //start new tetromino
        random = Math.floor(Math.random() * tetrominos.length)
        current = tetrominos[random][currentRotation]
        currentPosition = 4
        draw()
    }


}