![template engine - twig](https://img.shields.io/static/v1?label=template&message=twig&color=%2300A95C&style=for-the-badge)
![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

# PEPELAC - frontend boilerplate

![logo](https://user-images.githubusercontent.com/3787132/176785257-2fa84f95-acc2-4ecb-a5af-df0efaf571d3.svg)

PEPELAC - Современный инструментарий для вёрстки и создания статичных сайтов.

Используются современные инструменты для разработки сайтов, возможно использование как typescript, так и javascript кода. При использовании vscode будут предложены к установке дополнения, помогающие придерживаться единой стилистики кода при командной разработки.

## Требования к окружению

- node.js
- git

## Установка

### 1. Клонирование и инициализация

Скачайте файлы с github или клонируйте его c помощью команды:

```bash
git clone https://github.com/alexsoin/pepelac.git
```

Инициализация проекта(Работает только в UNIX системах)

```bash
./init
```

### 2. Установки зависимостей проекта

Для установки зависимостей проекта необходимо в командной строке ввести команды:

```bash
npm i
```

Если требуются дополнительные пакеты, то для их установки нужно выполнить команду:

- Установка пакета, при этом информация о нём, автоматически прописывается в секцию "devDependencies" файла "
  package.json"

```bash
npm i -D название_пакета
```

- Установка пакета, при этом информация о нём, автоматически прописывается в секцию "dependencies" файла "package.json"

```bash
npm i название_пакета
```

## Как использовать окружение

- `npm run dev` - запуск live-server
- `npm run build` - сборка проекта
- `npm run lint:script` - линтинг скриптов
- `npm run lint:style` - линтинг стилей

*Чтобы исправить ошибки линтинга запустите команду с дополнительным параметром `-- --fix`*

## Список инструментов

Окружение, предназначенное для разработки фронтенд проекта, построено на базе следующих инструментов:

- **node.js** (среды, в которой будет выполняться окружение);
- **npm** (пакетного менеджера, входящего в Node.js; будет использоваться для загрузки плагинов и фронтенд
  пакетов);
- **popover, bootstrap** (пакеты, которые будут использоваться для сборки css и js частей сайта);

## Файловая структура проекта

```bash
├── .vscode/                   # дополнительная конфигурация редактора vs code
│   ├── extensions.json        # список рекомендуемых дополнений
│   └── settings.json          # настройки среды
├── init                       # инициализатор проекта
├── dist/                      # скомпилированный код проекта, готовый для размещения на сервере
├── public/                    # статические файлы проекта (изображения, видео и т.д.)
├── src/                       # исходники
│   ├── assets/                # ресурсы, используемые в проекте (изображения, шрифты и т.д.)
│   │   ├── fonts/             # шрифты
│   │   └── img/               # изображения
│   ├── data/                  # массивы данных для вывода значений в twig файлах
│   │   └── site.js            # файл для вывода данных
│   ├── scripts/               # js файлы
│   │   ├── helpers/           # вспомогательные js файлы
│   │   ├── index.js           # точка входа js файлов
│   │   └── main/              # js файлы проекта
│   ├── styles/                # scss файлы
│   │   ├── helpers/           # вспомогательные scss файлы
│   │   ├── index.scss         # точка входа scss файлов
│   │   └── main/              # scss файлы проекта
│   │       ├── base.scss      # пользовательские стили
│   │       ├── fonts.scss     # подключение шрифтов
│   │       └── variables.scss # переменные стилей
│   ├── templates/             # шаблоны и куски кода
│   │   ├── layouts/           # шаблоны страниц
│   │   └── partials/          # подключаемые куски кода
│   └── views/                 # twig файлы страниц проекта (преобразуются в html)
│       ├── 404.twig           # страница ошибки 404
│       ├── index.twig         # главная страница
│       └── ui.twig            # список страниц сайта
└── vite.config.ts             # конфигурационный файл vitejs
```

### `src/scripts/`

В папке `js` находится файл `index.js`, который является входной точкой для js файлов.

При сборке проекта, все импорты внешних зависимостей(таких как boostrap) будут собираться в единый файл `index.js` который после сборки будет находиться в папке `dist/assets/js/`.

### `src/styles/`

Папка `scss` отведена под стили. В данной папке находятся следующие файлы:

- `index.scss` - импорты файлов, содержимое которых необходимо включить в итоговый файл стилей
- `main/base.scss` - используется для написания своих стилей
- `main/variables.scss` - содержит SCSS переменные, с помощью которых будем изменять стили bootstrap, а также использовать
  его для создания своих переменных
- `main/fonts.scss` - подключаются шрифты, используемые на сайте
- `helpers/bootstrap.scss` - подключаются boostrap зависимости

### `src/views/`

В данной папке находятся страницы проекта в формате `twig`, которые после сборки преобразуются в `html`.

Файл `index.twig` - это главная страница создаваемого проекта, `404.twig` - шаблон страницы ошибки, а файл `ui.twig` используется для отображения списка всех страниц проекта с ссылками на них.

Кроме `index.twig` в данную директорию можно поместить и другие twig файлы из которых будут созданы html страницы.

### `src/templates/`

Папка `layouts/` содержит общие шаблоны, используемые в большинстве страниц приложения. Эти шаблоны определяют общую структуру страницы.

В папке `partials/` содержатся небольшие куски верстки, которые могут быть использованы и переиспользованы в различных частях сайта. Они включают в себя элементы пользовательского интерфейса, такие как кнопки, формы, меню, header, footer и т.д.

---

<p align="center">
  <a href="https://vituum.dev/" target="_blank" rel="noopener noreferrer">
    <img width="60" src="https://avatars.githubusercontent.com/u/109584961" alt="Logo vituum">
  </a>
</p>
<p align="center">powered by <a href="https://vituum.dev/" target="_blank" rel="noopener noreferrer">vituum</a></p>
