class Flag {
  constructor(img, x, y, w, h) {
    // Создаем новый объект picture с заданными параметрами изображения
    this.picture = new Picture(img, 3568, 192, 16, 16);

    // Задаем состояния объекта Flag
    this.stan = {
      aktywna: {
        // Движение в активном состоянии не определено
        ruch: (dane) => {},
      },
      zdjeta: {
        // Движение в состоянии, когда флаг был снят
        ruch: (dane) => {
          // Если текущая координата y меньше, чем y + 302
          if (this.y < y + 302) {
            // Уменьшаем значение координаты y на значение pedY
            this.y -= this.pedY;
          }
        },
      },
    };

    // Устанавливаем начальное состояние объекта Flag как активное
    this.obecnyStan = this.stan.aktywna;

    // Задаем координаты, ширину, высоту и тип объекта Flag
    this.x = x;
    this.y = y;
    this.pedY = -3; // Скорость движения по оси Y
    this.w = w;
    this.h = h;
    this.typ = "flag";
  }
}
