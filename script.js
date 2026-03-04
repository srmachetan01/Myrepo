// script.js

// Interactive functionality for the portfolio

document.addEventListener('DOMContentLoaded', function() {
    const currentDateTime = new Date().toISOString().replace('T', ' ').slice(0, 19);
    const dateTimeDisplay = document.createElement('div');
    dateTimeDisplay.innerText = `Current Date and Time (UTC): ${currentDateTime}`;
    document.body.appendChild(dateTimeDisplay);

    // Add more interactive features here as needed
});
