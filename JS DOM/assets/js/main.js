//----------------------Task1--------------------------------------


const items = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'];

    // Функция для создания нумерованного списка
    function addNumberedList(containerId, items) {
        // Находим контейнер по ID
        const container = document.getElementById(containerId);

        // Создаем элемент <ol> (нумерованный список)
        const ol = document.createElement('ol');

        // Добавляем элементы списка
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ol.appendChild(li);
        });

        // Добавляем список в контейнер
        container.appendChild(ol);
    }

    // Вызов функции для добавления списка в контейнер с ID 'listContainer'
    addNumberedList('listContainer', items);

    //----------------------Task2--------------------------------------
