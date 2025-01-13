"use strict";

//----------------------Task1--------------------------------------
var items = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4']; // Функция для создания нумерованного списка

function addNumberedList(containerId, items) {
  // Находим контейнер по ID
  var container = document.getElementById(containerId); // Создаем элемент <ol> (нумерованный список)

  var ol = document.createElement('ol'); // Добавляем элементы списка

  items.forEach(function (item) {
    var li = document.createElement('li');
    li.textContent = item;
    ol.appendChild(li);
  }); // Добавляем список в контейнер

  container.appendChild(ol);
} // Вызов функции для добавления списка в контейнер с ID 'listContainer'


addNumberedList('listContainer', items); //----------------------Task2--------------------------------------