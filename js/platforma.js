class Platforma {
  constructor(img, x, y, w, h, z) {
    this.picture = new Picture(img, 3408, 192, 48, 8); // Изображение платформы
    this.stan = {
      moving: {
        ruch: (dane) => {
          // Функция для перемещения платформы
          if (this.x <= this.zakres.min + dane.objects.mapa.x) {
            // Если платформа достигла левого края заданного диапазона
            this.x = this.zakres.min + dane.objects.mapa.x; // Установить позицию платформы в левую границу диапазона
            this.pedX = 2; // Установить скорость перемещения платформы вправо
          }
          if (this.x + this.w >= this.zakres.max + dane.objects.mapa.x) {
            // Если платформа достигла правого края заданного диапазона
            this.x = this.zakres.max - this.w + dane.objects.mapa.x; // Установить позицию платформы в правую границу диапазона
            this.pedX = -2; // Установить скорость перемещения платформы влево
          }

          this.x += this.pedX; // Изменение позиции платформы на основе скорости перемещения
        },
      },
    };
    this.obecnyStan = this.stan.moving; // Установить текущее состояние платформы в состояние "moving"
    this.x = x; // Координата X платформы
    this.y = y; // Координата Y платформы
    this.w = w; // Ширина платформы
    this.h = h; // Высота платформы
    this.pedX = 2; // Скорость перемещения платформы по горизонтали
    this.zakres = z; // Диапазон движения платформы
    this.typ = "platforma"; // Тип объекта - платформа
  }
}
