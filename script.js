// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const grid = document.getElementById('grid');
    grid.insertRow(numRows);
    
    //If grid is empty, create first column with row
    if(numRows === 0)
    {
        grid.rows[numRows].insertCell(numCols);
        numCols++;
    }
    else
    {
        for (let i = 0; i < numCols; i++) 
        {
            grid.rows[numRows].insertCell(i);
        }
    }
    numRows++;
}

// Add a column
function addC() {
    const grid = document.getElementById('grid');

    //If grid is empty, create first row with column
    if(numRows === 0 && numCols === 0)
    {
        addR();
    }
    else
    {
        for (let i = 0; i < numRows; i++) 
        {
            grid.rows[i].insertCell(numCols);
        }
        numCols++;
    }
}

// Remove a row
function removeR() {
    if (numRows > 0) {
        const grid = document.getElementById('grid');
        
        grid.deleteRow(numRows-1);
        numRows--;
        
        if (numRows === 0) {
            numCols = 0;
        }
    } 
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}