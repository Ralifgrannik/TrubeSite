
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
            // Установите обработчики для новых ссылок после загрузки
            setupLinkHandlers();
        })
        .catch(error => {
            console.error("Ошибка:", error);
        });
}


// Привязываем функцию к каждому изображению
document.querySelectorAll(".gallery img").forEach(img => {
    console.log('jello')
    img.addEventListener("click", () => {
        let fileName = "";

        switch (img.alt) {
            case "Механика":
                fileName = "mechanics.html";
                break;
            case "Термодинамика и молекулярная физика":
                fileName = "molecular_physics.html";
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


function setupLinkHandlers() {
    // Привязываем функцию к каждому элементу с классом mechanics__chapter
    document.querySelectorAll(".mechanics__chapter").forEach(el => {
        el.addEventListener("click", (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке
            let fileName = "";

            // Определяем файл в зависимости от ID элемента
            switch (el.id) {
                case "1":
                    fileName = "Mechanics/1_chapter.html";
                    break;
                case "2":
                    fileName = "Mechanics/2_chapter.html";
                    break;
                case "3":
                    fileName = "Mechanics/3_chapter.html";
                    break;
                case "4":
                    fileName = "Mechanics/4_chapter.html";
                    break;
                case "5":
                    fileName = "Mechanics/5_chapter.html";
                    break;
                case "6":
                    fileName = "Mechanics/6_chapter.html";
                    break;
                case "7":
                    fileName = "Mechanics/7_chapter.html";
                    break;
                case "8":
                    fileName = "Mechanics/8_chapter.html";
                    break;
                case "9":
                    fileName = "Mechanics/9_chapter.html";
                    break;
                case "10":
                    fileName = "Mechanics/10_chapter.html";
                    break;
                default:
                    fileName = "";
            }

            if (fileName) {
                loadTheory(fileName); // Загружаем теорию
            }
        });
    });


    document.querySelectorAll(".a__back").forEach(el => {
        el.addEventListener("click", (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке
            let fileName = "";

            // Определяем файл в зависимости от ID элемента
            switch (el.id) {
                case "1":
                    fileName = "mechanics.html";
                    break;
                case "2":
                    fileName = "";
                    break;
                default:
                    fileName = "";
                
            }

            if (fileName) {
                loadTheory(fileName); // Загружаем теорию
            }

        });
    });
}


function toggleMenu() {
    console.log('ji')
    const nav = document.querySelector('.side-nav');
    nav.classList.toggle('open'); // Добавляем или удаляем класс "open"
}

