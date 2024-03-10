// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"SMT Shankar kashyap-17","****","./SMT2/SMT Shankar kashyap-17/1.bmp","./SMT2/SMT Shankar kashyap-17/2.bmp","./SMT2/SMT Shankar kashyap-17/3.bmp","./SMT2/SMT Shankar kashyap-17/4.bmp","./SMT2/SMT Shankar kashyap-17/5.bmp"],
[i++,"SMT Shivam kashyap -37","****","./SMT2/SMT Shivam kashyap -37/1.bmp","./SMT2/SMT Shivam kashyap -37/2.bmp","./SMT2/SMT Shivam kashyap -37/3.bmp","./SMT2/SMT Shivam kashyap -37/4.bmp","./SMT2/SMT Shivam kashyap -37/5.bmp"],
[i++,"SMT Shradhey dwivedi-47","****","./SMT2/SMT Shradhey dwivedi-47/1.bmp","./SMT2/SMT Shradhey dwivedi-47/2.bmp","./SMT2/SMT Shradhey dwivedi-47/3.bmp","./SMT2/SMT Shradhey dwivedi-47/4.bmp","./SMT2/SMT Shradhey dwivedi-47/5.bmp"],
[i++,"SMT Umesh prajapati-33","****","./SMT2/SMT Umesh prajapati-33/1.bmp","./SMT2/SMT Umesh prajapati-33/2.bmp","./SMT2/SMT Umesh prajapati-33/3.bmp","./SMT2/SMT Umesh prajapati-33/4.bmp","./SMT2/SMT Umesh prajapati-33/5.bmp"],
[i++,"SMT Vinay tiwari -52","****","./SMT2/SMT Vinay tiwari -52/1.bmp","./SMT2/SMT Vinay tiwari -52/2.bmp","./SMT2/SMT Vinay tiwari -52/3.bmp","./SMT2/SMT Vinay tiwari -52/4.bmp","./SMT2/SMT Vinay tiwari -52/5.bmp"],
[i++,"SMT Shivam mishra-41","****","./SMT2/SMT Shivam mishra-41/1.bmp","./SMT2/SMT Shivam mishra-41/2.bmp","./SMT2/SMT Shivam mishra-41/3.bmp","./SMT2/SMT Shivam mishra-41/4.bmp","./SMT2/SMT Shivam mishra-41/5.bmp"],
[i++,"SMT Shubham shukla -29","****","./SMT2/SMT Shubham shukla -29/1.bmp","./SMT2/SMT Shubham shukla -29/2.bmp","./SMT2/SMT Shubham shukla -29/3.bmp","./SMT2/SMT Shubham shukla -29/4.bmp","./SMT2/SMT Shubham shukla -29/5.bmp"],
[i++,"SMT Shivam yadav -14","****","./SMT2/SMT Shivam yadav -14/1.bmp","./SMT2/SMT Shivam yadav -14/2.bmp","./SMT2/SMT Shivam yadav -14/3.bmp","./SMT2/SMT Shivam yadav -14/4.bmp","./SMT2/SMT Shivam yadav -14/5.bmp"],
[i++,"SMT Sunil kumar -19","****","./SMT2/SMT Sunil kumar -19/1.bmp","./SMT2/SMT Sunil kumar -19/2.bmp","./SMT2/SMT Sunil kumar -19/3.bmp","./SMT2/SMT Sunil kumar -19/4.bmp","./SMT2/SMT Sunil kumar -19/5.bmp"],
[i++,"SMT Umesh vishwakarma","****","./SMT2/SMT Umesh vishwakarma/1.bmp","./SMT2/SMT Umesh vishwakarma/2.bmp","./SMT2/SMT Umesh vishwakarma/3.bmp","./SMT2/SMT Umesh vishwakarma/4.bmp","./SMT2/SMT Umesh vishwakarma/5.bmp"],
[i++,"SMT Vikhyat singh","****","./SMT2/SMT Vikhyat singh/1.bmp","./SMT2/SMT Vikhyat singh/2.bmp","./SMT2/SMT Vikhyat singh/3.bmp","./SMT2/SMT Vikhyat singh/4.bmp","./SMT2/SMT Vikhyat singh/5.bmp"],
[i++,"SMT Vipin -59","****","./SMT2/SMT Vipin -59/1.bmp","./SMT2/SMT Vipin -59/2.bmp","./SMT2/SMT Vipin -59/3.bmp","./SMT2/SMT Vipin -59/4.bmp","./SMT2/SMT Vipin -59/5.bmp"],
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
