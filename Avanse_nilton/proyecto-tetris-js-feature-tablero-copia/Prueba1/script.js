


document.addEventListener('DOMContentLoaded' , () =>{
    const grid = document.querySelector('grip');
    let squares = Array.from(document.querySelectorAll('.grid div'));

    let scoreDisplay = document.querySelector('#score');
    let starBtn = document.querySelector('#start-button');

    const width = 10;

    let nextRandom = 0; 

    // the diferents forms of the tetrominoes when they rotate
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
      ]
    
      const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
      const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]
    

const thetetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino];      
     

let currentPosition = 4;
let currentRotation = 0; // rotacion del tetromino


// randomly select a tetromino and its first rotation
let random = Math.floor(Math.random()*thetetrominoes.length);
console.log(random);
let current =  thetetrominoes[random][currentRotation];// forma del tetromino


// dibujar el tetrominio
function draw() {
   current.forEach( i => {
       squares[currentPosition + i].classList.add('tetromino');
   })
}

// borrar el tetrominio
function undraw() {
    current.forEach( i => {
        squares[currentPosition + i].classList.remove('tetromino');
    })    
}


// mover los tetrominios abaja cada segundo
    timerID = setInterval(moveDown,500);

// asignar las funciones al tocar las teclas de movimientos
    function control(e){
      if (e.keyCode === 37){
        moveLetf();
      } else if(e.keyCode === 38){
        rotate();
      }else if(e.keyCode === 39){
        moveRight();  
      }else if(e.keyCode === 40){
        moveDown();
      }
    }

    document.addEventListener('keyup',control);


    function moveDown(){
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }


// Congelar un tetrominio
    function freeze(){
      if(current.some( i => squares[currentPosition + i + width].classList.contains('taken'))) {
        current.forEach( i => squares[currentPosition + i].classList.add('taken') )

        //empezar un nuevo tetrominio callendo


        random = nextRandom;// para pintar en el cuadrado pequeño el siguiente tetrominio

        nextRandom = Math.floor(Math.random()* thetetrominoes.length)
        current = thetetrominoes[random][currentRotation];
        currentPosition =4;
        draw();

        displayShape();//pintar en el cuadrado pequeño el siguiente tetrominio
      }
    }


// Mover el tetrominio a la izquierda hasta el borde

function moveLetf(){
  undraw();
  const isAtLeftEdge = current.some(i => (currentPosition + i)%width === 0);

  if (!isAtLeftEdge){
    currentPosition -= 1;
  }
  
  if(current.some(i => squares[currentPosition +i].classList.contains('taken'))){
    currentPosition += 1;
  }
  draw();

}


// Mover el tetrominio a la derecha hasta que llegue al borde
function moveRight(){
  undraw();
  const isAtRightEdge = current.some(i => (currentPosition + i)%width === width -1);

  if (!isAtRightEdge){
    currentPosition += 1;
  }
  
  if(current.some(i => squares[currentPosition +i].classList.contains('taken'))){
    currentPosition -= 1;
  }
  draw();
}


// rotar los tetrominios
function rotate(){
  undraw();
  currentRotation++;// aqui eligo una de las formas de los tetrominos
  if(currentRotation === current.length){ //si la rotacion llega a , vuelve a 0
    currentRotation = 0;
  }
  current = thetetrominoes[random][currentRotation];
  draw();
}


// mostrar el siguiente tetrominio en el mini-grid
const displaySquares = document.querySelectorAll('.mini-grid div');
const displayWidth = 4;
let displayIndex = 0;


// tetrominios sin rotacion
const upNextTetrominoes = [ 
  [1, displayWidth+1, displayWidth*2+1, 2],//ltetrominio
  [0, displayWidth, displayWidth+1, displayWidth*2+1],//ztetrominio
  [1, displayWidth, displayWidth+1, displayWidth+2],//ttetrominio
  [0, 1, displayWidth, displayWidth+1],//otetrominio
  [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]// itetrominio
];



// funcion para mostrar el tetrominio en el mini-grid
function displayShape() {
  // eliminar otro tetrominio que este en el mini-grid
  displaySquares.forEach( square => {
    square.classList.remove('tetromino');
  });

  upNextTetrominoes[nextRandom].forEach( i => {
    displaySquares[displayIndex + i].classList.add('tetromino');
  })

}





})