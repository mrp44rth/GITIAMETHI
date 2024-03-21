// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++, "Abhishek Shukla", "80589736", "./SMT/AbhishekShukla_80589736/1.bmp", "./SMT/AbhishekShukla_80589736/2.bmp", "./SMT/AbhishekShukla_80589736/3.bmp", "./SMT/AbhishekShukla_80589736/4.bmp", "./SMT/AbhishekShukla_80589736/5.bmp"],
[i++, "Adarsh Kumar", "82434469", "./SMT/AdarshKumar_82434469/1.bmp", "./SMT/AdarshKumar_82434469/2.bmp", "./SMT/AdarshKumar_82434469/3.bmp", "./SMT/AdarshKumar_82434469/4.bmp", "./SMT/AdarshKumar_82434469/5.bmp"],
[i++, "Aditya Agrahari", "60749873", "./SMT/AdityaAgrahari_60749873/1.bmp", "./SMT/AdityaAgrahari_60749873/2.bmp", "./SMT/AdityaAgrahari_60749873/3.bmp", "./SMT/AdityaAgrahari_60749873/4.bmp", "./SMT/AdityaAgrahari_60749873/5.bmp"],
[i++, "Alok Gupta", "94502333", "./SMT/AlokGupta_94502333/1.bmp", "./SMT/AlokGupta_94502333/2.bmp", "./SMT/AlokGupta_94502333/3.bmp", "./SMT/AlokGupta_94502333/4.bmp", "./SMT/AlokGupta_94502333/5.bmp"],
[i++, "Alok Pandey", "57532370", "./SMT/AlokPandey_57532370/1.bmp", "./SMT/AlokPandey_57532370/2.bmp", "./SMT/AlokPandey_57532370/3.bmp", "./SMT/AlokPandey_57532370/4.bmp", "./SMT/AlokPandey_57532370/5.bmp"],
[i++, "Aman Kashyap", "21295551", "./SMT/AmanKashyap_21295551/1.bmp", "./SMT/AmanKashyap_21295551/2.bmp", "./SMT/AmanKashyap_21295551/3.bmp", "./SMT/AmanKashyap_21295551/4.bmp", "./SMT/AmanKashyap_21295551/5.bmp"],
[i++, "Amardeep", "2501800", "./SMT/Amardeep_2501800/1.bmp", "./SMT/Amardeep_2501800/2.bmp", "./SMT/Amardeep_2501800/3.bmp", "./SMT/Amardeep_2501800/4.bmp", "./SMT/Amardeep_2501800/5.bmp"],
[i++, "Anil Kumar", "52368237", "./SMT/AnilKumar_52368237/1.bmp", "./SMT/AnilKumar_52368237/2.bmp", "./SMT/AnilKumar_52368237/3.bmp", "./SMT/AnilKumar_52368237/4.bmp", "./SMT/AnilKumar_52368237/5.bmp"],
[i++, "Anil Kumar Gupta", "4621453", "./SMT/AnilKumarGupta_4621453/1.bmp", "./SMT/AnilKumarGupta_4621453/2.bmp", "./SMT/AnilKumarGupta_4621453/3.bmp", "./SMT/AnilKumarGupta_4621453/4.bmp", "./SMT/AnilKumarGupta_4621453/5.bmp"],
[i++, "Ankit Yadav", "62193197", "./SMT/AnkitYadav_62193197/1.bmp", "./SMT/AnkitYadav_62193197/2.bmp", "./SMT/AnkitYadav_62193197/3.bmp", "./SMT/AnkitYadav_62193197/4.bmp", "./SMT/AnkitYadav_62193197/5.bmp"],
[i++, "Anmol Baranwal", "81628980", "./SMT/AnmolBaranwal_81628980/1.bmp", "./SMT/AnmolBaranwal_81628980/2.bmp", "./SMT/AnmolBaranwal_81628980/3.bmp", "./SMT/AnmolBaranwal_81628980/4.bmp", "./SMT/AnmolBaranwal_81628980/5.bmp"],
[i++, "Arjun Baghel", "76686443", "./SMT/ArjunBaghel_76686443/1.bmp", "./SMT/ArjunBaghel_76686443/2.bmp", "./SMT/ArjunBaghel_76686443/3.bmp", "./SMT/ArjunBaghel_76686443/4.bmp", "./SMT/ArjunBaghel_76686443/5.bmp"],
[i++, "Arti Rani Pal", "46611773", "./SMT/ArtiRaniPal_46611773/1.bmp", "./SMT/ArtiRaniPal_46611773/2.bmp", "./SMT/ArtiRaniPal_46611773/3.bmp", "./SMT/ArtiRaniPal_46611773/4.bmp", "./SMT/ArtiRaniPal_46611773/5.bmp"],
[i++, "Arvind Tiwari", "40055422", "./SMT/ArvindTiwari_40055422/1.bmp", "./SMT/ArvindTiwari_40055422/2.bmp", "./SMT/ArvindTiwari_40055422/3.bmp", "./SMT/ArvindTiwari_40055422/4.bmp", "./SMT/ArvindTiwari_40055422/5.bmp"],
[i++, "Asheesh Gupta", "13668417", "./SMT/AsheeshGupta_13668417/1.bmp", "./SMT/AsheeshGupta_13668417/2.bmp", "./SMT/AsheeshGupta_13668417/3.bmp", "./SMT/AsheeshGupta_13668417/4.bmp", "./SMT/AsheeshGupta_13668417/5.bmp"],
[i++, "Ashutosh Shukla", "3048896", "./SMT/AshutoshShukla_3048896/1.bmp", "./SMT/AshutoshShukla_3048896/2.bmp", "./SMT/AshutoshShukla_3048896/3.bmp", "./SMT/AshutoshShukla_3048896/4.bmp", "./SMT/AshutoshShukla_3048896/5.bmp"],
[i++, "Atul Pathak", "62183035", "./SMT/AtulPathak_62183035/1.bmp", "./SMT/AtulPathak_62183035/2.bmp", "./SMT/AtulPathak_62183035/3.bmp", "./SMT/AtulPathak_62183035/4.bmp", "./SMT/AtulPathak_62183035/5.bmp"],
[i++, "Brijendra Singh", "60620260", "./SMT/BrijendraSingh_60620260/1.bmp", "./SMT/BrijendraSingh_60620260/2.bmp", "./SMT/BrijendraSingh_60620260/3.bmp", "./SMT/BrijendraSingh_60620260/4.bmp", "./SMT/BrijendraSingh_60620260/5.bmp"],
[i++, "Deepa Yadav", "87848311", "./SMT/DeepaYadav_87848311/1.bmp", "./SMT/DeepaYadav_87848311/2.bmp", "./SMT/DeepaYadav_87848311/3.bmp", "./SMT/DeepaYadav_87848311/4.bmp", "./SMT/DeepaYadav_87848311/5.bmp"],
[i++, "Dipanshu Yadav", "66665644", "./SMT/DipanshuYadav_66665644/1.bmp", "./SMT/DipanshuYadav_66665644/2.bmp", "./SMT/DipanshuYadav_66665644/3.bmp", "./SMT/DipanshuYadav_66665644/4.bmp", "./SMT/DipanshuYadav_66665644/5.bmp"],
[i++, "Hari Shankar Vishwakarma", "73098452", "./SMT/HariShankarVishwakarma_73098452/1.bmp", "./SMT/HariShankarVishwakarma_73098452/2.bmp", "./SMT/HariShankarVishwakarma_73098452/3.bmp", "./SMT/HariShankarVishwakarma_73098452/4.bmp", "./SMT/HariShankarVishwakarma_73098452/5.bmp"],
[i++, "Harshvardhan Singh", "63464583", "./SMT/HarshvardhanSingh_63464583/1.bmp", "./SMT/HarshvardhanSingh_63464583/2.bmp", "./SMT/HarshvardhanSingh_63464583/3.bmp", "./SMT/HarshvardhanSingh_63464583/4.bmp", "./SMT/HarshvardhanSingh_63464583/5.bmp"],
[i++, "Himanshu Kanaujiya", "68012067", "./SMT/HimanshuKanaujiya_68012067/1.bmp", "./SMT/HimanshuKanaujiya_68012067/2.bmp", "./SMT/HimanshuKanaujiya_68012067/3.bmp", "./SMT/HimanshuKanaujiya_68012067/4.bmp", "./SMT/HimanshuKanaujiya_68012067/5.bmp"],
[i++, "Jyoti Yadav", "6199794", "./SMT/JyotiYadav_6199794/1.bmp", "./SMT/JyotiYadav_6199794/2.bmp", "./SMT/JyotiYadav_6199794/3.bmp", "./SMT/JyotiYadav_6199794/4.bmp", "./SMT/JyotiYadav_6199794/5.bmp"],
[i++, "Jyoti Yadav", "33091962", "./SMT/JyotiYadav_33091962/1.bmp", "./SMT/JyotiYadav_33091962/2.bmp", "./SMT/JyotiYadav_33091962/3.bmp", "./SMT/JyotiYadav_33091962/4.bmp", "./SMT/JyotiYadav_33091962/5.bmp"],
[i++, "Kuldeep Yadav", "91563015", "./SMT/KuldeepYadav_91563015/1.bmp", "./SMT/KuldeepYadav_91563015/2.bmp", "./SMT/KuldeepYadav_91563015/3.bmp", "./SMT/KuldeepYadav_91563015/4.bmp", "./SMT/KuldeepYadav_91563015/5.bmp"],
[i++, "Manish Kumar", "66720771", "./SMT/ManishKumar_66720771/1.bmp", "./SMT/ManishKumar_66720771/2.bmp", "./SMT/ManishKumar_66720771/3.bmp", "./SMT/ManishKumar_66720771/4.bmp", "./SMT/ManishKumar_66720771/5.bmp"],
[i++, "Manju Pal", "48322256", "./SMT/ManjuPal_48322256/1.bmp", "./SMT/ManjuPal_48322256/2.bmp", "./SMT/ManjuPal_48322256/3.bmp", "./SMT/ManjuPal_48322256/4.bmp", "./SMT/ManjuPal_48322256/5.bmp"],
[i++, "Murlidhar Gupta", "69125086", "./SMT/MurlidharGupta_69125086/1.bmp", "./SMT/MurlidharGupta_69125086/2.bmp", "./SMT/MurlidharGupta_69125086/3.bmp", "./SMT/MurlidharGupta_69125086/4.bmp", "./SMT/MurlidharGupta_69125086/5.bmp"],
[i++, "Naveen Kumar", "14799535", "./SMT/NaveenKumar_14799535/1.bmp", "./SMT/NaveenKumar_14799535/2.bmp", "./SMT/NaveenKumar_14799535/3.bmp", "./SMT/NaveenKumar_14799535/4.bmp", "./SMT/NaveenKumar_14799535/5.bmp"],
[i++, "Nihal", "15470361", "./SMT/Nihal_15470361/1.bmp", "./SMT/Nihal_15470361/2.bmp", "./SMT/Nihal_15470361/3.bmp", "./SMT/Nihal_15470361/4.bmp", "./SMT/Nihal_15470361/5.bmp"],
[i++, "Nikhil Singh", "92355715", "./SMT/NikhilSingh_92355715/1.bmp", "./SMT/NikhilSingh_92355715/2.bmp", "./SMT/NikhilSingh_92355715/3.bmp", "./SMT/NikhilSingh_92355715/4.bmp", "./SMT/NikhilSingh_92355715/5.bmp"],
[i++, "ArvindTiwari", "40055422", "./SMT/ArvindTiwari_40055422/1.bmp", "./SMT/ArvindTiwari_40055422/2.bmp", "./SMT/ArvindTiwari_40055422/3.bmp", "./SMT/ArvindTiwari_40055422/4.bmp", "./SMT/ArvindTiwari_40055422/5.bmp"],
[i++, "BrijendraSingh", "60620260", "./SMT/BrijendraSingh_60620260/1.bmp", "./SMT/BrijendraSingh_60620260/2.bmp", "./SMT/BrijendraSingh_60620260/3.bmp", "./SMT/BrijendraSingh_60620260/4.bmp", "./SMT/BrijendraSingh_60620260/5.bmp"],

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
