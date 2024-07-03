document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");

    // Simulate a long task without blocking the main thread
    requestIdleCallback(() => {
        setTimeout(() => {
            console.log("Simulating a long task");
        }, 5000);
    });
});