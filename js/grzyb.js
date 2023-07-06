class Grzyb {
  constructor(img, x, y, w, h, r) {
    // В зависимости от значения r выбираем соответствующий фрагмент изображения
    // и задаем скорость движения по оси X
    if (r == "zycie") {
      this.picture = new Picture(img, 3424, 144, 16, 16);
      this.pedX = 2;
    } else if (r == "powiekszenie") {
      this.picture = new Picture(img, 3408, 144, 16, 16);
      this.pedX = 2;
    } else if (r == "strzelanie") {
      this.picture = new Picture(img, 3440, 144, 16, 16);
      this.pedX = 0;
    }

    // Задаем состояния объекта Grzyb
    this.stan = {
      moving: {
        // Функция движения гриба
        ruch: (dane) => {
          // Изменяем координату x объекта на значение скорости движения по оси X
          this.x += this.pedX;
        },
      },
      wyjscie: {
        licznik: 0,
        ruch: (dane) => {
          // Увеличиваем счетчик текущего состояния на 1
          this.obecnyStan.licznik++;

          if (this.obecnyStan.licznik < 5) {
            // Перемещаем объект вверх со скоростью pedY
            this.pedY -= 2;
            this.y += this.pedY;
          } else if (this.obecnyStan.licznik < 8) {
            // Продолжаем перемещение объекта вверх со скоростью pedY
            this.y += this.pedY;
          } else {
            // После достижения определенного счетчика изменяем состояние на "moving"
            this.obecnyStan = this.stan.moving;
          }
        },
      },
    };

    // Устанавливаем начальное состояние объекта Grzyb как "wyjscie"
    this.obecnyStan = this.stan.wyjscie;

    // Задаем координаты, ширину, высоту, скорость по оси Y, тип и род тип объекта Grzyb
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pedY = 0;
    this.rodzaj = r;
    this.typ = "grzyb";
  }
}
