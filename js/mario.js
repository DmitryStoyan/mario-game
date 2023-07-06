class Mario {
  constructor(img, x, y, w, h) {
    this.picture = new Picture(img, 3504, 64, 16, 16);
    this.animacja = {
      poruszaniePrawo: {
        klatka: [
          new Picture(img, 3424, 64, 16, 16),
          new Picture(img, 3408, 64, 16, 16),
          new Picture(img, 3424, 64, 16, 16),
          new Picture(img, 3440, 64, 16, 16),
        ],
        obecnaKlatka: 0,
      },
      poruszanieLewo: {
        klatka: [
          new Picture(img, 3424, 80, 16, 16),
          new Picture(img, 3408, 80, 16, 16),
          new Picture(img, 3424, 80, 16, 16),
          new Picture(img, 3440, 80, 16, 16),
        ],
        obecnaKlatka: 0,
      },
      staniePrawo: new Picture(img, 3504, 64, 16, 16),
      stanieLewo: new Picture(img, 3504, 80, 16, 16),
      skokPrawo: new Picture(img, 3472, 64, 16, 16),
      skokLewo: new Picture(img, 3472, 80, 16, 16),
      death: new Picture(img, 3488, 64, 16, 16),
    };
    this.animacjaDuzy = {
      poruszaniePrawo: {
        klatka: [
          new Picture(img, 3424, 0, 16, 32),
          new Picture(img, 3408, 0, 16, 32),
          new Picture(img, 3424, 0, 16, 32),
          new Picture(img, 3440, 0, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      poruszanieLewo: {
        klatka: [
          new Picture(img, 3520, 0, 16, 32),
          new Picture(img, 3504, 0, 16, 32),
          new Picture(img, 3520, 0, 16, 32),
          new Picture(img, 3536, 0, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      miganiePrawo: {
        klatka: [
          new Picture(img, 3488, 0, 16, 32),
          new Picture(img, 3520, 64, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      miganieLewo: {
        klatka: [
          new Picture(img, 3584, 0, 16, 32),
          new Picture(img, 3520, 64, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      staniePrawo: new Picture(img, 3488, 0, 16, 32),
      stanieLewo: new Picture(img, 3584, 0, 16, 32),
      skokPrawo: new Picture(img, 3472, 0, 16, 32),
      skokLewo: new Picture(img, 3568, 0, 16, 32),
    };
    this.animacjaStrzelanie = {
      poruszaniePrawo: {
        klatka: [
          new Picture(img, 3424, 32, 16, 32),
          new Picture(img, 3408, 32, 16, 32),
          new Picture(img, 3424, 32, 16, 32),
          new Picture(img, 3440, 32, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      poruszanieLewo: {
        klatka: [
          new Picture(img, 3520, 32, 16, 32),
          new Picture(img, 3504, 32, 16, 32),
          new Picture(img, 3520, 32, 16, 32),
          new Picture(img, 3536, 32, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      miganiePrawo: {
        klatka: [
          new Picture(img, 3488, 32, 16, 32),
          new Picture(img, 3520, 64, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      miganieLewo: {
        klatka: [
          new Picture(img, 3584, 32, 16, 32),
          new Picture(img, 3520, 64, 16, 32),
        ],
        obecnaKlatka: 0,
      },
      staniePrawo: new Picture(img, 3488, 32, 16, 32),
      stanieLewo: new Picture(img, 3584, 32, 16, 32),
      skokPrawo: new Picture(img, 3472, 32, 16, 32),
      skokLewo: new Picture(img, 3568, 32, 16, 32),
    };
    this.stan = {
      stanie: {
        ruch: (dane) => {
          return;
        },
        animacja: (dane) => {
          let animacja = this.animacja;
          if (this.mozeStrzelac) {
            animacja = this.animacjaStrzelanie;
            this.h = 2 * h - 1;
          } else if (this.mozeNiszczyc) {
            animacja = this.animacjaDuzy;
            this.h = 2 * h - 1;
          } else {
            this.h = h;
          }
          if (this.kierunek === "prawo") {
            this.picture = animacja.staniePrawo;
          } else {
            this.picture = animacja.stanieLewo;
          }
        },
      },
      skakanie: {
        ruch: (dane) => {
          if (this.pedY == 0) {
            this.pedY -= 23.5;
          }

          this.kontrolerRuchu(dane);
        },
        animacja: (dane) => {
          let animacja = this.animacja;
          if (this.mozeStrzelac) {
            animacja = this.animacjaStrzelanie;
            this.h = 2 * h - 1;
          } else if (this.mozeNiszczyc) {
            animacja = this.animacjaDuzy;
            this.h = 2 * h - 1;
          } else {
            this.h = h;
          }
          if (this.kierunek === "prawo") {
            this.picture = animacja.skokPrawo;
          } else {
            this.picture = animacja.skokLewo;
          }
        },
      },
      moving: {
        ruch: (dane) => {
          this.kontrolerRuchu(dane);
        },
        animacja: (dane) => {
          let animacja = this.animacja;
          if (this.mozeStrzelac) {
            animacja = this.animacjaStrzelanie;
            this.h = 2 * h - 1;
          } else if (this.mozeNiszczyc) {
            animacja = this.animacjaDuzy;
            this.h = 2 * h - 1;
          } else {
            this.h = h;
          }
          if (this.kierunek === "prawo") {
            if (dane.nrKlatki % 5 == 0) {
              this.picture =
                animacja.poruszaniePrawo.klatka[
                  animacja.poruszaniePrawo.obecnaKlatka
                ];
              animacja.poruszaniePrawo.obecnaKlatka++;
            }

            if (animacja.poruszaniePrawo.obecnaKlatka > 3) {
              animacja.poruszaniePrawo.obecnaKlatka = 0;
            }
          } else {
            if (dane.nrKlatki % 5 == 0) {
              this.picture =
                animacja.poruszanieLewo.klatka[
                  animacja.poruszanieLewo.obecnaKlatka
                ];
              animacja.poruszanieLewo.obecnaKlatka++;
            }

            if (animacja.poruszanieLewo.obecnaKlatka > 3) {
              animacja.poruszanieLewo.obecnaKlatka = 0;
            }
          }
        },
      },
      miganie: {
        licznik: 0,
        ruch: (dane) => {
          this.pedX = 0;
          this.pedY = 0;
        },
        animacja: (dane) => {
          let animacja = this.animacja;
          if (this.mozeStrzelac) {
            animacja = this.animacjaStrzelanie;
          } else if (this.mozeNiszczyc) {
            animacja = this.animacjaDuzy;
          }
          if (this.kierunek == "prawo") {
            if (dane.nrKlatki % 5 == 0) {
              this.picture =
                animacja.miganiePrawo.klatka[
                  animacja.miganiePrawo.obecnaKlatka
                ];
              animacja.miganiePrawo.obecnaKlatka++;
            }

            if (animacja.miganiePrawo.obecnaKlatka > 1) {
              animacja.miganiePrawo.obecnaKlatka = 0;
            }
          } else {
            if (dane.nrKlatki % 5 == 0) {
              this.picture =
                animacja.miganieLewo.klatka[animacja.miganieLewo.obecnaKlatka];
              animacja.miganieLewo.obecnaKlatka++;
            }

            if (animacja.miganieLewo.obecnaKlatka > 1) {
              animacja.miganieLewo.obecnaKlatka = 0;
            }
          }
        },
      },
      death: {
        ruch: (dane) => {
          this.pedX = 0;
        },
        animacja: (dane) => {
          this.h = h;
          this.picture = this.animacja.death;
        },
      },
    };
    this.obecnyStan = this.stan.stanie;
    this.kierunek = "prawo";
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pedY = 1;
    this.pedX = 8;
    this.zycia = 3;
    this.mozeNiszczyc = false;
    this.mozeStrzelac = false;
    this.naladowany = true;
    this.momentSmierci = false;
    this.monety = 0;
    this.typ = "mario";
  }

  kontrolerRuchu(dane) {
    if (
      ((this.x - this.pedX <= dane.canvas.fgCtx.canvas.width / 2 ||
        dane.objects.mapa.x - this.pedX <
          dane.canvas.fgCtx.canvas.width - dane.objects.mapa.w) &&
        this.kierunek === "prawo") ||
      ((this.x - this.pedX > dane.canvas.fgCtx.canvas.width / 2 ||
        dane.objects.mapa.x - this.pedX >= 0) &&
        this.kierunek === "lewo")
    ) {
      this.x += this.pedX;
      if (this.x >= 800) {
        (function () {
          const result = {
            name: playerName,
            money: dane.objects.mario.monety,
            time: seconds,
          };
          let leaderboard =
            JSON.parse(localStorage.getItem("leaderboard")) || [];
          leaderboard.push(result);
          localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
          showLeaderboard();
        })();
        let leaderboardTable = document.getElementById("leaderboard-table");
        function showLeaderboard() {
          const leaderboardBody = document.getElementById("leaderboard-body");
          const leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
          leaderboardBody.innerHTML = "";
          leaderboard.forEach((result, index) => {
            const row = leaderboardBody.insertRow();
            if (result.name === playerName) {
              row.classList.add("current-player");
            }
            const nameCell = row.insertCell();
            nameCell.textContent = result.name;

            const rescuedCell = row.insertCell();
            rescuedCell.textContent = result.money;

            const timeCell = row.insertCell();
            timeCell.textContent = result.time;
          });
          const leaderboardOver = document.getElementById("leaderboard_over");
          leaderboardOver.classList.remove("hidden");
        }
        const popup = document.querySelector(".finish-popup");
        const currentResultsList = popup.querySelectorAll(
          ".finish__list .finish__item"
        );
        const replayButton = document.querySelector(".finish__button");

        replayButton.addEventListener("click", function replayButtonClick() {
          location.reload();
        });
        saveResult();
      }
    } else {
      dane.objects.mapa.x -= this.pedX;
      for (var i = 0; i < dane.objects.tabelaScian.length; i++) {
        dane.objects.tabelaScian[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaPotworow.length; i++) {
        dane.objects.tabelaPotworow[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaMonet.length; i++) {
        dane.objects.tabelaMonet[i].x -= this.pedX;
      }
      for (let i = 0; i < dane.objects.tabelaBloczkowMonet.length; i++) {
        dane.objects.tabelaBloczkowMonet[i].moneta.x -= this.pedX;
        dane.objects.tabelaBloczkowMonet[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaPlatform.length; i++) {
        dane.objects.tabelaPlatform[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaBloczkowCegiel.length; i++) {
        dane.objects.tabelaBloczkowCegiel[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaFragmentowCegiel.length; i++) {
        dane.objects.tabelaFragmentowCegiel[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaBloczkowGrzybow.length; i++) {
        dane.objects.tabelaBloczkowGrzybow[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaGrzybow.length; i++) {
        dane.objects.tabelaGrzybow[i].x -= this.pedX;
      }
      for (var i = 0; i < dane.objects.tabelaPociskow.length; i++) {
        dane.objects.tabelaPociskow[i].x -= this.pedX;
      }
    }
  }
}
