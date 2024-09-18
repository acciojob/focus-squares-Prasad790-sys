//your JS code here. If required.
const squares = document.querySelectorAll('.square');

// Function to change colors on hover
function changeColorOnHover(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = '#6F4E37'; // Coffee color
        }
    });
}

// Function to reset colors when not hovering
function resetColor() {
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA'; // Lavender color
    });
}

// Add event listeners for mouse enter and leave
squares.forEach(square => {
    square.addEventListener('mouseenter', changeColorOnHover);
    square.addEventListener('mouseleave', resetColor);
});