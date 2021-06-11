let squareNumber = 0;

// Grid container for the 16x16 grid
const gridContainer = document.querySelector('#gridContainer');

// Create 16x16 grid
for (let i = 0; i < 16*16; i++) {
    squareNumber += 1;
    let i = document.createElement('div');
    i.setAttribute('class', 'square');
    i.setAttribute('id', `${squareNumber}`);
    gridContainer.appendChild(i);
}

var allSquares = Array.from(document.querySelectorAll('.square'));
allSquares.forEach(square => {
    square.addEventListener("mouseover", changeColor);
});


const btn = document.querySelector('#btn');
btn.addEventListener('click', reset);

// function colorSquare(e) {
//   console.log("adhsadhsajk");
//   if (e.target.className == "hoverState") {
//       return;  
//   }
//   // console.log(e.target.classList);
//   e.target.classList.toggle('square');
//   e.target.classList.toggle('hoverState');
// }

function reset() {
  allSquares.forEach(square => {
    if (square.className == "hoverState"){
      square.classList.toggle('hoverState');
    }
    if (square.className != "square") {
      square.classList.toggle('square');
    }
  })

  let userGridInput = parseInt(prompt("Enter new grid size (e.g. 50 = 50x50)"));
  if (userGridInput !== null) {
    while (userGridInput >= 100 || Number.isNaN(userGridInput)) {
      userGridInput = parseInt(prompt("Please Enter A Number Less Than 100"))
    }
  }
  
  // Delete all squares
  const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });
  
  // Set amount of columns and rows needed
  gridContainer.style.gridTemplateColumns = `repeat(${userGridInput}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${userGridInput}, 1fr)`; 

  // Make squares
  for (let i = 0; i < userGridInput*userGridInput; i++) {
    let i = document.createElement('div');
    i.setAttribute('class', 'square');
    i.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(i);
  }
}

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}