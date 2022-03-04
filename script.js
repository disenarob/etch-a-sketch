document.onload = createGrid();

//creates initial 16x16 grid
function createGrid(num=256){
    const grid = document.querySelector(".grid");
    const flexBasis = 1/(Math.sqrt(num));
   

    for (let i = 0; i < num; i++) {                                 //loop that creates all the cell divs
        const div = document.createElement("div");                   //creates the individual cells
        div.classList.add("cell");                                  //add the .cell-class
        div.style.flexBasis=flexBasis*100+"%";                      //changes the flex-basis according to the number of cells
        div.addEventListener("mouseover", function (e){             
            div.classList.add("hover");
        });
        grid.appendChild(div);              
    }
}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", function (){
    promptUser();
});

function promptUser(){
    //reset grid
    const cell = document.querySelectorAll(".cell"); //selects all elements with a .cell class
    cell.forEach((cell) => {
        cell.classList.remove("hover"); //removes .hover class
    });

    //prompt user to select size of grid
    let gridSize = window.prompt("Select number of cells for each row. Number must be between 10 and 100.");
    if(gridSize > 100 || gridSize < 10){
        alert("Nope");
    }
    else{
        resetGrid(gridSize);
    }
}

function resetGrid(gridSize){
    const grid = document.querySelector(".grid");
    grid.replaceChildren();
    createGrid(gridSize*gridSize);
}
