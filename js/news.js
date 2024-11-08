document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".news-toggle");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const fullText = this.previousElementSibling;
            if (fullText.style.display === "none" || fullText.style.display === "") {
                fullText.style.display = "block";
                this.textContent = "Скрыть";
            } else {
                fullText.style.display = "none";
                this.textContent = "Читать дальше";
            }
        });
    });
});
