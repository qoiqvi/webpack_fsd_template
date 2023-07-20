## webpack_fsd_template
# react_ts_webpack

Этот репозиторий представляет собой собранный с помощью webpack'a проект, со всеми подключеными лоадерами:
- ts loader
- file loader
- svgr loader
- css, sass, style loaders

Также у проекта уже задана его основная структура. В папке src созданы все **slcies** согласно современной методологии FSD v.2 (Feature Slice Design). FSD - это подход к проектированию приложения, при котором каждая функциональность разбивается на срезы (slice) или части, которые могут быть разрабатываемыми и тестируемыми независимо от остального приложения. Для каждого слоя также установлены aliases

# Стек технологий
- webpack 5v, webpack-dev-server
- TypeScript
- SCSS
- EsLint, StyleLint (правила не заданы)
- FSD

## Как использовать

1. Клонируйте репозиторий:

```bash
git clone https://github.com/qoiqvi/webpack_fsd_template

2. Перейдите в директорию проекта
cd webpack_fsd_template

3. Установите зависимости
npm install

4. Запустите приложения
npm start

```

Вы должны увидеть div элемент с текстом App component

Со всеми скриптами вы можете ознакомиться в package.json

Приятной разработки!



