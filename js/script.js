// Функция для загрузки HTML-файла и замены содержимого
function loadTheory(fileName) {
    console.log("Загрузка файла:", fileName); // Эта строка поможет с отладкой
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка загрузки файла: " + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("theory-content").innerHTML = data;
        })
        .catch(error => {
            console.error("Ошибка:", error);
        });
}

// Привязываем функцию к каждому изображению
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        let fileName = "";

        switch (img.alt) {
            case "Механика":
                fileName = "mechanics.html";
                break;
            case "Термодинамика и молекулярная физика":
                fileName = "thermodynamics.html";
                break;
            case "Электростатика и электродинамика":
                fileName = "electrostatics.html";
                break;
            case "опп":
                fileName = "optics.html";
                break;
            case "Ядерная физика":
                fileName = "nuclear_physics.html";
                break;
            case "Квантовая физика":
                fileName = "quantum_physics.html";
                break;
            default:
                fileName = "";
        }

        if (fileName) {
            loadTheory(fileName);
        }
    });
});
