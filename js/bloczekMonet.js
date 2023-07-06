// Класс BloczekMonet, отвечающий за создание и управление блоком с монетами

class BloczekMonet {
  constructor(img, x, y, w, h) {
    // Конструктор класса. Принимает изображение, координаты, ширину и высоту блока
    this.picture = new Picture(img, 3408, 128, 16, 16); // Создание объекта изображения для блока
    this.animacja = {
      // Анимации блока
      pelny: new Picture(img, 3408, 128, 16, 16), // Анимация блока с монетами
      pusty: new Picture(img, 3424, 128, 16, 16), // Анимация пустого блока
    };
    this.stan = {
      // Состояния блока
      drganie: {
        licznik: 0,
        ruch: (dane) => {
          // Анимация дрожания блока
          this.obecnyStan.licznik++;
          if (this.obecnyStan.licznik < 5) {
            this.y -= 2;
            if (this.monety > 0) this.moneta.y -= 8;
          } else if (this.obecnyStan.licznik < 10) {
            this.y += 2;
            if (this.monety > 0) this.moneta.y -= 5;
          } else if (this.obecnyStan.licznik < 17) {
            if (this.monety > 0) this.moneta.y -= 3;
          } else {
            this.obecnyStan.licznik = 0;
            this.obecnyStan = this.stan.spoczynek;
          }
          return;
        },
        animacja: (dane) => {
          // Анимация блока в зависимости от наличия монет в блоке
          if (this.monety > 0) {
            this.picture = this.animacja.pelny;
          } else {
            this.picture = this.animacja.pusty;
          }
        },
      },
      spoczynek: {
        ruch: (dane) => {
          // Состояние блока в покое
          this.y = this.sy;
          this.moneta.y = this.sy;
          return;
        },
        animacja: (dane) => {
          // Анимация блока в зависимости от наличия монет в блоке
          if (this.monety > 0) {
            this.picture = this.animacja.pelny;
          } else {
            this.picture = this.animacja.pusty;
          }
        },
      },
    };
    this.obecnyStan = this.stan.spoczynek; // Текущее состояние блока
    this.x = x; // Координата X блока
    this.y = y; // Координата Y блока
    this.sy = y; // Исходная координата Y блока
    this.w = w; // Ширина блока
    this.h = h; // Высота блока
    this.monety = 10; // Количество монет в блоке
    this.moneta = new Moneta(img, x, y, w, h); // Создание объекта монеты
    this.typ = "bloczekMonet"; // Тип блока
  }
}
