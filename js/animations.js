// Класс Animacje, отвечающий за анимации

class Animations {
  aktualizacja(dane) {
    // Метод aktualizacja, обновляющий все анимации
    this.niebo(dane); // Вызов анимации неба
    this.mario(dane); // Вызов анимации Марио
    this.monster(dane); // Вызов анимации монстров
    this.moneta(dane); // Вызов анимации монет
    this.bloczekMonet(dane); // Вызов анимации блоков с монетами
    this.mushroomBlock(dane); // Вызов анимации блоков с грибами
    this.bullet(dane); // Вызов анимации снарядов
  }

  niebo(dane) {
    // Метод niebo, отвечающий за анимацию неба
    dane.objects.niebo.x -= 1; // Изменение координаты X неба
    if (dane.objects.niebo.x < -1440) {
      // Если координата X неба меньше -1440 (за границей экрана)
      dane.objects.niebo.x = 0; // Переместить небо в начало экрана
    }
  }

  mario(dane) {
    // Метод mario, отвечающий за анимацию Марио
    dane.objects.mario.obecnyStan.animacja(dane); // Вызов анимации текущего состояния Марио
  }

  monster(dane) {
    // Метод monster, отвечающий за анимацию монстров
    dane.objects.tabelaPotworow.forEach(function (p) {
      // Для каждого монстра в таблице монстров
      p.obecnyStan.animacja(dane); // Вызов анимации текущего состояния монстра
    });
  }

  moneta(dane) {
    // Метод moneta, отвечающий за анимацию монет
    dane.objects.tabelaMonet.forEach(function (m) {
      // Для каждой монеты в таблице монет
      m.obecnyStan.animacja(dane); // Вызов анимации текущего состояния монеты
    });
  }

  bloczekMonet(dane) {
    // Метод bloczekMonet, отвечающий за анимацию блоков с монетами
    dane.objects.tabelaBloczkowMonet.forEach((bm) => {
      // Для каждого блока с монетами в таблице блоков с монетами
      bm.moneta.obecnyStan.animacja(dane); // Вызов анимации текущего состояния монеты блока
      bm.obecnyStan.animacja(dane); // Вызов анимации текущего состояния блока
    });
  }

  mushroomBlock(dane) {
    // Метод MushroomBlock, отвечающий за анимацию блоков с грибами
    dane.objects.tabelaBloczkowGrzybow.forEach((bg) => {
      // Для каждого блока с грибами в таблице блоков с грибами
      bg.obecnyStan.animacja(dane); // Вызов анимации текущего состояния блока
    });
  }

  bullet(dane) {
    // Метод pocisk, отвечающий за анимацию снарядов
    dane.objects.tabelaPociskow.forEach((p) => {
      // Для каждого снаряда в таблице снарядов
      p.obecnyStan.animacja(dane); // Вызов анимации текущего состояния снаряда
    });
  }
}
