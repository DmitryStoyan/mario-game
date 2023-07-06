class Moving {
  aktualizacja(dane) {
    this.mario(dane); // Обновление состояния объекта "mario"
    this.monster(dane); // Обновление состояния объектов в таблице "tabelaPotworow"
    this.bloczekMonet(dane); // Обновление состояния объектов в таблице "tabelaBloczkowMonet"
    this.platforma(dane); // Обновление состояния объектов в таблице "tabelaPlatform"
    this.fragmentBrick(dane); // Обновление состояния объектов в таблице "tabelaFragmentowCegiel"
    this.blockOfBricks(dane); // Обновление состояния объектов в таблице "tabelaBloczkowCegiel"
    this.mushroomBlock(dane); // Обновление состояния объектов в таблице "tabelaBloczkowGrzybow"
    this.grzyb(dane); // Обновление состояния объектов в таблице "tabelaGrzybow"
    this.bullet(dane); // Обновление состояния объектов в таблице "tabelaPociskow"
  }

  mario(dane) {
    dane.objects.mario.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния объекта "mario"
  }

  monster(dane) {
    dane.objects.tabelaPotworow.forEach(function (p) {
      p.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaPotworow"
    });
  }

  bloczekMonet(dane) {
    dane.objects.tabelaBloczkowMonet.forEach((bm) => {
      bm.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaBloczkowMonet"
    });
  }

  platforma(dane) {
    dane.objects.tabelaPlatform.forEach((p) => {
      p.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaPlatform"
    });
  }

  blockOfBricks(dane) {
    dane.objects.tabelaBloczkowCegiel.forEach((bc) => {
      bc.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaBloczkowCegiel"
    });
  }

  fragmentBrick(dane) {
    dane.objects.tabelaFragmentowCegiel.forEach((fc) => {
      fc.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaFragmentowCegiel"
    });
  }

  mushroomBlock(dane) {
    dane.objects.tabelaBloczkowGrzybow.forEach((bg) => {
      bg.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaBloczkowGrzybow"
    });
  }

  grzyb(dane) {
    dane.objects.tabelaGrzybow.forEach((g) => {
      g.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaGrzybow"
    });
  }

  bullet(dane) {
    dane.objects.tabelaPociskow.forEach((p) => {
      p.obecnyStan.ruch(dane); // Вызов метода "ruch" текущего состояния каждого объекта в таблице "tabelaPociskow"
    });
  }
}
