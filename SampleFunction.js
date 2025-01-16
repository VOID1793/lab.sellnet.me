let count = 0;

document.getElementById("CountingButton").addEventListener("click", () => {
    count++;
    document.getElementById("counter").textContent = count;
});