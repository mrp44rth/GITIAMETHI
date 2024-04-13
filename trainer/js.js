// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++, "Atul Pathak", "62183035", "./trainer/AtulPathak_62183035/1.bmp", "./trainer/AtulPathak_62183035/2.bmp", "./trainer/AtulPathak_62183035/3.bmp", "./trainer/AtulPathak_62183035/4.bmp", "./trainer/AtulPathak_62183035/5.bmp"],
[i++, "Ankita Mishra", "98023891", "./trainer/AnkitaMishra_98023891/1.bmp", "./trainer/AnkitaMishra_98023891/2.bmp", "./trainer/AnkitaMishra_98023891/3.bmp", "./trainer/AnkitaMishra_98023891/4.bmp", "./trainer/AnkitaMishra_98023891/5.bmp"],
  [i++, "Deepanjali Pathak", "33531333", "./trainer/DeepanjaliPathak_33531333/1.bmp", "./trainer/DeepanjaliPathak_33531333/2.bmp", "./trainer/DeepanjaliPathak_33531333/3.bmp", "./trainer/DeepanjaliPathak_33531333/4.bmp", "./trainer/DeepanjaliPathak_33531333/5.bmp"],
  [i++, "Priya Pathak", "88241499", "./trainer/Priyapathak_88241499/1.bmp", "./trainer/Priyapathak_88241499/2.bmp", "./trainer/Priyapathak_88241499/3.bmp", "./trainer/Priyapathak_88241499/4.bmp", "./trainer/Priyapathak_88241499/5.bmp"],
         // 1-30 are done....
// adding more rows..

];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
