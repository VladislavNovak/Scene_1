- [Introduction to BabylonJs](#introduction-to-babylonjs)
  - [Setting up environment](#setting-up-environment)
  - [Installation on a local computer](#installation-on-a-local-computer)
    - [Create struct of project](#create-struct-of-project)
    - [Set library](#set-library)
    - [Webpack](#webpack)
    - [Files content](#files-content)
    - [Start](#start)

# Introduction to BabylonJs

## Setting up environment

Существует три варианта настройки окружения для BabylonJS. 
Опишем их в порядке возрастания сложности установки:

- На официальном сайте существует т.н. [песочница](https://playground.babylonjs.com/), 
в которой можно набирать код и немедленно получать результаты
- Подключение CDN. Т.е. посредством указания пути в скрипте к серверу, который будет в режиме 
онлайн обрабатывать запросы. Данный вариант отлично описан на ресурсе от [Microsoft](https://learn.microsoft.com/ru-ru/windows/mixed-reality/develop/javascript/tutorials/babylonjs-webxr-helloworld/prepare-scene-02)
- Установка всех зависимостей на локальный компьютер. Описана в следующем разделе, а также, 
с некоторыми изменениями (в части настройки webServer), на учебном ресурсе 
[Stepik](https://stepik.org/lesson/576644/step/1?unit=571253) 
в разделе Подготовка к настройке.

## Installation on a local computer

### Create struct of project

В основной директории создаем поддиректории и файлы как указано:

- public / index.html
- src / app.ts           // будет располагаться рабочий код
- dist                   // сюда будет помещён результат компиляции

В index.html генерируем код согласно html5. 
В качестве дополнительного кода, чтобы не появлялась ошибка фавикона, можно подключить

```html
<link rel="shortcut icon" href="#">
```

### Set library

Последовательно генерируем package.json, устанавливаем саму библиотеку и инспектор, устанавливаем ts 

```bash
npm init
npm install --save-dev @babylonjs/core
npm install --save-dev @babylonjs/inspector
tsc --init
```

### Webpack

Позволяет автоматизировать процесс компиляции, указав входной и выходной файл. 

Итак, последовательно устанавливаем сам webpack, в том числе для обработки ts, загрузчик, командную строку и 
devServer, который поможет осуществлять локальный запуск проекта.

Плагин HTML Webpack принимает скомпилированный файл пакета javascript и вставляет его в наш файл index.html. 
Этот пакет .js появится внутри папки dist

```bash
npm install --save-dev typescript webpack ts-loader webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-dev-server
```

### Files content

Всё необходимое содержимое можно найти в соответсвующих файлах:

- tsconfig.json был создан автоматически ранее. Заполняем его
- package.json. Не забываем прописать scripts аналогичный тому, что находится сейчас в файле
- webpack.config.js
- .gitignore

### Start

Собираем проект и запускаем на выполнение:

```bash
npm run build
npm run start
```

Проект будет запущен на localhost: 8080
