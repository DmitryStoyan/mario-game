class FragmentBrick {
  constructor(img, x, y, w, h, n) {
    // В зависимости от значения n выбираем соответствующий фрагмент изображения
    // и задаем скорости движения по осям X и Y
    if (n == 0) {
      this.picture = new Picture(img, 3408, 160, 8, 8);
      this.pedX = -2;
      this.pedY = -5;
    } else if (n == 1) {
      this.picture = new Picture(img, 3416, 160, 8, 8);
      this.pedX = 2;
      this.pedY = -5;
    } else if (n == 2) {
      this.picture = new Picture(img, 3408, 168, 8, 8);
      this.pedX = -3;
      this.pedY = 0;
    } else {
      this.picture = new Picture(img, 3416, 168, 8, 8);
      this.pedX = 3;
      this.pedY = 0;
    }

    // Задаем состояние объекта fragmentBrick
    this.stan = {
      moving: {
        // Функция движения фрагмента
        ruch: (dane) => {
          // Изменяем координаты объекта на значения скоростей движения
          this.y += this.pedY;
          this.x += this.pedX;

          // Если фрагмент выходит за пределы карты по оси Y,
          // удаляем его из списка фрагментов
          if (this.y > dane.objects.mapa.h) {
            let nrFragmentu = dane.objects.tabelaFragmentowCegiel.indexOf(this);
            dane.objects.tabelaFragmentowCegiel.splice(nrFragmentu, 1);
          }
        },
      },
    };

    // Устанавливаем начальное состояние объекта fragmentBrick как "moving"
    this.obecnyStan = this.stan.moving;

    // Задаем координаты, ширину, высоту и тип объекта fragmentBrick
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.typ = "fragmentBrick";
  }
}
