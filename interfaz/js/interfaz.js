const boardWidth = 10;
const boardHeight = 20;


// esta funcion pinta la estructura de cada bloque hay que hacer append a lo que devuelve 
//para incluir el bloque
function generateBoardBlock() {
    // <div class="bloque__contenedor">
    // <div class="bloque__interior"></div>
    // </div>
    const bloqueContenedor = document.createElement('div');
    const bloqueInterno = document.createElement('div');
    bloqueContenedor.className = 'bloque__contenedor';
    bloqueInterno.classList.add('bloque__interior');

    bloqueContenedor.appendChild(bloqueInterno);
    return bloqueContenedor;
}

// a esta funcion le mandas la clase del bloque que vas a rellenar con las piezas el tamaño y altura
// que va a tener y se rellenara con los cuadrados

function drawBoard(containerClass, width, heigth) {
    const tablero = document.querySelector(`.${containerClass}`);

    for (let i = 0; i < width * heigth; i++) {
        tablero.appendChild(generateBoardBlock());

    }
}


// funcion que agregara una linea final
function generateBoardBlockFinal() {
    const bloqueFinal = document.createElement('div');
    bloqueFinal.classList.add('bloque__contenedor');
    bloqueFinal.classList.add('bloque_bloqueado');
    bloqueFinal.classList.add('final_line');
    return bloqueFinal;
}


// Funcion para pintar la linea final que ayudara a detener los bloques
function drawBoardFinalLine(containerClass, width) {
    const tablero = document.querySelector(`.${containerClass}`);

    for (let i = 0; i < width; i++) {
        tablero.appendChild(generateBoardBlockFinal());
    }
}




drawBoard('contenedor__juego', 10, 20);
drawBoardFinalLine('contenedor__juego', 10);
drawBoard('contenedor__score-cuadrados', 4, 4);


// Ancho y alto del tablero
const BOAR_WIDTH = 10;
const BOAR_HEIGHT = 20;

// Array con todos los cuadrados internos
let cuadrados = Array.from(document.querySelectorAll('.bloque__contenedor'));

console.log(cuadrados);

// Rotaciones de los tetrominios

//tetrominioI
const tetrominioI = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH + 3],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 3 + 1],
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH + 3],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 3 + 1]
];


//tetrominioL
const tetrominioL = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2],
    [0, 1, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH + 2, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1]
];


//tetrominioS
const tetrominioS = [
    [BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1],
    [0, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1],
    [0, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1]
];


//tetrominioZ
const tetrominioZ = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [2, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [2, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1]
];


//tetrominioJ
const tetrominioJ = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 2],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1],
    [BOAR_WIDTH, BOAR_WIDTH * 2, BOAR_WIDTH * 2 + 1, BOAR_WIDTH * 2 + 2],
    [1, 2, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1]
];


//tetrominioO
const tetrominioO = [
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1],
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1],
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1],
    [0, 1, BOAR_WIDTH, BOAR_WIDTH + 1]
]


//tetrominioT
const tetrominioT = [
    [BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1],
    [1, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH * 2 + 1],
    [1, BOAR_WIDTH, BOAR_WIDTH + 1, BOAR_WIDTH + 2],
    [1, BOAR_WIDTH + 1, BOAR_WIDTH + 2, BOAR_WIDTH * 2 + 1]
]


// Posicion incial en el tablero    
let posicionActual = 4;


// Seleccion de la rotacion de los tetrominio, hay cuatro posibilidades
let rotacionActualTetrominio = 0;


// Array de los tetrominios diponibles
const losTetrominios = [tetrominioI, tetrominioL, tetrominioS, tetrominioZ, tetrominioJ, tetrominioO, tetrominioT];


// Rotacion aleatoria del tetrominio
let random = Math.floor(Math.random() * losTetrominios.length);
let forma_del_tetrominio_elegido = losTetrominios[random][rotacionActualTetrominio];


// dibujar el tetrominio
function draw() {
    forma_del_tetrominio_elegido.forEach(v => {
        cuadrados[posicionActual + v].classList.add('tetrominio');
    })
}


// Borrar el tetrominio
function undraw() {
    forma_del_tetrominio_elegido.forEach(v => {
        cuadrados[posicionActual + v].classList.remove('tetrominio');
    })
}

// Mover los tetrominio hacia abajo cada medio segundo
time = setInterval(moveDown, 500);

// Mover los tetrominios al tocar las teclas de movimientos
function controles(tecla) {
    if (tecla.keyCode === 37) {
        moveLetf();
    } else if (tecla.keyCode === 38) {
        rotar();
    } else if (tecla.keyCode === 39) {
        moveRight();
    } else if (tecla.keyCode === 40) {
        moveDown();
    }
}


// Evento al tocar una tecla
document.addEventListener('keyup', controles);


// Funcion para moverse abajo
function moveDown() {
    undraw();
    posicionActual += BOAR_WIDTH;
    draw();
    freeze();
}


// Congelar el tetrominio al final 
function freeze() {
    // Si alguno algun bloque de la siguiente fila es el final
    if (forma_del_tetrominio_elegido.some(v => cuadrados[posicionActual + v + BOAR_WIDTH].classList.contains('bloque_bloqueado'))) {
        // Entonces bloqueara el tetrominio
        forma_del_tetrominio_elegido.forEach(v => cuadrados[posicionActual + v].classList.add('bloque_bloqueado'));

        random = Math.floor(Math.random() * losTetrominios.length);
        forma_del_tetrominio_elegido = losTetrominios[random][rotacionActualTetrominio];
        posicionActual = 4;
        draw();
    }
}

// Mover el tetrominio a la izquierda hasta el borde
function moveLetf() {
    undraw();
    const bordeIzquierdo = forma_del_tetrominio_elegido.some(v => ((posicionActual + v) % BOAR_WIDTH) === 0);
    // Cuando estoy pegado al borde estoy en la columna 0 

    if (!bordeIzquierdo) {
        posicionActual -= 1; // si no estoy al borde, me muevo a la izquierda
    }

    if (forma_del_tetrominio_elegido.some(v => cuadrados[posicionActual + v].classList.contains('bloque_bloqueado'))) {
        posicionActual += 1; // ????
    }
    draw();
}


// Mover el tetrominio a la derecha hasta llegar al borde
function moveRight() {
    undraw();
    const bordeDerecho = forma_del_tetrominio_elegido.some(v => ((posicionActual + v) % BOAR_WIDTH) === (BOAR_WIDTH - 1));

    if (!bordeDerecho) {
        posicionActual += 1;
    }

    if (forma_del_tetrominio_elegido.some(v => cuadrados[posicionActual + v].classList.contains('bloque_bloqueado'))) {
        posicionActual -= 1;
    }
    draw();
}

// Rotar los tetrominios
function rotar() {
    undraw();
    rotacionActualTetrominio++; // Eligo la siguiente forma del tetrominio
    if (rotacionActualTetrominio === forma_del_tetrominio_elegido.length) {
        rotacionActualTetrominio = 0;
    }
    forma_del_tetrominio_elegido = losTetrominios[random][rotacionActualTetrominio];
    draw();
}