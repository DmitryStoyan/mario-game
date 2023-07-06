class Bullet {
  constructor(img, x, y, w, h, p) {
    this.picture = new Picture(img, 3408, 176, 8, 8); // Изображение снаряда
    this.animacja = {
      obrot: {
        klatka: [
          new Picture(img, 3408, 176, 8, 8),
          new Picture(img, 3416, 176, 8, 8),
          new Picture(img, 3408, 184, 8, 8),
          new Picture(img, 3416, 184, 8, 8),
        ],
        obecnaKlatka: 0,
      },
      wybuch: {
        klatka: [
          new Picture(img, 3424, 176, 16, 16),
          new Picture(img, 3440, 176, 16, 16),
          new Picture(img, 3456, 176, 16, 16),
          new Picture(img, 3472, 176, 16, 16),
        ],
        obecnaKlatka: 0,
      },
    };
    this.stan = {
      wybuch: {
        ruch: (dane) => {
          //this.x += this.pedX;
        },
        animacja: (dane) => {
          this.w = 2 * w; // Установка новой ширины снаряда
          this.h = 2 * h; // Установка новой высоты снаряда
          if (dane.nrKlatki % 5 == 0) {
            // Проверка текущего номера кадра
            this.picture =
              this.animacja.wybuch.klatka[this.animacja.wybuch.obecnaKlatka]; // Установка текущего изображения взрыва
            this.animacja.wybuch.obecnaKlatka++; // Увеличение номера текущего кадра взрыва
          }

          if (this.animacja.wybuch.obecnaKlatka > 3) {
            // Если все кадры взрыва проиграны
            let nrPocisku = dane.objects.tabelaPociskow.indexOf(this); // Получение индекса текущего снаряда в таблице снарядов
            dane.objects.tabelaPociskow.splice(nrPocisku, 1); // Удаление снаряда из таблицы снарядов
          }
        },
      },
      obrot: {
        licznik: 0,
        ruch: (dane) => {
          this.x += this.pedX; // Изменение позиции снаряда по горизонтали
          if (this.y > dane.objects.mapa.h) {
            // Если снаряд находится за пределами высоты карты
            if (this.y > dane.objects.mapa.h) {
              let nrPocisku = dane.objects.tabelaPociskow.indexOf(this); // Получение индекса текущего снаряда в таблице снарядов
              dane.objects.tabelaPociskow.splice(nrPocisku, 1); // Удаление снаряда из таблицы снарядов
            }
          }
        },
        animacja: (dane) => {
          if (dane.nrKlatki % 5 == 0) {
            // Проверка текущего номера кадра
            this.picture =
              this.animacja.obrot.klatka[this.animacja.obrot.obecnaKlatka]; // Установка текущего изображения вращения
            this.animacja.obrot.obecnaKlatka++; // Увеличение номера текущего кадра вращения
          }

          if (this.animacja.obrot.obecnaKlatka > 3) {
            // Если все кадры вращения проиграны
            this.animacja.obrot.obecnaKlatka = 0; // Сброс номера текущего кадра вращения
          }
        },
      },
    };
    this.obecnyStan = this.stan.obrot; // Установка текущего состояния снаряда в состояние "obrot"
    this.x = x; // Координата X снаряда
    this.y = y; // Координата Y снаряда
    this.w = w; // Ширина снаряда
    this.h = h; // Высота снаряда
    this.pedX = p; // Скорость перемещения снаряда по горизонтали
    this.pedY = 0;
    this.typ = "bullet"; // Тип объекта - снаряд
  }
}
