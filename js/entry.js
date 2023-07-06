class Entry {
  constructor() {
    this.nacisniety = {}; // Объект для отслеживания нажатых клавиш
    document.onkeydown = (event) => {
      this.nacisniety[event.keyCode] = true; // Установка флага для нажатой клавиши
    };

    document.onkeyup = (event) => {
      this.nacisniety[event.keyCode] = false; // Сброс флага для отпущенной клавиши
    };
  }

  aktualizacja(dane) {
    let mario = dane.objects.mario; // Получение ссылки на объект игрока

    if (
      this.nacisnieto(39) &&
      !mario.momentSmierci &&
      mario.obecnyStan != mario.stan.miganie
    ) {
      // Если нажата клавиша "Вправо" и игрок не находится в состоянии смерти или мигания
      mario.kierunek = "prawo"; // Установка направления движения игрока вправо
      mario.pedX = 8; // Установка горизонтальной скорости игрока

      if (mario.pedY == 0) {
        mario.obecnyStan = mario.stan.moving; // Установка состояния игрока на "порuszanie", если он не прыгает
      } else {
        mario.obecnyStan = mario.stan.skakanie; // Установка состояния игрока на "скакание", если он прыгает
      }
    } else if (
      this.nacisnieto(37) &&
      !mario.momentSmierci &&
      mario.obecnyStan != mario.stan.miganie
    ) {
      // Если нажата клавиша "Влево" и игрок не находится в состоянии смерти или мигания
      mario.kierunek = "lewo"; // Установка направления движения игрока влево
      mario.pedX = -8; // Установка горизонтальной скорости игрока

      if (mario.pedY == 0) {
        mario.obecnyStan = mario.stan.moving; // Установка состояния игрока на "порuszanie", если он не прыгает
      } else {
        mario.obecnyStan = mario.stan.skakanie; // Установка состояния игрока на "скакание", если он прыгает
      }
    } else {
      mario.pedX = 0; // Обнуление горизонтальной скорости игрока, если не нажата клавиша "Вправо" или "Влево"
    }

    if (
      this.nacisnieto(32) &&
      !mario.momentSmierci &&
      mario.obecnyStan != mario.stan.miganie
    ) {
      // Если нажата клавиша "Пробел" и игрок не находится в состоянии смерти или мигания
      mario.obecnyStan = mario.stan.skakanie; // Установка состояния игрока на "скакание"
    }

    if (
      this.nacisnieto(17) &&
      !mario.momentSmierci &&
      mario.obecnyStan != mario.stan.miganie
    ) {
      // Если нажата клавиша "Ctrl" и игрок не находится в состоянии смерти или мигания
      if (mario.mozeStrzelac && mario.naladowany) {
        mario.naladowany = false; // Установка флага на перезарядку

        setTimeout(() => {
          mario.naladowany = true;
        }, 300); // Задержка для перезарядки

        let p = 5;
        if (mario.kierunek === "prawo" || mario.pedX > 0) {
          p = 10; // Если игрок движется вправо, скорость полета снаряда будет 10
        } else {
          p = -10; // Если игрок движется влево, скорость полета снаряда будет -10
        }
        dane.objects.tabelaPociskow.push(
          new Bullet(
            dane.grafika,
            mario.x + mario.w / 2,
            mario.y + mario.h / 2,
            24,
            24,
            p
          )
        ); // Создание и добавление нового снаряда в таблицу снарядов
      }
    }
  }

  nacisnieto(kod) {
    return this.nacisniety[kod]; // Возвращает true, если клавиша с заданным кодом нажата, иначе false
  }
}
