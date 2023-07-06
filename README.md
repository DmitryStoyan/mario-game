# Игра Mario

### ИГРОВОЙ ПРОЦЕСС

#### 1 экран. Игра

При открытии страницы на сайте показывается prompt, который сразу спрашивает имя игрока. Если мы ничего не ввели, то игра не запустится, страница просто перезагрузится, иначе начнется игра.

- При начале игры запускается таймер, который в конце игры будет выведен в турнирную таблицу.
- У игрока есть 3 жизни, в процессе игры он может найти гриб с дополнительной жизнью.
- Если моб убивает игрока, отнимается 1 жизнь.
- Если игрок падает в пропость, отнимается 1 жизнь.
- Если количество жизней 0, игра заканчивается и появляется турнирная таблица с результатами игры (имя игрока, время игры, количество собранных монет).

#### Экран 2. Таблица рекордов

Когда мы проигрываем, сразу же идет сохранение в локальное хранилище. Если в локальном хранилище есть другие значения рекордов, они выводятся в виде таблицы в эту секцию сайта.
Игрок который играл в данный момент выделяется в турнирной таблице желтым цветом, и все его предыдущие результаты.
В таблице есть кнопка начала игры заново.

В таблице выводится:

- Имя игрока
- Время игры
- Количество собранных монет

#### ДОПОЛНИТЕЛЬНО

В игре используется фоновая музыка.

### Ссылка на игру:

- [Game Mario](https://mario-game-three.vercel.app/)

### Доработка проекта будет включать:

- Оптимизация кода;
- Покрытие приложения тестами;
- Использование звуковых эффектов;
- Сортировку результатов в турнирной таблице;
