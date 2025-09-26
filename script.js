// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const table = document.getElementById("grid");
    const newRow = table.insertRow();
    
    // Add cells to match current column count
    for (let i = 0; i < numCols; i++) {
        const newCell = newRow.insertCell();
        newCell.onclick = function() { colorCell(this); };
    }
    
    // If this is the first row, ensure we have at least one column
    if (numRows === 0 && numCols === 0) {
        numCols = 1;
        const newCell = newRow.insertCell();
        newCell.onclick = function() { colorCell(this); };
    }
    
    numRows++;
}

// Add a column
function addC() {
    const table = document.getElementById("grid");
    
    // If there are no rows, add one first
    if (numRows === 0) {
        addR();
        return;
    }
    
    // Add a cell to each existing row
    for (let i = 0; i < numRows; i++) {
        const newCell = table.rows[i].insertCell();
        newCell.onclick = function() { colorCell(this); };
    }
    
    numCols++;
    console.log(`Added column. Grid is now ${numRows}x${numCols}`);
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
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