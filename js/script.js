// Функция для загрузки HTML-файла и замены содержимого
function loadTheory(fileName) {
    console.log("Загрузка файла:", fileName);
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка загрузки файла: " + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("theory-content").innerHTML = data;
            setupLinkHandlers();
            // Перерисовка MathJax после загрузки нового содержимого
            if (typeof MathJax !== 'undefined') {
                MathJax.typesetPromise();
            }
        })
        .catch(error => {
            console.error("Ошибка:", error);
        });
}

// Привязываем функцию к каждому изображению
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        const topics = {
            "Механика": "mechanics.html",
            "Термодинамика и молекулярная физика": "molecular_physics.html",
            "Электростатика и электродинамика": "electrostatics.html",
            "опп": "optics.html",
            "Ядерная физика": "nuclear_physics.html",
            "Квантовая физика": "quantum_physics.html"
        };
        loadTheory(topics[img.alt]);
    });
});

function setupLinkHandlers() {
    // Привязываем функцию к каждому элементу с классом mechanics__chapter
    const chapters = {
        "1": "Mechanics/1_chapter.html",
        "2": "Mechanics/2_chapter.html",
        "3": "Mechanics/3_chapter.html",
        "4": "Mechanics/4_chapter.html",
        "5": "Mechanics/5_chapter.html",
        "6": "Mechanics/6_chapter.html",
        "7": "Mechanics/7_chapter.html",
        "8": "Mechanics/8_chapter.html",
        "9": "Mechanics/9_chapter.html",
        "10": "Mechanics/10_chapter.html"
    };

    document.querySelectorAll(".mechanics__chapter").forEach(el => {
        el.addEventListener("click", (event) => {
            event.preventDefault();
            loadTheory(chapters[el.id]);
        });
    });

    // Привязываем функцию к каждому элементу с классом a__back
    const backLinks = {
        "1": "mechanics.html",
        "2": "" // Добавьте путь или оставьте пустым для 2
    };

    document.querySelectorAll(".a__back").forEach(el => {
        el.addEventListener("click", (event) => {
            event.preventDefault();
            loadTheory(backLinks[el.id]);
        });
    });
}

// Функция для управления боковым меню
function toggleMenu() {
    const nav = document.querySelector('.side-nav');
    nav.classList.toggle('open'); // Добавляем или удаляем класс "open"
}
