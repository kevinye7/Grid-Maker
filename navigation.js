// Grid Navigation JavaScript
// Enhanced navigation functionality for the grid project

function navigateToGrid(gridName) {
    // Add some visual feedback
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        if (gridName === 'david') {
            window.location.href = 'david.html';
        } else if (gridName === 'kevin') {
            window.location.href = 'kevin.html';
        }
    }, 150);
}

function goHome() {
    window.location.href = 'index.html';
}

function goBackToDavid() {
    window.location.href = 'david.html';
}

function goBackToKevin() {
    window.location.href = 'kevin.html';
}

// Add smooth scrolling and enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to grid cards
    const gridCards = document.querySelectorAll('.grid-card');
    gridCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Back navigation helper
function goBack() {
    window.history.back();
}
