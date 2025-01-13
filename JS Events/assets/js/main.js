//----------------------Task1--------------------------------------


document.addEventListener('keydown', function (event) {
    const container = document.getElementById('textContainer');

    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();

        // Замінити div на textarea
        const text = container.textContent;
        const textarea = document.createElement('textarea');
        textarea.value = text;

        container.parentNode.replaceChild(textarea, container);
        textarea.focus();
    }
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();

        // Замінити textarea на div
        const textarea = document.querySelector('textarea');
        if (textarea) {
            const text = textarea.value;
            const div = document.createElement('div');
            div.id = 'textContainer';
            div.textContent = text;

            textarea.parentNode.replaceChild(div, textarea);
        }
    }
});

    //----------------------Task2--------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        const table = document.getElementById('dataTable');
        const headers = table.querySelectorAll('th');

        headers.forEach((header, index) => {
            header.addEventListener('click', () => {
                sortTableByColumn(table, index);
            });
        });
    });

    function sortTableByColumn(table, columnIndex) {
        const rows = Array.from(table.querySelector('tbody').rows);
        const isNumericColumn = !isNaN(rows[0].cells[columnIndex].textContent);

        rows.sort((a, b) => {
            const aText = a.cells[columnIndex].textContent;
            const bText = b.cells[columnIndex].textContent;

            if (isNumericColumn) {
                return parseFloat(aText) - parseFloat(bText);
            } else {
                return aText.localeCompare(bText);
            }
        });

        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';
        rows.forEach(row => tbody.appendChild(row));
    }

    //----------------------Task3--------------------------------------

    const resizable = document.getElementById('resizable');
    const resizer = resizable.querySelector('.resizer');

    resizer.addEventListener('mousedown', (event) => {
        event.preventDefault();

        const startX = event.clientX;
        const startY = event.clientY;
        const startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
        const startHeight = parseInt(document.defaultView.getComputedStyle(resizable).height, 10);

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