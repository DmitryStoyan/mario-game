class Monster {
  constructor(img, x, y, w, h) {
    this.picture = new Picture(img, 3408, 96, 16, 16); // Создание изображения для объекта "monster"
    this.animacja = {
      moving: {
        klatka: [
          new Picture(img, 3408, 96, 16, 16),
          new Picture(img, 3424, 96, 16, 16),
          new Picture(img, 3440, 96, 16, 16),
          new Picture(img, 3456, 96, 16, 16),
        ],
        obecnaKlatka: 0,
      },
      skok: new Picture(img, 3408, 96, 16, 16), // Изображение для анимации прыжка
    };
    this.stan = {
      moving: {
        ruch: (dane) => {
          if (this.kierunek === "prawo") {
            this.x += this.pedX; // Изменение координаты x при движении вправо
          } else {
            this.x -= this.pedX; // Изменение координаты x при движении влево
          }
        },
        animacja: (dane) => {
          if (dane.nrKlatki % 5 == 0) {
            this.picture =
              this.animacja.moving.klatka[this.animacja.moving.obecnaKlatka];
            this.animacja.moving.obecnaKlatka++;
          }

          if (this.animacja.moving.obecnaKlatka > 3) {
            this.animacja.moving.obecnaKlatka = 0;
          }
        },
      },
      skakanie: {
        ruch: (dane) => {
          return; // Нет движения во время прыжка
        },
        animacja: (dane) => {
          this.picture = this.animacja.skok; // Установка изображения для анимации прыжка
        },
      },
    };
    this.obecnyStan = this.stan.moving; // Установка начального состояния объекта "monster" - "moving"
    this.kierunek = "prawo"; // Начальное направление объекта "monster" - "prawo"
    this.pedY = 0; // Начальная скорость по вертикали равна 0
    this.pedX = 1; // Начальная скорость по горизонтали равна 1
    this.typ = "monster"; // Тип объекта "monster" - "monster"
    this.x = x; // Координата x объекта "monster"
    this.y = y; // Координата y объекта "monster"
    this.w = w; // Ширина объекта "monster"
    this.h = h; // Высота объекта "monster"
  }
}
