// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"SBT Afsana -35","60570617","./SBT/SBT Afsana -35/1.bmp","./SBT/SBT Afsana -35/2.bmp","./SBT/SBT Afsana -35/3.bmp","./SBT/SBT Afsana -35/4.bmp","./SBT/SBT Afsana -35/5.bmp"],
[i++,"SBT Akanksha sharma -37","****","./SBT/SBT Akanksha sharma -37/1.bmp","./SBT/SBT Akanksha sharma -37/2.bmp","./SBT/SBT Akanksha sharma -37/3.bmp","./SBT/SBT Akanksha sharma -37/4.bmp","./SBT/SBT Akanksha sharma -37/5.bmp"],
[i++,"SBT Anamika Verma 23","****","./SBT/SBT Anamika Verma 23/1.bmp","./SBT/SBT Anamika Verma 23/2.bmp","./SBT/SBT Anamika Verma 23/3.bmp","./SBT/SBT Anamika Verma 23/4.bmp","./SBT/SBT Anamika Verma 23/5.bmp"],
[i++,"SBT Anchal -36","27269972","./SBT/SBT Anchal -36/1.bmp","./SBT/SBT Anchal -36/2.bmp","./SBT/SBT Anchal -36/3.bmp","./SBT/SBT Anchal -36/4.bmp","./SBT/SBT Anchal -36/5.bmp"],
[i++,"SBT Anita devi -14","****","./SBT/SBT Anita devi -14/1.bmp","./SBT/SBT Anita devi -14/2.bmp","./SBT/SBT Anita devi -14/3.bmp","./SBT/SBT Anita devi -14/4.bmp","./SBT/SBT Anita devi -14/5.bmp"],
[i++,"SBT Ankita yadav -31","****","./SBT/SBT Ankita yadav -31/1.bmp","./SBT/SBT Ankita yadav -31/2.bmp","./SBT/SBT Ankita yadav -31/3.bmp","./SBT/SBT Ankita yadav -31/4.bmp","./SBT/SBT Ankita yadav -31/5.bmp"],
[i++,"SBT Bindu -21","47622557","./SBT/SBT Bindu -21/1.bmp","./SBT/SBT Bindu -21/2.bmp","./SBT/SBT Bindu -21/3.bmp","./SBT/SBT Bindu -21/4.bmp","./SBT/SBT Bindu -21/5.bmp"],
[i++,"SBT Chandni -34","62554767","./SBT/SBT Chandni -34/1.bmp","./SBT/SBT Chandni -34/2.bmp","./SBT/SBT Chandni -34/3.bmp","./SBT/SBT Chandni -34/4.bmp","./SBT/SBT Chandni -34/5.bmp"],
[i++,"SBT Deepmala gupta -4","****","./SBT/SBT Deepmala gupta -4/1.bmp","./SBT/SBT Deepmala gupta -4/2.bmp","./SBT/SBT Deepmala gupta -4/3.bmp","./SBT/SBT Deepmala gupta -4/4.bmp","./SBT/SBT Deepmala gupta -4/5.bmp"],
[i++,"SBT Jyoti tiwari -29","41436758","./SBT/SBT Jyoti tiwari -29/1.bmp","./SBT/SBT Jyoti tiwari -29/2.bmp","./SBT/SBT Jyoti tiwari -29/3.bmp","./SBT/SBT Jyoti tiwari -29/4.bmp","./SBT/SBT Jyoti tiwari -29/5.bmp"],
[i++,"SBT Kajal -20","68968207/74265522","./SBT/SBT Kajal -20/1.bmp","./SBT/SBT Kajal -20/2.bmp","./SBT/SBT Kajal -20/3.bmp","./SBT/SBT Kajal -20/4.bmp","./SBT/SBT Kajal -20/5.bmp"],
[i++,"SBT Keerti singh -33","****","./SBT/SBT Keerti singh -33/1.bmp","./SBT/SBT Keerti singh -33/2.bmp","./SBT/SBT Keerti singh -33/3.bmp","./SBT/SBT Keerti singh -33/4.bmp","./SBT/SBT Keerti singh -33/5.bmp"],
[i++,"SBT Komal-32","76499563","./SBT/SBT Komal-32/1.bmp","./SBT/SBT Komal-32/2.bmp","./SBT/SBT Komal-32/3.bmp","./SBT/SBT Komal-32/4.bmp","./SBT/SBT Komal-32/5.bmp"],
[i++,"SBT Madhu-10","91799560/56998835","./SBT/SBT Madhu-10/1.bmp","./SBT/SBT Madhu-10/2.bmp","./SBT/SBT Madhu-10/3.bmp","./SBT/SBT Madhu-10/4.bmp","./SBT/SBT Madhu-10/5.bmp"],
[i++,"SBT Madhuri-8","****","./SBT/SBT Madhuri-8/1.bmp","./SBT/SBT Madhuri-8/2.bmp","./SBT/SBT Madhuri-8/3.bmp","./SBT/SBT Madhuri-8/4.bmp","./SBT/SBT Madhuri-8/5.bmp"],
[i++,"SBT Manju yadav -18","85977196","./SBT/SBT Manju yadav -18/1.bmp","./SBT/SBT Manju yadav -18/2.bmp","./SBT/SBT Manju yadav -18/3.bmp","./SBT/SBT Manju yadav -18/4.bmp","./SBT/SBT Manju yadav -18/5.bmp"],
[i++,"SBT Palaksingh -17","3806529","./SBT/SBT Palaksingh -17/1.bmp","./SBT/SBT Palaksingh -17/2.bmp","./SBT/SBT Palaksingh -17/3.bmp","./SBT/SBT Palaksingh -17/4.bmp","./SBT/SBT Palaksingh -17/5.bmp"],
[i++,"SBT Pinki yadav","56429672","./SBT/SBT Pinki yadav/1.bmp","./SBT/SBT Pinki yadav/2.bmp","./SBT/SBT Pinki yadav/3.bmp","./SBT/SBT Pinki yadav/4.bmp","./SBT/SBT Pinki yadav/5.bmp"],
[i++,"SBT Priti yadav-13","****","./SBT/SBT Priti yadav-13/1.bmp","./SBT/SBT Priti yadav-13/2.bmp","./SBT/SBT Priti yadav-13/3.bmp","./SBT/SBT Priti yadav-13/4.bmp","./SBT/SBT Priti yadav-13/5.bmp"],
[i++,"SBT Priya -19","****","./SBT/SBT Priya -19/1.bmp","./SBT/SBT Priya -19/2.bmp","./SBT/SBT Priya -19/3.bmp","./SBT/SBT Priya -19/4.bmp","./SBT/SBT Priya -19/5.bmp"],
[i++,"SBT Ranu singh -11","****","./SBT/SBT Ranu singh -11/1.bmp","./SBT/SBT Ranu singh -11/2.bmp","./SBT/SBT Ranu singh -11/3.bmp","./SBT/SBT Ranu singh -11/4.bmp","./SBT/SBT Ranu singh -11/5.bmp"],
[i++,"SBT Reeta kashyap-15","****","./SBT/SBT Reeta kashyap-15/1.bmp","./SBT/SBT Reeta kashyap-15/2.bmp","./SBT/SBT Reeta kashyap-15/3.bmp","./SBT/SBT Reeta kashyap-15/4.bmp","./SBT/SBT Reeta kashyap-15/5.bmp"],
[i++,"SBT Rinki yadav -7","54337804","./SBT/SBT Rinki yadav -7/1.bmp","./SBT/SBT Rinki yadav -7/2.bmp","./SBT/SBT Rinki yadav -7/3.bmp","./SBT/SBT Rinki yadav -7/4.bmp","./SBT/SBT Rinki yadav -7/5.bmp"],
[i++,"SBT Riya agrahari-5","****","./SBT/SBT Riya agrahari-5/1.bmp","./SBT/SBT Riya agrahari-5/2.bmp","./SBT/SBT Riya agrahari-5/3.bmp","./SBT/SBT Riya agrahari-5/4.bmp","./SBT/SBT Riya agrahari-5/5.bmp"],
[i++,"SBT Shiv kumari -28","44122259","./SBT/SBT Shiv kumari -28/1.bmp","./SBT/SBT Shiv kumari -28/2.bmp","./SBT/SBT Shiv kumari -28/3.bmp","./SBT/SBT Shiv kumari -28/4.bmp","./SBT/SBT Shiv kumari -28/5.bmp"],
[i++,"SBT Shiwani-27","43057534/22732067","./SBT/SBT Shiwani-27/1.bmp","./SBT/SBT Shiwani-27/2.bmp","./SBT/SBT Shiwani-27/3.bmp","./SBT/SBT Shiwani-27/4.bmp","./SBT/SBT Shiwani-27/5.bmp"],
[i++,"SBT Rekha parajapati -16","****","./SBT/SBT Rekha parajapati -16/1.bmp","./SBT/SBT Rekha parajapati -16/2.bmp","./SBT/SBT Rekha parajapati -16/3.bmp","./SBT/SBT Rekha parajapati -16/4.bmp","./SBT/SBT Rekha parajapati -16/5.bmp"],
[i++,"SBT Rekha vishwakarma -25","29741235","./SBT/SBT Rekha vishwakarma -25/1.bmp","./SBT/SBT Rekha vishwakarma -25/2.bmp","./SBT/SBT Rekha vishwakarma -25/3.bmp","./SBT/SBT Rekha vishwakarma -25/4.bmp","./SBT/SBT Rekha vishwakarma -25/5.bmp"],
[i++,"SBT Sanju yadav -12","31476916","./SBT/SBT Sanju yadav -12/1.bmp","./SBT/SBT Sanju yadav -12/2.bmp","./SBT/SBT Sanju yadav -12/3.bmp","./SBT/SBT Sanju yadav -12/4.bmp","./SBT/SBT Sanju yadav -12/5.bmp"],
[i++,"SBT Shalu singh-30","96001116","./SBT/SBT Shalu singh-30/1.bmp","./SBT/SBT Shalu singh-30/2.bmp","./SBT/SBT Shalu singh-30/3.bmp","./SBT/SBT Shalu singh-30/4.bmp","./SBT/SBT Shalu singh-30/5.bmp"],
[i++,"SBT Sonam-9","42773454","./SBT/SBT Sonam-9/1.bmp","./SBT/SBT Sonam-9/2.bmp","./SBT/SBT Sonam-9/3.bmp","./SBT/SBT Sonam-9/4.bmp","./SBT/SBT Sonam-9/5.bmp"],
[i++,"SBT Sudha-22","****","./SBT/SBT Sudha-22/1.bmp","./SBT/SBT Sudha-22/2.bmp","./SBT/SBT Sudha-22/3.bmp","./SBT/SBT Sudha-22/4.bmp","./SBT/SBT Sudha-22/5.bmp"],
[i++,"SBT Vindu -26","51699387","./SBT/SBT Vindu -26/1.bmp","./SBT/SBT Vindu -26/2.bmp","./SBT/SBT Vindu -26/3.bmp","./SBT/SBT Vindu -26/4.bmp","./SBT/SBT Vindu -26/5.bmp"],
[i++,"SBT Srishti jaiswal -24","****","./SBT/SBT Srishti jaiswal -24/1.bmp","./SBT/SBT Srishti jaiswal -24/2.bmp","./SBT/SBT Srishti jaiswal -24/3.bmp","./SBT/SBT Srishti jaiswal -24/4.bmp","./SBT/SBT Srishti jaiswal -24/5.bmp"],

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
