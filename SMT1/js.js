// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"SMT Abhishek shukla-32","****","./SMT/SMT Abhishek shukla-32/1.bmp","./SMT/SMT Abhishek shukla-32/2.bmp","./SMT/SMT Abhishek shukla-32/3.bmp","./SMT/SMT Abhishek shukla-32/4.bmp","./SMT/SMT Abhishek shukla-32/5.bmp"],
[i++,"SMT Adarsh kumar -50","****","./SMT/SMT Adarsh kumar -50/1.bmp","./SMT/SMT Adarsh kumar -50/2.bmp","./SMT/SMT Adarsh kumar -50/3.bmp","./SMT/SMT Adarsh kumar -50/4.bmp","./SMT/SMT Adarsh kumar -50/5.bmp"],
[i++,"SMT Adarsh kumar mishra-42","****","./SMT/SMT Adarsh kumar mishra-42/1.bmp","./SMT/SMT Adarsh kumar mishra-42/2.bmp","./SMT/SMT Adarsh kumar mishra-42/3.bmp","./SMT/SMT Adarsh kumar mishra-42/4.bmp","./SMT/SMT Adarsh kumar mishra-42/5.bmp"],
[i++,"SMT Alok pandey-43","****","./SMT/SMT Alok pandey-43/1.bmp","./SMT/SMT Alok pandey-43/2.bmp","./SMT/SMT Alok pandey-43/3.bmp","./SMT/SMT Alok pandey-43/4.bmp","./SMT/SMT Alok pandey-43/5.bmp"],
[i++,"SMT Adarsh tiwari -54","****","./SMT/SMT Adarsh tiwari -54/1.bmp","./SMT/SMT Adarsh tiwari -54/2.bmp","./SMT/SMT Adarsh tiwari -54/3.bmp","./SMT/SMT Adarsh tiwari -54/4.bmp","./SMT/SMT Adarsh tiwari -54/5.bmp"],
[i++,"SMT Aditya agrahari -55","****","./SMT/SMT Aditya agrahari -55/1.bmp","./SMT/SMT Aditya agrahari -55/2.bmp","./SMT/SMT Aditya agrahari -55/3.bmp","./SMT/SMT Aditya agrahari -55/4.bmp","./SMT/SMT Aditya agrahari -55/5.bmp"],
[i++,"SMT Anand kumar -36","****","./SMT/SMT Anand kumar -36/1.bmp","./SMT/SMT Anand kumar -36/2.bmp","./SMT/SMT Anand kumar -36/3.bmp","./SMT/SMT Anand kumar -36/4.bmp","./SMT/SMT Anand kumar -36/5.bmp"],
[i++,"SMT Ankit yadav","****","./SMT/SMT Ankit yadav/1.bmp","./SMT/SMT Ankit yadav/2.bmp","./SMT/SMT Ankit yadav/3.bmp","./SMT/SMT Ankit yadav/4.bmp","./SMT/SMT Ankit yadav/5.bmp"],
[i++,"SMT Arti rani pal-39","****","./SMT/SMT Arti rani pal-39/1.bmp","./SMT/SMT Arti rani pal-39/2.bmp","./SMT/SMT Arti rani pal-39/3.bmp","./SMT/SMT Arti rani pal-39/4.bmp","./SMT/SMT Arti rani pal-39/5.bmp"],
[i++,"SMT Arvind tiwari -53","****","./SMT/SMT Arvind tiwari -53/1.bmp","./SMT/SMT Arvind tiwari -53/2.bmp","./SMT/SMT Arvind tiwari -53/3.bmp","./SMT/SMT Arvind tiwari -53/4.bmp","./SMT/SMT Arvind tiwari -53/5.bmp"],
[i++,"SMT Hari shankar vishwakrma-30","****","./SMT/SMT Hari shankar vishwakrma-30/1.bmp","./SMT/SMT Hari shankar vishwakrma-30/2.bmp","./SMT/SMT Hari shankar vishwakrma-30/3.bmp","./SMT/SMT Hari shankar vishwakrma-30/4.bmp","./SMT/SMT Hari shankar vishwakrma-30/5.bmp"],
[i++,"SMT Arjun baghel  49","****","./SMT/SMT Arjun baghel  49/1.bmp","./SMT/SMT Arjun baghel  49/2.bmp","./SMT/SMT Arjun baghel  49/3.bmp","./SMT/SMT Arjun baghel  49/4.bmp","./SMT/SMT Arjun baghel  49/5.bmp"],
[i++,"SMT Ashutosh shukla -57","****","./SMT/SMT Ashutosh shukla -57/1.bmp","./SMT/SMT Ashutosh shukla -57/2.bmp","./SMT/SMT Ashutosh shukla -57/3.bmp","./SMT/SMT Ashutosh shukla -57/4.bmp","./SMT/SMT Ashutosh shukla -57/5.bmp"],
[i++,"SMT Brijendra singh","****","./SMT/SMT Brijendra singh/1.bmp","./SMT/SMT Brijendra singh/2.bmp","./SMT/SMT Brijendra singh/3.bmp","./SMT/SMT Brijendra singh/4.bmp","./SMT/SMT Brijendra singh/5.bmp"],
[i++,"SMT Jyoti pal-40","****","./SMT/SMT Jyoti pal-40/1.bmp","./SMT/SMT Jyoti pal-40/2.bmp","./SMT/SMT Jyoti pal-40/3.bmp","./SMT/SMT Jyoti pal-40/4.bmp","./SMT/SMT Jyoti pal-40/5.bmp"],
[i++,"SMT jyoti yadav -46","****","./SMT/SMT jyoti yadav -46/1.bmp","./SMT/SMT jyoti yadav -46/2.bmp","./SMT/SMT jyoti yadav -46/3.bmp","./SMT/SMT jyoti yadav -46/4.bmp","./SMT/SMT jyoti yadav -46/5.bmp"],
[i++,"SMT Manju pal-38","****","./SMT/SMT Manju pal-38/1.bmp","./SMT/SMT Manju pal-38/2.bmp","./SMT/SMT Manju pal-38/3.bmp","./SMT/SMT Manju pal-38/4.bmp","./SMT/SMT Manju pal-38/5.bmp"],
[i++,"SMT Naveen kumar -31","****","./SMT/SMT Naveen kumar -31/1.bmp","./SMT/SMT Naveen kumar -31/2.bmp","./SMT/SMT Naveen kumar -31/3.bmp","./SMT/SMT Naveen kumar -31/4.bmp","./SMT/SMT Naveen kumar -31/5.bmp"],
[i++,"SMT Nikhil singh-34","****","./SMT/SMT Nikhil singh-34/1.bmp","./SMT/SMT Nikhil singh-34/2.bmp","./SMT/SMT Nikhil singh-34/3.bmp","./SMT/SMT Nikhil singh-34/4.bmp","./SMT/SMT Nikhil singh-34/5.bmp"],
[i++,"SMT Pawan kumar -44","****","./SMT/SMT Pawan kumar -44/1.bmp","./SMT/SMT Pawan kumar -44/2.bmp","./SMT/SMT Pawan kumar -44/3.bmp","./SMT/SMT Pawan kumar -44/4.bmp","./SMT/SMT Pawan kumar -44/5.bmp"],
[i++,"SMT Rakesh kumar -20","****","./SMT/SMT Rakesh kumar -20/1.bmp","./SMT/SMT Rakesh kumar -20/2.bmp","./SMT/SMT Rakesh kumar -20/3.bmp","./SMT/SMT Rakesh kumar -20/4.bmp","./SMT/SMT Rakesh kumar -20/5.bmp"],
[i++,"SMT Ravi singh -24","****","./SMT/SMT Ravi singh -24/1.bmp","./SMT/SMT Ravi singh -24/2.bmp","./SMT/SMT Ravi singh -24/3.bmp","./SMT/SMT Ravi singh -24/4.bmp","./SMT/SMT Ravi singh -24/5.bmp"],
[i++,"SMT Himanshu kanujiya -61","****","./SMT/SMT Himanshu kanujiya -61/1.bmp","./SMT/SMT Himanshu kanujiya -61/2.bmp","./SMT/SMT Himanshu kanujiya -61/3.bmp","./SMT/SMT Himanshu kanujiya -61/4.bmp","./SMT/SMT Himanshu kanujiya -61/5.bmp"],
[i++,"SMT Kuldeep yadav-35","****","./SMT/SMT Kuldeep yadav-35/1.bmp","./SMT/SMT Kuldeep yadav-35/2.bmp","./SMT/SMT Kuldeep yadav-35/3.bmp","./SMT/SMT Kuldeep yadav-35/4.bmp","./SMT/SMT Kuldeep yadav-35/5.bmp"],
[i++,"SMT Nihal sahu-28","****","./SMT/SMT Nihal sahu-28/1.bmp","./SMT/SMT Nihal sahu-28/2.bmp","./SMT/SMT Nihal sahu-28/3.bmp","./SMT/SMT Nihal sahu-28/4.bmp","./SMT/SMT Nihal sahu-28/5.bmp"],
[i++,"SMT Prasiddha nath","****","./SMT/SMT Prasiddha nath/1.bmp","./SMT/SMT Prasiddha nath/2.bmp","./SMT/SMT Prasiddha nath/3.bmp","./SMT/SMT Prasiddha nath/4.bmp","./SMT/SMT Prasiddha nath/5.bmp"],
[i++,"SMT Rohit-45","****","./SMT/SMT Rohit-45/1.bmp","./SMT/SMT Rohit-45/2.bmp","./SMT/SMT Rohit-45/3.bmp","./SMT/SMT Rohit-45/4.bmp","./SMT/SMT Rohit-45/5.bmp"],
[i++,"SMT Sachin-18","****","./SMT/SMT Sachin-18/1.bmp","./SMT/SMT Sachin-18/2.bmp","./SMT/SMT Sachin-18/3.bmp","./SMT/SMT Sachin-18/4.bmp","./SMT/SMT Sachin-18/5.bmp"],
[i++,"SMT Sanjeev kumar -56","****","./SMT/SMT Sanjeev kumar -56/1.bmp","./SMT/SMT Sanjeev kumar -56/2.bmp","./SMT/SMT Sanjeev kumar -56/3.bmp","./SMT/SMT Sanjeev kumar -56/4.bmp","./SMT/SMT Sanjeev kumar -56/5.bmp"],
[i++,"SMT Saurabh singh -53","****","./SMT/SMT Saurabh singh -53/1.bmp","./SMT/SMT Saurabh singh -53/2.bmp","./SMT/SMT Saurabh singh -53/3.bmp","./SMT/SMT Saurabh singh -53/4.bmp","./SMT/SMT Saurabh singh -53/5.bmp"],
[i++,"SMT Sagar gautam  -48","****","./SMT/SMT Sagar gautam  -48/1.bmp","./SMT/SMT Sagar gautam  -48/2.bmp","./SMT/SMT Sagar gautam  -48/3.bmp","./SMT/SMT Sagar gautam  -48/4.bmp","./SMT/SMT Sagar gautam  -48/5.bmp"],
[i++,"SMT Sakshi singh-58","****","./SMT/SMT Sakshi singh-58/1.bmp","./SMT/SMT Sakshi singh-58/2.bmp","./SMT/SMT Sakshi singh-58/3.bmp","./SMT/SMT Sakshi singh-58/4.bmp","./SMT/SMT Sakshi singh-58/5.bmp"],
[i++,"SMT Sanjeev kumar sharma -26","****","./SMT/SMT Sanjeev kumar sharma -26/1.bmp","./SMT/SMT Sanjeev kumar sharma -26/2.bmp","./SMT/SMT Sanjeev kumar sharma -26/3.bmp","./SMT/SMT Sanjeev kumar sharma -26/4.bmp","./SMT/SMT Sanjeev kumar sharma -26/5.bmp"],
[i++,"SMT Satyam gupta -22","****","./SMT/SMT Satyam gupta -22/1.bmp","./SMT/SMT Satyam gupta -22/2.bmp","./SMT/SMT Satyam gupta -22/3.bmp","./SMT/SMT Satyam gupta -22/4.bmp","./SMT/SMT Satyam gupta -22/5.bmp"],
[i++,"SMT Seeta kumari","****","./SMT/SMT Seeta kumari/1.bmp","./SMT/SMT Seeta kumari/2.bmp","./SMT/SMT Seeta kumari/3.bmp","./SMT/SMT Seeta kumari/4.bmp","./SMT/SMT Seeta kumari/5.bmp"],
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
