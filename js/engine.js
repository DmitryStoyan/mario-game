class Engine {
  constructor() {
    let canvas = {
      skyCtx: document.getElementById("sky-canvas").getContext("2d"), // Получение контекста рисования для холста с идентификатором "sky-canvas"
      bgCtx: document.getElementById("bg-canvas").getContext("2d"), // Получение контекста рисования для холста с идентификатором "bg-canvas"
      fgCtx: document.getElementById("fg-canvas").getContext("2d"), // Получение контекста рисования для холста с идентификатором "fg-canvas"
    };

    let grafika = new Image(); // Создание нового объекта изображения
    grafika.src = "img/stylesheet.png"; // Загрузка изображения из файла "img/stylesheet.png"
    grafika.addEventListener("load", function () {
      // Добавление обработчика события "load" для изображения
      grafika = this; // Присвоение загруженного изображения переменной grafika
    });

    this.dane = {
      nrKlatki: 0, // Номер текущего кадра
      canvas: canvas, // Объект с контекстами рисования холстов
      grafika: grafika, // Загруженное изображение
      audio: {
        melodia: new Audio("audio/theme_melody.mp3"), // Загрузка аудиофайла "audio/theme_melody.mp3" для мелодии
        // skok: new Audio("audio/jump_melody.mp3"), // Загрузка аудиофайла "audio/jump_melody.mp3" для звука прыжка
        // moneta: new Audio("audio/coin_melody.mp3"), // Загрузка аудиофайла "audio/coin_melody.mp3" для звука получения монеты
      },
      kontroler: {}, // Объект, содержащий различные контроллеры
    };

    this.dane.kontroler = {
      entry: new Entry(), // Создание экземпляра класса Entry для обработки ввода
      objects: new Objects(this.dane), // Создание экземпляра класса objects для работы с объектами
      animations: new Animations(), // Создание экземпляра класса Animacje для управления анимациями
      physics: new Physics(), // Создание экземпляра класса Physics для моделирования физики
      render: new Render(), // Создание экземпляра класса Render для отрисовки
      moving: new Moving(), // Создание экземпляра класса moving для управления движением
      death: new Death(), // Создание экземпляра класса death для обработки смерти
    };

    this.dane.canvas.skyCtx.imageSmoothingEnabled = false; // Отключение сглаживания изображений на контексте рисования холста "sky-canvas"
    this.dane.canvas.bgCtx.imageSmoothingEnabled = false; // Отключение сглаживания изображений на контексте рисования холста "bg-canvas"
    this.dane.canvas.fgCtx.imageSmoothingEnabled = false; // Отключение сглаживания изображений на контексте рисования холста "fg-canvas"

    this.start(); // Запуск основной петли игры
  }

  start() {
    let petla = () => {
      this.dane.kontroler.entry.aktualizacja(this.dane); // Обновление ввода
      this.dane.kontroler.moving.aktualizacja(this.dane); // Обновление движения
      this.dane.kontroler.animations.aktualizacja(this.dane); // Обновление анимаций
      this.dane.kontroler.physics.aktualizacja(this.dane); // Обновление физики
      this.dane.kontroler.render.aktualizacja(this.dane); // Обновление отрисовки

      // Воспроизведение аудио
      this.dane.audio.melodia.play();

      this.dane.nrKlatki++; // Увеличение номера текущего кадра
      requestAnimationFrame(petla); // Запрос следующего кадра анимации
    };
    petla(); // Запуск петли анимации
  }
}
window.onload = new Engine(); // Создание экземпляра класса Engine при загрузке страницы
