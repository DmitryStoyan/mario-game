class Moneta {
  constructor(img, x, y, w, h) {
    // Создание объекта изображения монеты с использованием заданных параметров
    this.picture = new Picture(img, 3408, 112, 16, 16);

    // Создание объекта анимации для вращения монеты
    this.animacja = {
      obrot: {
        // Задание кадров анимации вращения монеты
        klatka: [
          new Picture(img, 3408, 112, 16, 16),
          new Picture(img, 3424, 112, 16, 16),
          new Picture(img, 3440, 112, 16, 16),
          new Picture(img, 3456, 112, 16, 16),
        ],
        // Текущий кадр анимации вращения монеты
        obecnaKlatka: 0,
      },
    };

    // Создание состояния анимации для вращения монеты
    this.stan = {
      obrot: {
        // Анимация для вращения монеты
        animacja: (dane) => {
          if (dane.nrKlatki % 5 == 0) {
            this.picture =
              this.animacja.obrot.klatka[this.animacja.obrot.obecnaKlatka];
            this.animacja.obrot.obecnaKlatka++;
          }

          if (this.animacja.obrot.obecnaKlatka > 3) {
            this.animacja.obrot.obecnaKlatka = 0;
          }
        },
      },
    };

    // Установка текущего состояния монеты на состояние вращения
    this.obecnyStan = this.stan.obrot;

    // Установка координаты x монеты
    this.x = x;

    // Установка координаты y монеты
    this.y = y;

    // Установка ширины монеты
    this.w = w;

    // Установка высоты монеты
    this.h = h;

    // Установка типа объекта как "moneta"
    this.typ = "moneta";
  }
}
