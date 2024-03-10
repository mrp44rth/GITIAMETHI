// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"FAP Anchal -18","****","./FAP/FAP Anchal -18/1.bmp","./FAP/FAP Anchal -18/2.bmp","./FAP/FAP Anchal -18/3.bmp","./FAP/FAP Anchal -18/4.bmp","./FAP/FAP Anchal -18/5.bmp"],
[i++,"FAP Anjali yadav -31","****","./FAP/FAP Anjali yadav -31/1.bmp","./FAP/FAP Anjali yadav -31/2.bmp","./FAP/FAP Anjali yadav -31/3.bmp","./FAP/FAP Anjali yadav -31/4.bmp","./FAP/FAP Anjali yadav -31/5.bmp"],
[i++,"FAP Aradhna yadav -29","****","./FAP/FAP Aradhna yadav -29/1.bmp","./FAP/FAP Aradhna yadav -29/2.bmp","./FAP/FAP Aradhna yadav -29/3.bmp","./FAP/FAP Aradhna yadav -29/4.bmp","./FAP/FAP Aradhna yadav -29/5.bmp"],
[i++,"FAP Arti maurya -16","****","./FAP/FAP Arti maurya -16/1.bmp","./FAP/FAP Arti maurya -16/2.bmp","./FAP/FAP Arti maurya -16/3.bmp","./FAP/FAP Arti maurya -16/4.bmp","./FAP/FAP Arti maurya -16/5.bmp"],
[i++,"FAP Chaya-15","****","./FAP/FAP Chaya-15/1.bmp","./FAP/FAP Chaya-15/2.bmp","./FAP/FAP Chaya-15/3.bmp","./FAP/FAP Chaya-15/4.bmp","./FAP/FAP Chaya-15/5.bmp"],
[i++,"FAP Deepai -5","****","./FAP/FAP Deepai -5/1.bmp","./FAP/FAP Deepai -5/2.bmp","./FAP/FAP Deepai -5/3.bmp","./FAP/FAP Deepai -5/4.bmp","./FAP/FAP Deepai -5/5.bmp"],
[i++,"FAP Jyoti -11","****","./FAP/FAP Jyoti -11/1.bmp","./FAP/FAP Jyoti -11/2.bmp","./FAP/FAP Jyoti -11/3.bmp","./FAP/FAP Jyoti -11/4.bmp","./FAP/FAP Jyoti -11/5.bmp"],
[i++,"FAP Jyoti devi -24","****","./FAP/FAP Jyoti devi -24/1.bmp","./FAP/FAP Jyoti devi -24/2.bmp","./FAP/FAP Jyoti devi -24/3.bmp","./FAP/FAP Jyoti devi -24/4.bmp","./FAP/FAP Jyoti devi -24/5.bmp"],
[i++,"FAP Kajal -37","****","./FAP/FAP Kajal -37/1.bmp","./FAP/FAP Kajal -37/2.bmp","./FAP/FAP Kajal -37/3.bmp","./FAP/FAP Kajal -37/4.bmp","./FAP/FAP Kajal -37/5.bmp"],
[i++,"FAP Kalawati -7","****","./FAP/FAP Kalawati -7/1.bmp","./FAP/FAP Kalawati -7/2.bmp","./FAP/FAP Kalawati -7/3.bmp","./FAP/FAP Kalawati -7/4.bmp","./FAP/FAP Kalawati -7/5.bmp"],
[i++,"FAP Kanak singh-21","****","./FAP/FAP Kanak singh-21/1.bmp","./FAP/FAP Kanak singh-21/2.bmp","./FAP/FAP Kanak singh-21/3.bmp","./FAP/FAP Kanak singh-21/4.bmp","./FAP/FAP Kanak singh-21/5.bmp"],
[i++,"FAP Kirti -38","****","./FAP/FAP Kirti -38/1.bmp","./FAP/FAP Kirti -38/2.bmp","./FAP/FAP Kirti -38/3.bmp","./FAP/FAP Kirti -38/4.bmp","./FAP/FAP Kirti -38/5.bmp"],
[i++,"FAP Lalita -17","****","./FAP/FAP Lalita -17/1.bmp","./FAP/FAP Lalita -17/2.bmp","./FAP/FAP Lalita -17/3.bmp","./FAP/FAP Lalita -17/4.bmp","./FAP/FAP Lalita -17/5.bmp"],
[i++,"FAP Malti devi -25","****","./FAP/FAP Malti devi -25/1.bmp","./FAP/FAP Malti devi -25/2.bmp","./FAP/FAP Malti devi -25/3.bmp","./FAP/FAP Malti devi -25/4.bmp","./FAP/FAP Malti devi -25/5.bmp"],
[i++,"FAP Manshi shukla -33","****","./FAP/FAP Manshi shukla -33/1.bmp","./FAP/FAP Manshi shukla -33/2.bmp","./FAP/FAP Manshi shukla -33/3.bmp","./FAP/FAP Manshi shukla -33/4.bmp","./FAP/FAP Manshi shukla -33/5.bmp"],
[i++,"FAP Moni -22","****","./FAP/FAP Moni -22/1.bmp","./FAP/FAP Moni -22/2.bmp","./FAP/FAP Moni -22/3.bmp","./FAP/FAP Moni -22/4.bmp","./FAP/FAP Moni -22/5.bmp"],
[i++,"FAP Monika -13","****","./FAP/FAP Monika -13/1.bmp","./FAP/FAP Monika -13/2.bmp","./FAP/FAP Monika -13/3.bmp","./FAP/FAP Monika -13/4.bmp","./FAP/FAP Monika -13/5.bmp"],
[i++,"FAP Neelam -32","****","./FAP/FAP Neelam -32/1.bmp","./FAP/FAP Neelam -32/2.bmp","./FAP/FAP Neelam -32/3.bmp","./FAP/FAP Neelam -32/4.bmp","./FAP/FAP Neelam -32/5.bmp"],
[i++,"FAP Neetu yadav-6","****","./FAP/FAP Neetu yadav-6/1.bmp","./FAP/FAP Neetu yadav-6/2.bmp","./FAP/FAP Neetu yadav-6/3.bmp","./FAP/FAP Neetu yadav-6/4.bmp","./FAP/FAP Neetu yadav-6/5.bmp"],
[i++,"FAP Neha -35","****","./FAP/FAP Neha -35/1.bmp","./FAP/FAP Neha -35/2.bmp","./FAP/FAP Neha -35/3.bmp","./FAP/FAP Neha -35/4.bmp","./FAP/FAP Neha -35/5.bmp"],
[i++,"FAP Priti -19","****","./FAP/FAP Priti -19/1.bmp","./FAP/FAP Priti -19/2.bmp","./FAP/FAP Priti -19/3.bmp","./FAP/FAP Priti -19/4.bmp","./FAP/FAP Priti -19/5.bmp"],
[i++,"FAP Seema -10","****","./FAP/FAP Seema -10/1.bmp","./FAP/FAP Seema -10/2.bmp","./FAP/FAP Seema -10/3.bmp","./FAP/FAP Seema -10/4.bmp","./FAP/FAP Seema -10/5.bmp"],
[i++,"FAP Sejal -34","****","./FAP/FAP Sejal -34/1.bmp","./FAP/FAP Sejal -34/2.bmp","./FAP/FAP Sejal -34/3.bmp","./FAP/FAP Sejal -34/4.bmp","./FAP/FAP Sejal -34/5.bmp"],
[i++,"FAP Suhani yadav -37","****","./FAP/FAP Suhani yadav -37/1.bmp","./FAP/FAP Suhani yadav -37/2.bmp","./FAP/FAP Suhani yadav -37/3.bmp","./FAP/FAP Suhani yadav -37/4.bmp","./FAP/FAP Suhani yadav -37/5.bmp"],
[i++,"FAP Vineeta kashyap -9","****","./FAP/FAP Vineeta kashyap -9/1.bmp","./FAP/FAP Vineeta kashyap -9/2.bmp","./FAP/FAP Vineeta kashyap -9/3.bmp","./FAP/FAP Vineeta kashyap -9/4.bmp","./FAP/FAP Vineeta kashyap -9/5.bmp"],
[i++,"FAP Vinita -20","****","./FAP/FAP Vinita -20/1.bmp","./FAP/FAP Vinita -20/2.bmp","./FAP/FAP Vinita -20/3.bmp","./FAP/FAP Vinita -20/4.bmp","./FAP/FAP Vinita -20/5.bmp"],
[i++,"FAP Riya singh -27","****","./FAP/FAP Riya singh -27/1.bmp","./FAP/FAP Riya singh -27/2.bmp","./FAP/FAP Riya singh -27/3.bmp","./FAP/FAP Riya singh -27/4.bmp","./FAP/FAP Riya singh -27/5.bmp"],
[i++,"FAP Sarita -23","****","./FAP/FAP Sarita -23/1.bmp","./FAP/FAP Sarita -23/2.bmp","./FAP/FAP Sarita -23/3.bmp","./FAP/FAP Sarita -23/4.bmp","./FAP/FAP Sarita -23/5.bmp"],
[i++,"FAP Shivani -28","****","./FAP/FAP Shivani -28/1.bmp","./FAP/FAP Shivani -28/2.bmp","./FAP/FAP Shivani -28/3.bmp","./FAP/FAP Shivani -28/4.bmp","./FAP/FAP Shivani -28/5.bmp"],
[i++,"FAP Soni -36","****","./FAP/FAP Soni -36/1.bmp","./FAP/FAP Soni -36/2.bmp","./FAP/FAP Soni -36/3.bmp","./FAP/FAP Soni -36/4.bmp","./FAP/FAP Soni -36/5.bmp"],
[i++,"FAP Suman parajapati -8","****","./FAP/FAP Suman parajapati -8/1.bmp","./FAP/FAP Suman parajapati -8/2.bmp","./FAP/FAP Suman parajapati -8/3.bmp","./FAP/FAP Suman parajapati -8/4.bmp","./FAP/FAP Suman parajapati -8/5.bmp"],
[i++,"FAP Supriya -30","****","./FAP/FAP Supriya -30/1.bmp","./FAP/FAP Supriya -30/2.bmp","./FAP/FAP Supriya -30/3.bmp","./FAP/FAP Supriya -30/4.bmp","./FAP/FAP Supriya -30/5.bmp"],
[i++,"FAP Usha kumari -12","****","./FAP/FAP Usha kumari -12/1.bmp","./FAP/FAP Usha kumari -12/2.bmp","./FAP/FAP Usha kumari -12/3.bmp","./FAP/FAP Usha kumari -12/4.bmp","./FAP/FAP Usha kumari -12/5.bmp"],
[i++,"FAP Arjita mishra -14","****","./FAP/FAP Arjita mishra -14/1.bmp","./FAP/FAP Arjita mishra -14/2.bmp","./FAP/FAP Arjita mishra -14/3.bmp","./FAP/FAP Arjita mishra -14/4.bmp","./FAP/FAP Arjita mishra -14/5.bmp"],
[i++,"FAP Seema - 10","****","./FAP/FAP Seema -10/1.bmp","./FAP/FAP Seema -10/2.bmp","./FAP/FAP Seema -10/3.bmp","./FAP/FAP Seema -10/4.bmp","./FAP/FAP Seema -10/5.bmp"],


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
