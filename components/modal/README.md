#  Компонент модального окна

Базовая разметка модального окна

```html
<div class="modal modal-example">
  <div class="modal-content">
    <button class="js-modal-close" type="button">Закрыть окно</button>
    <!-- Контент модального окна -->
  </div>
</div>
```

Минимальный набор стилей, которое необходимо для работы модальных окон. Стили помеченные звёздочкой можно менять по своему усмотрению.

```scss
html,
body {
  height: 100%;
}

.body-modal {
  overflow-y: hidden;
}

.modal {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5); /* */

  &-content {
    position: absolute;
    top: 50px; /* */
    left: 50%;
    margin-bottom: 50px; /* */
    transform: translateX(-50%);
    width: 660px; /* */
    background-color: #ffffff; /* */
    padding: 20px; /* */
  }

  &-open {
    display: block;
  }
}
```

Вызов модального окна осуществляется добавлением класса `.js-get-modal` для любого элемента. При этом указание на модальное окно, которое открываем, указывается через аттрибут `data-target`. В атриубуте указывается **селектор** который выбирает модальное окно. Это может быть любой селектор CSS по id или классу.

Пример вызова окон.

```html
<a href="#" class="js-get-modal" data-target=".modal-example"> Открыть модальное окно.</a>

<a href="#" class="js-get-modal" data-target="#modal-id"> Открыть модальное окно.</a>

<a href="#" class="js-get-modal"> Открыть модальное окно.</a>
```

В последнем случае, без указанной цели, откроется первое модальное окно на странице.

Скрит модального окна можно скачать здесь.

[Полная версия](js/modal.js)

[Сжатая версия](js/modal.min.js)
