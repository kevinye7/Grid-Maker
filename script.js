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
}

// Remove a row
function removeR() {
    if (numRows <= 0) {
        alert("No rows to remove!");
        return;
    }
    
    const table = document.getElementById("grid");
    table.deleteRow(-1); // Remove last row
    numRows--;
    
    // Update columns count if no rows left
    if (numRows === 0) {
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    if (numCols <= 0) {
        alert("No columns to remove!");
        return;
    }
    
    const table = document.getElementById("grid");
    
    // Remove last cell from each row
    for (let i = 0; i < numRows; i++) {
        table.rows[i].deleteCell(-1);
    }
    
    numCols--;

    // Update rows count if no columns left
    if (numCols === 0) {
        // Remove all rows from the table
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill the clicked cell with the selected color
function colorCell(cell) {
    if (!colorSelected || colorSelected === "SELECT") {
        alert("Please select a color first!");
        return;
    }
    
    // Set background color directly using style property
    switch(colorSelected) {
        case 'Red':
            cell.style.backgroundColor = '#FF6961';
            break;
        case 'Blue':
            cell.style.backgroundColor = '#A7C7E7';
            break;
        case 'Green':
            cell.style.backgroundColor = '#C1E1C1';
            break;
        case 'Yellow':
            cell.style.backgroundColor = '#FDFD96';
            break;
    }
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