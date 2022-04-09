import { visitFunctionBody } from 'typescript';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const myButton = document.createElement('button');
    myButton.textContent = 'Удали меня';
    myButton.addEventListener('click', () => {
        document.querySelector('button').remove();
    });
    document.body.append(myButton);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const array = document.createElement('ul');
    for (let x of arr) {
        const item = document.createElement('li');
        item.textContent = x;
        item.onmouseover = function (event) {
            item.title = item.textContent;
        };
        array.appendChild(item);
    }
    document.body.appendChild(array);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';
    link.addEventListener('click', function (event) {
        if (!this.textContent.includes('https://tensor.ru/')) {
            this.textContent = this.textContent + ' https://tensor.ru/';
            event.preventDefault();
        }
    });
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const razm = document.createElement('ul');
    const but = document.createElement('button');
    let createLink = () => {
        const punkt = document.createElement('li');
        punkt.textContent = 'Пункт';
        punkt.addEventListener('click', () => {
            punkt.textContent += '!';
        });
        return punkt;
    };
    razm.appendChild(createLink());
    but.textContent = 'Добавить пункт';
    but.addEventListener('click', () => {
        razm.append(createLink());
    });
    document.body.append(razm);
    document.body.append(but);
}
