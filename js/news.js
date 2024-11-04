document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".news-toggle");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const fullText = this.previousElementSibling;
            const summaryText = this.parentElement.querySelector(".news-summary");

            if (fullText.style.display === "none") {
                fullText.style.display = "block";
                summaryText.style.display = "none";
                this.textContent = "Свернуть";
            } else {
                fullText.style.display = "none";
                summaryText.style.display = "block";
                this.textContent = "Читать дальше";
            }
        });
    });
});
