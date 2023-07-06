// Функция отображения таблицы рекордов
function showLeaderboardTable(leaderboard, canvas) {
  const ctx = canvas.getContext("2d");
  const tableX = 200; // Координата X таблицы
  const tableY = 200; // Координата Y таблицы
  const cellWidth = 200; // Ширина ячейки
  const cellHeight = 50; // Высота ячейки

  // Отрисовка заголовка таблицы
  ctx.font = "24px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText("Leaderboard", tableX, tableY - 50);

  // Отрисовка ячеек таблицы
  leaderboard.forEach((result, index) => {
    const rowX = tableX;
    const rowY = tableY + index * cellHeight;

    // Отрисовка фона ячейки
    ctx.fillStyle = index % 2 === 0 ? "#ddd" : "#ccc";
    ctx.fillRect(rowX, rowY, cellWidth, cellHeight);

    // Отрисовка текста в ячейке
    ctx.fillStyle = "#000";
    ctx.fillText(result.name, rowX + 10, rowY + 30);
    ctx.fillText(result.playerMonety, rowX + 150, rowY + 30);
  });
}
class Render {
  aktualizacja(dane) {
    this.rysuj(dane.objects.niebo, dane.canvas.skyCtx); // Отрисовка объекта "niebo" на холсте "skyCtx"

    dane.canvas.bgCtx.clearRect(
      0,
      0,
      dane.canvas.bgCtx.canvas.width,
      dane.canvas.bgCtx.canvas.height
    ); // Очистка холста "bgCtx"
    this.rysuj(dane.objects.mapa, dane.canvas.bgCtx); // Отрисовка объекта "mapa" на холсте "bgCtx"

    dane.canvas.fgCtx.clearRect(
      0,
      0,
      dane.canvas.fgCtx.canvas.width,
      dane.canvas.fgCtx.canvas.height
    ); // Очистка холста "fgCtx"

    this.pisz(
      "Lives: " + dane.objects.mario.zycia,
      dane.canvas.fgCtx,
      16,
      32,
      "16px",
      "PixelEmulator"
    ); // Отображение количества жизней Марио на холсте "fgCtx"
    // const monetyElement = document.getElementById("monety");
    // const playerMonety = dane.objects.mario.monety;
    // monetyElement.textContent = playerMonety;
    this.pisz(
      "Score: " + dane.objects.mario.monety,
      dane.canvas.fgCtx,
      772,
      32,
      "16px",
      "PixelEmulator"
    ); // Отображение количества монет Марио на холсте "fgCtx"

    if (dane.objects.mario.zycia < 1)
      this.pisz(
        "Game Over",
        dane.canvas.fgCtx,
        200,
        300,
        "72px",
        "PixelEmulator"
      ); // Отображение надписи "Game Over" на холсте "fgCtx" при отсутствии жизней Марио

    dane.objects.tabelaPotworow.forEach((p) => {
      this.rysuj(p, dane.canvas.fgCtx); // Отрисовка объектов "monster" на холсте "fgCtx"
    });

    dane.objects.tabelaMonet.forEach((m) => {
      this.rysuj(m, dane.canvas.fgCtx); // Отрисовка объектов "Moneta" на холсте "fgCtx"
    });

    dane.objects.tabelaBloczkowMonet.forEach((bm) => {
      if (bm.monety > 0) this.rysuj(bm.moneta, dane.canvas.bgCtx); // Отрисовка монеты, если она доступна, на холсте "bgCtx"
      this.rysuj(bm, dane.canvas.bgCtx); // Отрисовка объектов "BloczekMonet" на холсте "bgCtx"
    });

    dane.objects.tabelaPlatform.forEach((p) => {
      this.rysuj(p, dane.canvas.fgCtx); // Отрисовка объектов "Platforma" на холсте "fgCtx"
    });

    dane.objects.tabelaBloczkowCegiel.forEach((bc) => {
      this.rysuj(bc, dane.canvas.fgCtx); // Отрисовка объектов "BloczekCegiel" на холсте "fgCtx"
    });

    dane.objects.tabelaFragmentowCegiel.forEach((fc) => {
      this.rysuj(fc, dane.canvas.fgCtx); // Отрисовка объектов "fragmentBrick" на холсте "fgCtx"
    });

    dane.objects.tabelaGrzybow.forEach((g) => {
      this.rysuj(g, dane.canvas.fgCtx); // Отрисовка объектов "Grzyb" на холсте "fgCtx"
    });

    dane.objects.tabelaBloczkowGrzybow.forEach((bg) => {
      this.rysuj(bg, dane.canvas.fgCtx); // Отрисовка объектов "mushroomBlock" на холсте "fgCtx"
    });

    dane.objects.tabelaPociskow.forEach((p) => {
      this.rysuj(p, dane.canvas.fgCtx); // Отрисовка объектов "Pocisk" на холсте "fgCtx"
    });

    this.rysuj(dane.objects.mario, dane.canvas.fgCtx); // Отрисовка объекта "mario" на холсте "fgCtx"
  }

  rysuj(co, gdzie) {
    gdzie.drawImage(
      co.picture.img,
      co.picture.x,
      co.picture.y,
      co.picture.w,
      co.picture.h,
      co.x,
      co.y,
      co.w,
      co.h
    ); // Отрисовка объекта на указанном холсте
  }

  pisz(tekst, gdzie, x, y, rozmiar, czcionka) {
    gdzie.font = rozmiar + " " + czcionka; // Установка шрифта и размера текста
    gdzie.fillStyle = "#fff"; // Установка цвета текста (белый)
    gdzie.fillText(tekst, x, y); // Вывод текста на указанные координаты холста
  }
}
