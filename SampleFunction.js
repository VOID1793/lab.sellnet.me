document.addEventListener("DOMContentLoaded", function() {
    let count = 0;

    // Check if CountingButton exists before adding event listener
    const countingButton = document.getElementById("CountingButton");
    if (countingButton) {
        countingButton.addEventListener("click", () => {
            count++;
            document.getElementById("counter").textContent = count;
        });
    }

    // Hamburger menu toggle
    document.getElementById("Hamburger").addEventListener("click", function () {
        const navMenu = document.getElementById("NAVMENU");
        navMenu.classList.toggle("active");  // Toggle the 'active' class to show/hide menu
    });
});