# Design Lab

Портфолио-проект для демонстрации интерфейсного дизайна и фронтенд-навыков. Чистый HTML/CSS/JS. Без зависимостей и сборщиков.

## Содержимое
- Hash-router секций: `Главная / Компоненты / Анимации / Эксперименты / Кейс`
- Панель управления (перемещаемая): Radius, Hue, Saturation, Shadow
- Дизайн-токены: цвет, радиусы, тени, насыщенность
- UI-кит: кнопки, карточки, формы, pricing
- Анимации: spinner, shimmer, pulse, float, bounce, 3D-tilt, SVG-blob morph
- Эксперименты: glass / neu / clay / gradients
- Кейс-шаблон: проблема → гипотеза → решения → результат
- Темы: фиксированная тёмная тема

## Структура
```

design-lab/
├─ index.html
├─ styles/
│  ├─ tokens.css        # дизайн-токены (CSS переменные)
│  ├─ base.css          # типографика, сетки, карточки, панель
│  ├─ layout.css        # раскладки и демо-анимации
│  ├─ components.css    # UI-кит
│  └─ animations.css    # эффекты и блеск
├─ scripts/
│  └─ app.js            # роутер, панель, drag, live-токены, SVG-blob
└─ assets/
└─ images/           # место для скринов/иллюстраций

````

## Быстрый старт
Открыть `index.html` напрямую в браузере через Live server

## Навигация

* Все ссылки вида `#route` переключают секции без перезагрузки.
* Активная вкладка помечается `aria-current="page"`.

## Панель управления

* Кнопка «Панель» открывает/скрывает панель.
* Горячая клавиша: `P`.
* Перетаскивание: хватай заголовок панели.
* Связанные токены:

  * `Radius` → `--radius`
  * `Hue` → `--hue`
  * `Saturation` → `--sat`
  * `Shadow` → `--shadow-strength`

## Кастомизация

Токены в `styles/tokens.css`:

```css
:root{
  --radius:16px;
  --hue:265;
  --sat:92%;
  --shadow-strength:0.35;
  --primary: hsl(var(--hue) var(--sat) 60%);
}
```

Компоненты донастраиваются в `components.css`. Анимации — в `layout.css` и `animations.css`.

## Доступность

* Контраст и фокус-обводки на интерактивных элементах.
* Без навязчивых автозвуков и вспышек. Анимации краткие.

## Совместимость

Современные Chrome/Edge/Firefox/Safari. Мобильные Safari/Chrome 15+.

## Лицензии

* **Код**: MIT (`LICENSE`)
* **Контент**: CC BY-NC 4.0 (`LICENSE-content`)

## Автор

[Ama](https://github.com/AmaLS367)

````

---

## Design Lab (EN)

A portfolio project to showcase interface design and front-end skills. Pure HTML/CSS/JS. No dependencies or build tools.

### Features
- Section hash router: `Home / Components / Animations / Experiments / Case`
- Draggable control panel: Radius, Hue, Saturation, Shadow
- Design tokens: color, radii, shadows, saturation
- UI kit: buttons, cards, forms, pricing
- Animations: spinner, shimmer, pulse, float, bounce, 3D tilt, SVG blob morph
- Experiments: glass / neu / clay / gradients
- Theme: dark only

### Structure
See tree above.

### Quick start
Open `index.html` directly with Live server

### Navigation

All `#route` links switch sections without reload. Active tab uses `aria-current="page"`.

### Control panel

* Toggle via **Panel** button or `P`.
* Drag by the panel header.
* Token mapping:

  * `Radius` → `--radius`
  * `Hue` → `--hue`
  * `Saturation` → `--sat`
  * `Shadow` → `--shadow-strength`

### Customization

Adjust tokens in `styles/tokens.css`. Extend components in `components.css`. Animations live in `layout.css` and `animations.css`.

### Accessibility

Visible focus states. Reasonable motion. No flashing.

### Compatibility

Modern Chrome/Edge/Firefox/Safari. Mobile Safari/Chrome 15+.

### License

* **Code**: MIT (`LICENSE`)
* **Content**: CC BY-NC 4.0 (`LICENSE-content`)
  State clearly: “Code: MIT. Content: CC BY-NC 4.0”.

### Author

[Ama](https://github.com/AmaLS367)
