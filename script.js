let squareNumber = 0;

// Grid container for teh 16x16 grid
const gridContainer = document.querySelector('#gridContainer');

// Create 16x16 grid
for (let i = 0; i < 16*16; i++) {
    squareNumber += 1;
    let i = document.createElement('div');
    i.setAttribute('class', 'square');
    i.setAttribute('id', `${squareNumber}`);
    gridContainer.appendChild(i);
}

function colorSquare(e) {
  console.log("adhsadhsajk");
  if (e.target.className == "hoverState") {
      return;  
  }
  // console.log(e.target.classList);
  e.target.classList.toggle('square');
  e.target.classList.toggle('hoverState');
}

function reset() {
  let foo = 0;

  allSquares.forEach(square => {

    if (square.className == "hoverState"){
      square.classList.toggle('hoverState');
    }
    if (square.className != "square") {
      square.classList.toggle('square');
    }
  })

  let userGridInput = parseInt(prompt("Enter new grid size (e.g. 50 = 50x50)", "Ass"));
  while (userGridInput >= 100) {
    userGridInput = parseInt(prompt("Please Enter A Number Less Than 100", "Ass"))
  }

  const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });

  gridContainer.style.gridTemplateColumns = `repeat(${userGridInput}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${userGridInput}, 1fr)`; 

  for (let i = 0; i < userGridInput*userGridInput; i++) {
    let i = document.createElement('div');
    i.setAttribute('class', 'square');
    i.addEventListener("mouseover", colorSquare);
    gridContainer.appendChild(i);
  }
}

var allSquares = Array.from(document.querySelectorAll('.square'));
allSquares.forEach(square => {
    square.addEventListener("mouseover", colorSquare);
});


const btn = document.querySelector('#btn');
btn.addEventListener('click', reset);


