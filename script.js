//your JS code here. If required.
const squares = document.querySelectorAll('.square');

// Function to change colors on hover
function changeColorOnHover(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = 'rgb(111, 78, 55)'; // Coffee color
        }
    });
}

// Function to reset colors when not hovering
function resetColor() {
    squares.forEach(square => {
        square.style.backgroundColor = 'rgb(230, 230, 250)'; // Lavender color
    });
}

// Add event listeners for mouse enter and leave
squares.forEach(square => {
    square.addEventListener('mouseenter', changeColorOnHover);
    square.addEventListener('mouseleave', resetColor);
});