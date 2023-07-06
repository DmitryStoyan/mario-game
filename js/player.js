const playerNameElement = document.getElementById("player-name");
let playerName;

window.onload = function () {
  playerName = prompt("Введите ваше имя:");
  if (playerName === "") {
    location.reload();
  } else {
    playerNameElement.textContent = playerName;
    // startGame(playerName);
  }
};

// // Функция сохранения результата игры
// function saveResult() {
//   const result = {
//     name: playerName,
//     time: secondsCounter,
//     stars: star.starsCounter,
//   };

//   // Получение ранее сохраненных результатов из локального хранилища
//   let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

//   // Добавление текущего результата в список рекордов
//   leaderboard.push(result);

//   // Сортировка списка рекордов по количеству спасенных
//   leaderboard.sort((a, b) => b.stars - a.stars);

//   // Сохранение списка рекордов в локальное хранилище
//   localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

//   // Отображение таблицы рекордов
//   showLeaderboard();
// }

// // Функция отображения таблицы рекордов
// let leaderboardTable = document.getElementById("leaderboard-table");
// function showLeaderboard() {
//   const leaderboardTable = document.getElementById("leaderboard-table");
//   const leaderboardBody = document.getElementById("leaderboard-body");

//   // Получение списка рекордов из локального хранилища
//   const leaderboard = JSON.parse(localStorage.getItem("leaderboard"));

//   // Очистка таблицы рекордов
//   leaderboardBody.innerHTML = "";

//   // Перебор рекордов и добавление их в таблицу
//   leaderboard.forEach((result, index) => {
//     const row = leaderboardBody.insertRow();

//     // Добавление класса для текущего игрока
//     if (result.name === playerName) {
//       row.classList.add("current-player");
//     }

//     // Добавление данных в ячейки таблицы
//     const nameCell = row.insertCell();
//     nameCell.textContent = result.name;

//     const rescuedCell = row.insertCell();
//     rescuedCell.textContent = result.monety;
//   });

//   // Показывать таблицу рекордов
//   const leaderboardOver = document.getElementById("leaderboard_over");
//   leaderboardOver.classList.remove("hidden");
// }

// let previousResults = {};

// function showTheFinishPopUp(date, name) {
//   updateLeaderboard();
//   saveResult();
//   // clearInterval(intervalID);

//   const popup = document.querySelector(".finish-popup");
//   const replayButton = popup.querySelector(".finish__button");
//   const currentResultsList = popup.querySelectorAll(
//     ".finish__list .finish__item"
//   );
//   const finishHeader = popup.querySelector(".finish__header");

//   const resultDate = createTheDate(date);

//   for (const result of currentResultsList) {
//     switch (result.dataset.type) {
//       case "monety":
//         result.textContent = "Количество спасенных жизней: " + monety;
//         break;
//       case "name":
//         result.textContent = "Имя игрока: " + playerName;
//         break;
//     }
//   }

//   previousResults.playerMonety = dane.objects.mario.monety;
//   previousResults.name = name;

//   popup.classList.remove("hidden");

//   function replayButtonClickHandler(event) {
//     event.preventDefault();

//     popup.classList.add("hidden");

//     // startGame();

//     replayButton.removeEventListener("click", replayButtonClickHandler);
//   }

//   replayButton.addEventListener("click", replayButtonClickHandler);
// }
