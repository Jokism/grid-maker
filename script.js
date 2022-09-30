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
    if (numRows > 0) 
    {
        const grid = document.getElementById('grid');
        
        grid.deleteRow(numRows-1);
        numRows--;
        
        if (numRows === 0) 
        {
            numCols = 0;
        }
    } 
}

// Remove a column
function removeC() {
    if (numCols > 0) 
    {
        const grid = document.getElementById('grid');
        
        // Remove column for each row
        for (let i = 0; i < numRows; i++) 
        {
            grid.rows[i].deleteCell(numCols-1);
        }
        numCols--;

        // Remove remaining rows if there are no columns
        if (numCols === 0) 
        {
            for (let i = 0; i < numRows; i++) 
            {
                removeR();
            }
            numRows = 0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Event listener for click event to set background color of a table cell to colorSelected
document.querySelector('#grid').addEventListener('click', event => {
    const target_element = event.target;
    const tag_name = target_element.tagName.toString().toLowerCase();
    
    if (tag_name === 'td') 
    {
        const element_style = target_element.style;
        
        // Remove background-color style
        if (    !colorSelected 
                || colorSelected === 'SELECT' 
                || colorSelected.toLowerCase() === element_style.backgroundColor) 
        {
            target_element.removeAttribute('style');
        }
        // Set background-color style
        else 
        {
            element_style.backgroundColor = colorSelected;
        }

    }
});

// Fill all uncolored cells
function fillU(){
    // If table is not empty
    if (numRows > 0 && numCols > 0) 
    {
        const grid = document.getElementById('grid');
        
        for (let i = 0; i < numRows; i++) 
        {
            for (let j = 0; j < numCols; j++)
            {
                let cell_style = grid.rows[i].cells[j].style;
                
                if (!cell_style.backgroundColor) 
                {
                    cell_style.backgroundColor = colorSelected;
                }
            }
        }
    }
}

// Fill all cells
function fillAll(){
    // If table is not empty
    if (numRows > 0 && numCols > 0)
    {
        const grid = document.getElementById('grid');

        for (let i = 0; i < numRows; i++) 
        {
            for (let j = 0; j < numCols; j++)
            {
                if (colorSelected)
                {
                    grid.rows[i].cells[j].style.backgroundColor = colorSelected;
                }
                else
                {
                    grid.rows[i].cells[j].removeAttribute('style');
                }
            }
        }
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}