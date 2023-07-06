class Physics {
  aktualizacja(dane) {
    // Метод обновления физики
    if (dane.objects.mario.obecnyStan != dane.objects.mario.stan.miganie) {
      // Проверка состояния Марио
      this.grawitacja(dane.objects.mario); // Вызов метода гравитации для Марио
    }

    // console.log(dane.objects.mario.obecnyStan); // Вывод текущего состояния Марио в консоль

    dane.objects.tabelaPotworow.forEach((p) => {
      // Перебор таблицы монстров
      this.grawitacja(p); // Вызов метода гравитации для каждого монстра
    });

    dane.objects.tabelaFragmentowCegiel.forEach((fc) => {
      // Перебор таблицы фрагментов блоков
      this.grawitacja(fc); // Вызов метода гравитации для каждого фрагмента блока
    });

    dane.objects.tabelaGrzybow.forEach((g) => {
      // Перебор таблицы грибов
      if (g.obecnyStan != g.stan.wyjscie) {
        // Проверка состояния гриба
        this.grawitacja(g); // Вызов метода гравитации для гриба
      }
    });

    dane.objects.tabelaPociskow.forEach((p) => {
      // Перебор таблицы снарядов
      if (p.obecnyStan != p.stan.wybuch) {
        // Проверка состояния снаряда
        this.grawitacja(p); // Вызов метода гравитации для снаряда
      }
    });

    this.wykrywanieKolizji(dane); // Вызов метода обнаружения столкновений
    this.death(dane); // Вызов метода обработки смерти
  }

  grawitacja(obiekt) {
    // Метод гравитации
    if (obiekt.typ === "mario" && !obiekt.momentSmierci) {
      // Проверка типа объекта и его состояния
      obiekt.obecnyStan = obiekt.stan.skakanie; // Установка текущего состояния объекта на "прыжок"
    }
    obiekt.pedY += 1; // Увеличение вертикальной скорости объекта
    obiekt.y += obiekt.pedY; // Изменение положения объекта по вертикали
  }

  death(dane) {
    // Метод обработки смерти
    if (dane.objects.mario.y > dane.objects.mapa.h) {
      // Проверка выхода Марио за границы карты
      dane.objects.mario.momentSmierci = true; // Установка флага момента смерти Марио
      dane.kontroler.death.strataZycia(dane); // Вызов метода обработки потери жизни
      dane.objects.mario.mozeStrzelac = false;
      dane.objects.mario.mozeNiszczyc = false;
    }
  }

  wykrywanieKolizji(dane) {
    //(обнаружение столкновений) проверяет, произошло ли столкновение между двумя объектами.
    let wykrywanieKolizji = (obiekt1, obiekt2) => {
      if (
        obiekt1.x < obiekt2.x + obiekt2.w &&
        obiekt1.x + obiekt1.w > obiekt2.x &&
        obiekt1.y < obiekt2.y + obiekt2.h &&
        obiekt1.y + obiekt1.h > obiekt2.y
      ) {
        this.kolizja(obiekt1, obiekt2, dane);
      }
    };

    let mario = dane.objects.mario;
    // Если флаг "momentSmierci" объекта "mario" равен false и текущее состояние "obecnyStan" объекта "mario" не равно "miganie", то выполняется следующий код
    if (!mario.momentSmierci && mario.obecnyStan != mario.stan.miganie) {
      dane.objects.tabelaScian.forEach((wall) => {
        wykrywanieKolizji(mario, wall);
      });

      dane.objects.tabelaMonet.forEach((moneta) => {
        wykrywanieKolizji(mario, moneta);
      });

      dane.objects.tabelaBloczkowMonet.forEach((bloczekMonet) => {
        wykrywanieKolizji(mario, bloczekMonet);
      });

      dane.objects.tabelaPlatform.forEach((platforma) => {
        wykrywanieKolizji(mario, platforma);
      });

      dane.objects.tabelaBloczkowCegiel.forEach((blockOfBricks) => {
        wykrywanieKolizji(mario, blockOfBricks);
      });

      dane.objects.tabelaBloczkowGrzybow.forEach((mushroomBlock) => {
        wykrywanieKolizji(mario, mushroomBlock);
      });
    }

    dane.objects.tabelaPotworow.forEach((monster) => {
      // Для каждого элемента "monster" из массива "tabelaPotworow" объекта "dane.objects" выполняется следующий код
      if (!mario.momentSmierci && mario.obecnyStan != mario.stan.miganie)
        wykrywanieKolizji(mario, monster);

      dane.objects.tabelaScian.forEach((wall) => {
        wykrywanieKolizji(monster, wall);
      });

      dane.objects.tabelaBloczkowMonet.forEach((bloczekMonet) => {
        wykrywanieKolizji(monster, bloczekMonet);
      });

      dane.objects.tabelaPlatform.forEach((platforma) => {
        wykrywanieKolizji(monster, platforma);
      });

      dane.objects.tabelaBloczkowCegiel.forEach((blockOfBricks) => {
        wykrywanieKolizji(monster, blockOfBricks);
      });

      dane.objects.tabelaBloczkowGrzybow.forEach((mushroomBlock) => {
        wykrywanieKolizji(monster, mushroomBlock);
      });
    });

    dane.objects.tabelaGrzybow.forEach((grzyb) => {
      if (grzyb.obecnyStan != grzyb.stan.wyjscie) {
        if (!mario.momentSmierci && mario.obecnyStan != mario.stan.miganie)
          wykrywanieKolizji(mario, grzyb);

        dane.objects.tabelaScian.forEach((wall) => {
          wykrywanieKolizji(grzyb, wall);
        });

        dane.objects.tabelaBloczkowMonet.forEach((bloczekMonet) => {
          wykrywanieKolizji(grzyb, bloczekMonet);
        });

        dane.objects.tabelaPlatform.forEach((platforma) => {
          wykrywanieKolizji(grzyb, platforma);
        });

        dane.objects.tabelaBloczkowCegiel.forEach((blockOfBricks) => {
          wykrywanieKolizji(grzyb, blockOfBricks);
        });

        dane.objects.tabelaBloczkowGrzybow.forEach((mushroomBlock) => {
          wykrywanieKolizji(grzyb, mushroomBlock);
        });
      }
    });

    dane.objects.tabelaPociskow.forEach((bullet) => {
      dane.objects.tabelaScian.forEach((wall) => {
        wykrywanieKolizji(bullet, wall);
      });

      dane.objects.tabelaBloczkowMonet.forEach((bloczekMonet) => {
        wykrywanieKolizji(bullet, bloczekMonet);
      });

      dane.objects.tabelaPlatform.forEach((platforma) => {
        wykrywanieKolizji(bullet, platforma);
      });

      dane.objects.tabelaBloczkowCegiel.forEach((blockOfBricks) => {
        wykrywanieKolizji(bullet, blockOfBricks);
      });

      dane.objects.tabelaBloczkowGrzybow.forEach((mushroomBlock) => {
        wykrywanieKolizji(bullet, mushroomBlock);
      });

      dane.objects.tabelaPotworow.forEach((monster) => {
        wykrywanieKolizji(bullet, monster);
      });
    });
  }

  kolizja(obiekt1, obiekt2, dane) {
    let stronaKolizji = this.stronaKolizji(obiekt1, obiekt2);
    if (obiekt1.typ === "mario") {
      let mario = obiekt1;
      if (
        obiekt2.typ === "wall" ||
        obiekt2.typ === "bloczekMonet" ||
        obiekt2.typ === "platforma" ||
        obiekt2.typ === "blockOfBricks" ||
        obiekt2.typ === "mushroomBlock"
      ) {
        if (stronaKolizji[0]) {
          mario.obecnyStan = mario.stan.stanie;
          mario.y = obiekt2.y - mario.h - 0.1;
          mario.pedY = 0;
          if (obiekt2.typ === "platforma") {
            mario.pedX = obiekt2.pedX;
            mario.kontrolerRuchu(dane);
          }
        }
        if (stronaKolizji[2]) {
          mario.y = obiekt2.y + obiekt2.h - 1;
          if (mario.pedY < 0) mario.pedY = 1;
          if (obiekt2.typ === "bloczekMonet") {
            obiekt2.obecnyStan = obiekt2.stan.drganie;
            obiekt2.obecnyStan.licznik = 0;
            obiekt2.y = obiekt2.sy;
            obiekt2.moneta.y = obiekt2.sy;
            if (obiekt2.monety > 0) mario.monety++;
            obiekt2.monety--;
          }
          if (obiekt2.typ === "blockOfBricks") {
            if (mario.mozeNiszczyc) {
              dane.objects.tabelaFragmentowCegiel.push(
                new FragmentBrick(
                  dane.grafika,
                  obiekt2.x,
                  obiekt2.y,
                  obiekt2.w / 2,
                  obiekt2.h / 2,
                  0
                ),
                new FragmentBrick(
                  dane.grafika,
                  obiekt2.x + obiekt2.w / 2,
                  obiekt2.y,
                  obiekt2.w / 2,
                  obiekt2.h / 2,
                  1
                ),
                new FragmentBrick(
                  dane.grafika,
                  obiekt2.x,
                  obiekt2.y + obiekt2.h / 2,
                  obiekt2.w / 2,
                  obiekt2.h / 2,
                  2
                ),
                new FragmentBrick(
                  dane.grafika,
                  obiekt2.x + obiekt2.w / 2,
                  obiekt2.y + obiekt2.h / 2,
                  obiekt2.w / 2,
                  obiekt2.h / 2,
                  3
                )
              );
              let nrBloczka =
                dane.objects.tabelaBloczkowCegiel.indexOf(obiekt2);
              dane.objects.tabelaBloczkowCegiel.splice(nrBloczka, 1);
            } else {
              obiekt2.obecnyStan = obiekt2.stan.drganie;
            }
          }
          if (obiekt2.typ === "mushroomBlock") {
            obiekt2.obecnyStan = obiekt2.stan.drganie;
            if (obiekt2.pelny) {
              dane.objects.tabelaGrzybow.push(
                new Grzyb(
                  dane.grafika,
                  obiekt2.x,
                  obiekt2.y,
                  obiekt2.w,
                  obiekt2.h,
                  obiekt2.rodzaj
                )
              );
            }
            obiekt2.pelny = false;
          }
        }
        if (stronaKolizji[3]) {
          mario.x = obiekt2.x - mario.w;
          mario.pedX = 0;
        }
        if (stronaKolizji[1]) {
          mario.x = obiekt2.x + obiekt2.w;
          mario.pedX = 0;
        }
      } else if (obiekt2.typ === "monster") {
        if (stronaKolizji[0]) {
          let nrPotwora = dane.objects.tabelaPotworow.indexOf(obiekt2);
          dane.objects.tabelaPotworow.splice(nrPotwora, 1);
          mario.obecnyStan = mario.stan.skakanie;
          mario.pedY = -20.5;
        }
        if (stronaKolizji[1] || stronaKolizji[2] || stronaKolizji[3]) {
          if (mario.mozeStrzelac) {
            mario.obecnyStan = mario.stan.miganie;
            setTimeout(() => {
              mario.mozeStrzelac = false;
              mario.obecnyStan = mario.stan.stanie;
            }, 500);
          } else if (mario.mozeNiszczyc) {
            mario.obecnyStan = mario.stan.miganie;
            setTimeout(() => {
              mario.mozeNiszczyc = false;
              mario.obecnyStan = mario.stan.stanie;
            }, 500);
          } else {
            mario.momentSmierci = true;
            mario.obecnyStan = mario.stan.death;
            mario.pedY = -20.5;
            setTimeout(() => {
              dane.kontroler.death.strataZycia(dane);
            }, 750);
          }
        }
      } else if (obiekt2.typ === "moneta") {
        let nrMonety = dane.objects.tabelaMonet.indexOf(obiekt2);
        dane.objects.tabelaMonet.splice(nrMonety, 1);
        mario.monety++;
      } else if (obiekt2.typ === "grzyb") {
        let grzyb = obiekt2;
        if (grzyb.rodzaj === "zycie") {
          let nrGrzyba = dane.objects.tabelaGrzybow.indexOf(grzyb);
          dane.objects.tabelaGrzybow.splice(nrGrzyba, 1);
          mario.zycia++;
        } else if (grzyb.rodzaj === "powiekszenie") {
          let nrGrzyba = dane.objects.tabelaGrzybow.indexOf(grzyb);
          dane.objects.tabelaGrzybow.splice(nrGrzyba, 1);
          mario.mozeNiszczyc = true;
        } else if (grzyb.rodzaj === "strzelanie") {
          if (mario.mozeNiszczyc) {
            let nrGrzyba = dane.objects.tabelaGrzybow.indexOf(grzyb);
            dane.objects.tabelaGrzybow.splice(nrGrzyba, 1);
            mario.mozeStrzelac = true;
          }
        }
      }
    } else if (obiekt1.typ === "monster") {
      let monster = obiekt1;
      if (
        obiekt2.typ === "wall" ||
        obiekt2.typ === "bloczekMonet" ||
        obiekt2.typ === "platforma" ||
        obiekt2.typ === "blockOfBricks" ||
        obiekt2.typ === "mushroomBlock"
      ) {
        if (stronaKolizji[0]) {
          monster.obecnyStan = monster.stan.moving;
          monster.y = obiekt2.y - monster.h;
          monster.pedY = 0;
          if (obiekt2.typ === "platforma") {
            monster.x += obiekt2.pedX;
          }
        }
        if (stronaKolizji[3]) {
          monster.x = obiekt2.x - monster.w;
          monster.pedX = -2;
        }
        if (stronaKolizji[1]) {
          monster.x = obiekt2.x + obiekt2.w;
          monster.pedX = 2;
        }
      }
    } else if (obiekt1.typ === "grzyb") {
      let grzyb = obiekt1;
      if (
        obiekt2.typ === "wall" ||
        obiekt2.typ === "bloczekMonet" ||
        obiekt2.typ === "platforma" ||
        obiekt2.typ === "blockOfBricks" ||
        obiekt2.typ === "mushroomBlock"
      ) {
        if (stronaKolizji[0]) {
          grzyb.obecnyStan = grzyb.stan.moving;
          grzyb.y = obiekt2.y - grzyb.h;
          grzyb.pedY = 0;
          if (obiekt2.typ === "platforma") {
            grzyb.x += obiekt2.pedX;
          }
        }
        if (stronaKolizji[3]) {
          grzyb.x = obiekt2.x - grzyb.w;
          grzyb.pedX = -2;
        }
        if (stronaKolizji[1]) {
          grzyb.x = obiekt2.x + obiekt2.w;
          grzyb.pedX = 2;
        }
      }
    } else if (obiekt1.typ === "bullet") {
      let bullet = obiekt1;
      if (
        obiekt2.typ === "wall" ||
        obiekt2.typ === "bloczekMonet" ||
        obiekt2.typ === "platforma" ||
        obiekt2.typ === "blockOfBricks" ||
        obiekt2.typ === "mushroomBlock"
      ) {
        if (stronaKolizji[0]) {
          bullet.y = obiekt2.y - bullet.h;
          bullet.pedY = -10;
        }
        if (stronaKolizji[1] || stronaKolizji[3]) {
          bullet.obecnyStan = bullet.stan.wybuch;
        }
      } else if (obiekt2.typ === "monster") {
        obiekt2.pedX = 0;
        let nrPotwora = dane.objects.tabelaPotworow.indexOf(obiekt2);
        dane.objects.tabelaPotworow.splice(nrPotwora, 1);
        bullet.obecnyStan = bullet.stan.wybuch;
      }
    }
  }

  stronaKolizji(obiekt1, obiekt2) {
    let maksymalnaOdlegloscX = (obiekt1.w + obiekt2.w) / 2,
      maksymalnaOdlegloscY = (obiekt1.h + obiekt2.h) / 2;

    let katLewyGorny =
        (Math.atan2(maksymalnaOdlegloscY, maksymalnaOdlegloscX) * 180) /
        Math.PI,
      katPrawyGorny = 180 - katLewyGorny;

    let odlegloscX =
        obiekt2.x + obiekt2.w / 2 - (obiekt1.x + obiekt1.w / 2 - obiekt1.pedX),
      odlegloscY =
        obiekt2.y + obiekt2.h / 2 - (obiekt1.y + obiekt1.h / 2 - obiekt1.pedY);

    let katObiektow = (Math.atan2(odlegloscY, odlegloscX) * 180) / Math.PI;

    let stronaKolizji = [false, false, false, false];
    if (katObiektow > katLewyGorny && katObiektow < katPrawyGorny) {
      stronaKolizji[0] = true;
    }
    if (katObiektow > katPrawyGorny || katObiektow < -katPrawyGorny) {
      stronaKolizji[1] = true;
    }
    if (katObiektow > -katPrawyGorny && katObiektow < -katLewyGorny) {
      stronaKolizji[2] = true;
    }
    if (katObiektow > -katLewyGorny && katObiektow < katLewyGorny) {
      stronaKolizji[3] = true;
    }

    return stronaKolizji;
  }
}
