class Objects {
  constructor(dane) {
    // Определение объекта для неба
    let niebo = {
      picture: new Picture(dane.grafika, 2448, 0, 960, 208),
      x: 0,
      y: 0,
      w: 2880,
      h: 624,
    };

    // Определение объекта для карты
    let mapa = {
      picture: new Picture(dane.grafika, 0, 0, 2448, 208),
      x: 0,
      y: 0,
      w: 2448 * 3,
      h: 208 * 3,
    };

    // Создание объекта Марио
    let mario = new Mario(dane.grafika, 0, 0, 48, 48);

    // Определение массива стен
    let sciany = [
      [-48, 0, 48, 624],
      [7344, 0, 48, 624],
      [0, 528, 1056, 96],
      [960, 480, 48, 48],
      [1008, 432, 48, 96],
      [1056, 384, 48, 240],
      [1344, 528, 432, 96],
      [1296, 384, 48, 240],
      [1344, 432, 48, 96],
      [1392, 480, 48, 48],
      [1776, 480, 48, 144],
      [1920, 432, 48, 192],
      [2064, 384, 48, 240],
      [2208, 336, 48, 288],
      [2352, 528, 524, 96],
      [2976, 528, 144, 48],
      [3264, 480, 144, 48],
      [3552, 432, 144, 48],
      [3792, 384, 524, 96],
      [3792, 576, 524, 48],
      [4800, 240, 96, 384],
      [4896, 576, 1008, 48],
      [4992, 384, 672, 96],
      [5664, 240, 48, 240],
      [5712, -480, 48, 960],
      [5904, 528, 48, 96],
      [6144, 432, 48, 192],
      [6384, 480, 48, 144],
      [6432, 528, 336, 96],
      [6528, 480, 48, 48],
      [6576, 432, 48, 96],
      [6624, 384, 48, 144],
      [6672, 336, 48, 192],
      [6720, 288, 48, 240],
      [6768, 240, 48, 384],
      [7056, 528, 288, 96],
    ];

    // Определение массива монстров
    let potwory = [
      [912, 480],
      [1440, 480],
      [2880, 480],
      [4896, 480],
      [4992, 480],
      [5088, 480],
      [5184, 480],
      [5280, 480],
    ];

    // Определение массива монет
    let monety = [
      [1008, 240],
      [1056, 192],
      [1104, 144],
      [1152, 96],
      [1200, 96],
      [1248, 144],
      [1296, 192],
      [1344, 240],
      [3792, 480],
      [3840, 480],
      [3888, 480],
      [3936, 480],
      [3984, 480],
      [4032, 480],
      [4080, 480],
      [4128, 480],
      [4176, 480],
      [4224, 480],
      [4272, 480],
    ];

    // Определение массива блоков с монетами
    let bloczkiMonet = [[624, 336]];

    // Определение массива платформ
    let platformy = [
      [4320, 576, { min: 4320, max: 4800 }],
      [4800, 384, { min: 4320, max: 4800 }],
    ];

    // Определение массива кирпичных блоков
    let bloczkiCegiel = [
      [480, 336],
      [576, 336],
      [672, 336],
      [4896, 240],
      [4944, 240],
      [4992, 240],
      [5040, 240],
      [5088, 240],
      [5136, 240],
      [5184, 240],
      [5232, 240],
      [5280, 240],
      [5328, 240],
      [5376, 240],
      [5424, 240],
      [5472, 240],
    ];

    // Определение массива блоков с грибами
    let bloczkiGrzybow = [
      [528, 336, "zycie"],
      [432, 288, "powiekszenie"],
      [720, 288, "strzelanie"],
    ];

    // Инициализация объектов в свойство `dane.objects`
    dane.objects = {};
    dane.objects.niebo = niebo;
    dane.objects.mapa = mapa;
    dane.objects.mario = mario;
    dane.objects.tabelaScian = [];
    dane.objects.tabelaPotworow = [];
    dane.objects.tabelaMonet = [];
    dane.objects.tabelaBloczkowMonet = [];
    dane.objects.tabelaPlatform = [];
    dane.objects.tabelaBloczkowCegiel = [];
    dane.objects.tabelaFragmentowCegiel = [];
    dane.objects.tabelaBloczkowGrzybow = [];
    dane.objects.tabelaGrzybow = [];
    dane.objects.tabelaPociskow = [];

    // Создание объектов стен
    sciany.forEach(function (z) {
      dane.objects.tabelaScian.push(new Wall(z[0], z[1], z[2], z[3]));
    });

    // Создание объектов монстров
    potwory.forEach(function (p) {
      dane.objects.tabelaPotworow.push(
        new Monster(dane.grafika, p[0], p[1], 48, 48)
      );
    });

    // Создание объектов монет
    monety.forEach(function (m) {
      dane.objects.tabelaMonet.push(
        new Moneta(dane.grafika, m[0], m[1], 48, 48)
      );
    });

    // Создание объектов блоков с монетами
    bloczkiMonet.forEach(function (bm) {
      dane.objects.tabelaBloczkowMonet.push(
        new BloczekMonet(dane.grafika, bm[0], bm[1], 48, 48)
      );
    });

    // Создание объектов платформ
    platformy.forEach(function (p) {
      dane.objects.tabelaPlatform.push(
        new Platforma(dane.grafika, p[0], p[1], 144, 24, p[2])
      );
    });

    // Создание объектов кирпичных блоков
    bloczkiCegiel.forEach(function (bc) {
      dane.objects.tabelaBloczkowCegiel.push(
        new BlockOfBricks(dane.grafika, bc[0], bc[1], 48, 48)
      );
    });

    // Создание объектов блоков с грибами
    bloczkiGrzybow.forEach(function (bg) {
      dane.objects.tabelaBloczkowGrzybow.push(
        new MushroomBlock(dane.grafika, bg[0], bg[1], 48, 48, bg[2])
      );
    });
  }
}
