"use strict";

//----------------------Task1--------------------------------------
document.addEventListener('keydown', function (event) {
  var container = document.getElementById('textContainer');

  if (event.ctrlKey && event.key === 'e') {
    event.preventDefault(); // Замінити div на textarea

    var text = container.textContent;
    var textarea = document.createElement('textarea');
    textarea.value = text;
    container.parentNode.replaceChild(textarea, container);
    textarea.focus();
  }

  if (event.ctrlKey && event.key === 's') {
    event.preventDefault(); // Замінити textarea на div

    var _textarea = document.querySelector('textarea');

    if (_textarea) {
      var _text = _textarea.value;
      var div = document.createElement('div');
      div.id = 'textContainer';
      div.textContent = _text;

      _textarea.parentNode.replaceChild(div, _textarea);
    }
  }
}); //----------------------Task2--------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var table = document.getElementById('dataTable');
  var headers = table.querySelectorAll('th');
  headers.forEach(function (header, index) {
    header.addEventListener('click', function () {
      sortTableByColumn(table, index);
    });
  });
});

function sortTableByColumn(table, columnIndex) {
  var rows = Array.from(table.querySelector('tbody').rows);
  var isNumericColumn = !isNaN(rows[0].cells[columnIndex].textContent);
  rows.sort(function (a, b) {
    var aText = a.cells[columnIndex].textContent;
    var bText = b.cells[columnIndex].textContent;

    if (isNumericColumn) {
      return parseFloat(aText) - parseFloat(bText);
    } else {
      return aText.localeCompare(bText);
    }
  });
  var tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  rows.forEach(function (row) {
    return tbody.appendChild(row);
  });
} //----------------------Task3--------------------------------------


var resizable = document.getElementById('resizable');
var resizer = resizable.querySelector('.resizer');
resizer.addEventListener('mousedown', function (event) {
  event.preventDefault();
  var startX = event.clientX;
  var startY = event.clientY;
  var startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
  var startHeight = parseInt(document.defaultView.getComputedStyle(resizable).height, 10);

  function doDrag(e) {
    resizable.style.width = startWidth + e.clientX - startX + 'px';
    resizable.style.height = startHeight + e.clientY - startY + 'px';
  }

  function stopDrag() {
    document.removeEventListener('mousemove', doDrag);
    document.removeEventListener('mouseup', stopDrag);
  }

  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
});