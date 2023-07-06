// Класс BlockOfBricks, отвечающий за создание и управление блоком из кирпичей

class BlockOfBricks {
  constructor(img, x, y, w, h) {
    // Конструктор класса. Принимает изображение, координаты, ширину и высоту блока
    this.picture = new Picture(img, 3440, 128, 16, 16); // Создание объекта изображения для блока
    this.stan = {
      // Состояния блока
      drganie: {
        licznik: 0,
        ruch: (dane) => {
          // Анимация дрожания блока
          this.obecnyStan.licznik++;
          if (this.obecnyStan.licznik < 5) {
            this.y -= 2;
          } else if (this.obecnyStan.licznik < 10) {
            this.y += 2;
          } else {
            this.obecnyStan.licznik = 0;
            this.obecnyStan = this.stan.spoczynek;
          }
          return;
        },
      },
      spoczynek: {
        ruch: (dane) => {
          // Состояние блока в покое
          this.y = this.sy;
          return;
        },
      },
    };
    this.obecnyStan = this.stan.spoczynek; // Текущее состояние блока
    this.x = x; // Координата X блока
    this.y = y; // Координата Y блока
    this.sy = y; // Исходная координата Y блока
    this.w = w; // Ширина блока
    this.h = h; // Высота блока
    this.typ = "blockOfBricks"; // Тип блока
  }
}
