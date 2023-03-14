// Create a 16x16 grid
function createGrid () {
    // Create layout that handle the grid
    var layout = document.createElement('div');
    // Add class "main" to the div
    layout.classList.add('main');
    // Add the div to the body
    document.body.appendChild(layout);
    // Style the div in flex
    layout.style.display = 'flex';
    // Set flex to 1
    layout.style.flex = '1';
    // Set flex direction to column
    layout.style.flexDirection = 'column';
    // Create 16 div (vertically)
    for (var i = 0; i < 16; i++) {
        // Create div
        var container = document.createElement('div');
        // Add the class "container" to the div
        container.classList.add('container');
        // Add the container to layout
        layout.appendChild(container);
        // Style the container in flex
        container.style.display = 'flex';
        // Set flex to 1
        container.style.flex = '1';
        // Set the size of the div to fit the grid
        container.style.width = '320px';
        // Create 16 div (horizontally)
        for (var j = 0; j < 16; j++) {
            // Create a div
            var div = document.createElement('div');
            // Add the class "square" to the div
            div.classList.add('square');
            // Add the event listener "mouseover" to the div
            div.addEventListener('mouseover', function (event) {
                // Change the background color of the div
                event.target.style.backgroundColor = 'black';
                // change border color to white
                event.target.style.border = '1px solid white';
            });
            // Add the div to the container
            container.appendChild(div);
            // Style border
            div.style.border = '1px solid black';
            // Set initial size
            div.style.width = '20px';
            div.style.height = '20px';
        }
    }
}

// Create the grid
createGrid();

// Create a button
var button = document.createElement('button');
// Add the class "clear" for later styling
button.classList.add('clear');
// Add the text "Clear" to the button
button.textContent = 'Clear';
// Add the button to the body
document.body.appendChild(button);
// Add the event listener "click" to the button
button.addEventListener('click', function () {
    // Remove all the divs
    var squares = document.querySelectorAll('.square');
    // Loop through all the divs
    for (var i = 0; i < squares.length; i++) {
        // Remove the div
        squares[i].remove();
    }
    // Create a new grid
    createGrid();
    }
);


// Create a button
var customButton = document.createElement('button');
// Add the class "custom" for later styling
customButton.classList.add('customButton');
// Add the text "Custom" to the button
customButton.textContent = 'Custom';
// Add the button to the body
document.body.appendChild(customButton);
// Add the event listener "click" to the button
customButton.addEventListener('click', function () {
    // Prompt asking for new grid size
    var size = prompt('How many squares per side?');
    // Create a new grid
    newGrid(size);

}
);


function newGrid (size) {
    // Delete the previous grid
    var squares = document.querySelectorAll('.square');
    // Loop through all the divs
    for (var i = 0; i < squares.length; i++) {
        // Remove the div
        squares[i].remove();
    }
    // Create layout that handle the grid
    var layout = document.createElement('div');
    // Add class "main" to the div
    layout.classList.add('main');
    // Add the div to the body
    document.body.appendChild(layout);
    // Style the div in flex
    layout.style.display = 'flex';
    // Set flex direction to column
    layout.style.flexDirection = 'column';
    // Set max width and height of 320px
    layout.style.width = '320px';
    layout.style.height = '320px';
    // Create 16 div (vertically)
    for (var i = 0; i < size; i++) {
        // Create div
        var container = document.createElement('div');
        // Add the class "container" to the div
        container.classList.add('container');
        // Add the div to the body
        layout.appendChild(container);
        // Style the container in flex
        container.style.display = 'flex';
        // Set flex to 1
        container.style.flex = '1';
        container.style.width = '320px';
        // Create 16 div (horizontally)
        for (var j = 0; j < size; j++) {
            // Create a div
            var div = document.createElement('div');
            // Add the class "square" to the div
            div.classList.add('square');
            // Add the event listener "mouseover" to the div
            div.addEventListener('mouseover', function (event) {
                // Change the background color of the div
                event.target.style.backgroundColor = 'black';
                // change border color to white
                event.target.style.border = '1px solid white';
            });
            // Add the div to the container
            container.appendChild(div);
            // Style border
            div.style.border = '1px solid black';
            // Set initial size
            div.style.width = '20px';
            div.style.height = '20px';
        }
    }
}