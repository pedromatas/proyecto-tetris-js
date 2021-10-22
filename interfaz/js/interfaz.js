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