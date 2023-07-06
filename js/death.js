let startTime; // Переменная для хранения времени начала игры
let seconds; // Переменная для хранения количества секунд игры

class Death {
  constructor() {
    this.executed = false;
  }

  strataZycia(dane) {
    // Функция сохранения результата игры
    function saveResult() {
      const result = {
        name: playerName,
        money: dane.objects.mario.monety,
        time: seconds, // Добавляем время игры в результат
      };

      // Получение ранее сохраненных результатов из локального хранилища
      let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

      // Добавление текущего результата в список рекордов
      leaderboard.push(result);

      // // Сортировка списка рекордов по количеству спасенных
      // leaderboard.sort((a, b) => b.stars - a.stars);

      // Сохранение списка рекордов в локальное хранилище
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

      // Отображение таблицы рекордов
      showLeaderboard();
    }

    // Функция отображения таблицы рекордов
    let leaderboardTable = document.getElementById("leaderboard-table");
    function showLeaderboard() {
      // const leaderboardTable = document.getElementById("leaderboard-table");
      const leaderboardBody = document.getElementById("leaderboard-body");

      // Получение списка рекордов из локального хранилища
      const leaderboard = JSON.parse(localStorage.getItem("leaderboard"));

      // Очистка таблицы рекордов
      leaderboardBody.innerHTML = "";

      // Перебор рекордов и добавление их в таблицу
      leaderboard.forEach((result, index) => {
        const row = leaderboardBody.insertRow();

        // Добавление класса для текущего игрока
        if (result.name === playerName) {
          row.classList.add("current-player");
        }

        // Добавление данных в ячейки таблицы
        const nameCell = row.insertCell();
        nameCell.textContent = result.name;

        const rescuedCell = row.insertCell();
        rescuedCell.textContent = result.money;

        const timeCell = row.insertCell();
        timeCell.textContent = result.time;
      });

      // Показывать таблицу рекордов
      const leaderboardOver = document.getElementById("leaderboard_over");
      leaderboardOver.classList.remove("hidden");
    }

    let previousResults = {};

    function showTheFinishPopUp(date, name) {
      updateLeaderboard();
      saveResult();
      // clearInterval(intervalID);

      const popup = document.querySelector(".finish-popup");
      // const replayButton = popup.querySelector(".finish__button");
      const currentResultsList = popup.querySelectorAll(
        ".finish__list .finish__item"
      );
      const finishHeader = popup.querySelector(".finish__header");

      const resultDate = createTheDate(date);

      for (const result of currentResultsList) {
        switch (result.dataset.type) {
          case "money":
            result.textContent = "Количество спасенных жизней: " + money;
            break;
          case "name":
            result.textContent = "Имя игрока: " + playerName;
            break;
        }
      }

      previousResults.playerMonety = dane.objects.mario.monety;
      previousResults.name = name;
    }

    const replayButton = document.querySelector(".finish__button");

    replayButton.addEventListener("click", function () {
      location.reload();
    });

    let mario = dane.objects.mario; // Получение ссылки на объект игрока

    if (mario.zycia > 0) {
      // Если у игрока есть жизни
      mario.zycia--; // Уменьшение количества жизней игрока
    }
    if (mario.zycia < 1) {
      if (!this.executed) {
        // Останавливаем секундомер
        const endTime = new Date();
        const timeDiff = endTime - startTime;

        // timeDiff содержит разницу в миллисекундах, можно преобразовать в секунды
        seconds = Math.floor(timeDiff / 1000);
        saveResult();
        this.executed = true;
      }

      setTimeout(function () {
        location.reload(); // Перезагрузка страницы через 1 секунду
      }, 15000);
    } else {
      // Сдвиг всех объектов на экране влево после смерти игрока
      for (let i = 0; i < dane.objects.tabelaScian.length; i++) {
        dane.objects.tabelaScian[i].x -= dane.objects.mapa.x;
      }

      for (let i = 0; i < dane.objects.tabelaPotworow.length; i++) {
        dane.objects.tabelaPotworow[i].x -= dane.objects.mapa.x;
      }

      for (let i = 0; i < dane.objects.tabelaMonet.length; i++) {
        dane.objects.tabelaMonet[i].x -= dane.objects.mapa.x;
      }
      for (let i = 0; i < dane.objects.tabelaBloczkowMonet.length; i++) {
        dane.objects.tabelaBloczkowMonet[i].moneta.x -= dane.objects.mapa.x;
        dane.objects.tabelaBloczkowMonet[i].x -= dane.objects.mapa.x;
      }
      for (let i = 0; i < dane.objects.tabelaPlatform.length; i++) {
        dane.objects.tabelaPlatform[i].x -= dane.objects.mapa.x;
      }
      for (let i = 0; i < dane.objects.tabelaBloczkowCegiel.length; i++) {
        dane.objects.tabelaBloczkowCegiel[i].x -= dane.objects.mapa.x;
      }
      for (let i = 0; i < dane.objects.tabelaFragmentowCegiel.length; i++) {
        dane.objects.tabelaFragmentowCegiel[i].x -= dane.objects.mapa.x;
      }
      for (let i = 0; i < dane.objects.tabelaBloczkowGrzybow.length; i++) {
        dane.objects.tabelaBloczkowGrzybow[i].x -= dane.objects.mapa.x;
      }
      for (let i = 0; i < dane.objects.tabelaGrzybow.length; i++) {
        dane.objects.tabelaGrzybow[i].x -= dane.objects.mapa.x;
      }
      for (let i = 0; i < dane.objects.tabelaPociskow.length; i++) {
        dane.objects.tabelaPociskow[i].x -= dane.objects.mapa.x;
      }

      dane.objects.mapa.x = mario.x = mario.y = 0; // Сброс позиции карты и игрока
      mario.pedY = 1; // Установка вертикальной скорости игрока
      mario.obecnyStan = mario.stan.stanie; // Установка текущего состояния игрока
      mario.pedX = 8; // Установка горизонтальной скорости игрока
      mario.momentSmierci = false; // Сброс флага момента смерти игрока
    }
  }
}

const death = new Death();

function startTimer() {
  startTime = new Date(); // Запоминаем время начала игры
}

setInterval(function () {
  if (!death.executed && startTime) {
    const currentTime = new Date();
    const timeDiff = currentTime - startTime;
    seconds = Math.floor(timeDiff / 1000);
  }
}, 1000);

startTimer();
