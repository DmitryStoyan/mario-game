// Класс mushroomBlock, отвечающий за создание и управление блоком с грибами

class MushroomBlock {
  constructor(img, x, y, w, h, r) {
    // Конструктор класса. Принимает изображение, координаты, ширину, высоту и тип блока
    this.picture = new Picture(img, 3408, 128, 16, 16); // Создание объекта изображения для блока
    this.animacja = {
      // Анимации блока
      pelny: new Picture(img, 3408, 128, 16, 16), // Анимация блока с грибом
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
          } else if (this.obecnyStan.licznik < 10) {
            this.y += 2;
          } else {
            this.obecnyStan.licznik = 0;
            this.obecnyStan = this.stan.spoczynek;
          }
          return;
        },
        animacja: (dane) => {
          // Анимация блока в зависимости от его состояния (полный или пустой)
          if (this.pelny) {
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
          return;
        },
        animacja: (dane) => {
          // Анимация блока в зависимости от его состояния (полный или пустой)
          if (this.pelny) {
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
    this.pelny = true; // Флаг, указывающий, является ли блок полным
    this.rodzaj = r; // Тип блока
    this.typ = "mushroomBlock"; // Тип блока
  }
}
