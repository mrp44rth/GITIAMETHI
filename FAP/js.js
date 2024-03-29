// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++, "Afsana", "60570617", "./FAP/Afsana_60570617/1.bmp", "./FAP/Afsana_60570617/2.bmp", "./FAP/Afsana_60570617/3.bmp", "./FAP/Afsana_60570617/4.bmp", "./FAP/Afsana_60570617/5.bmp"],
  [i++, "Sejal", "26697118", "./FAP/Sejal_26697118/1.bmp", "./FAP/Sejal_26697118/2.bmp", "./FAP/Sejal_26697118/3.bmp", "./FAP/Sejal_26697118/4.bmp", "./FAP/Sejal_26697118/5.bmp"],
  [i++, "Anchal", "27269972", "./FAP/Anchal_27269972/1.bmp", "./FAP/Anchal_27269972/2.bmp", "./FAP/Anchal_27269972/3.bmp", "./FAP/Anchal_27269972/4.bmp", "./FAP/Anchal_27269972/5.bmp"],
  [i++, "Shivani", "54852317", "./FAP/Shivani_54852317/1.bmp", "./FAP/Shivani_54852317/2.bmp", "./FAP/Shivani_54852317/3.bmp", "./FAP/Shivani_54852317/4.bmp", "./FAP/Shivani_54852317/5.bmp"],
  [i++, "AntimaMaurya", "25290482", "./FAP/AntimaMaurya_25290482/1.bmp", "./FAP/AntimaMaurya_25290482/2.bmp", "./FAP/AntimaMaurya_25290482/3.bmp", "./FAP/AntimaMaurya_25290482/4.bmp", "./FAP/AntimaMaurya_25290482/5.bmp"],
  [i++, "Soni", "42424928", "./FAP/Soni_42424928/1.bmp", "./FAP/Soni_42424928/2.bmp", "./FAP/Soni_42424928/3.bmp", "./FAP/Soni_42424928/4.bmp", "./FAP/Soni_42424928/5.bmp"],
  [i++, "AradhanaYadav", "14836639", "./FAP/AradhanaYadav_14836639/1.bmp", "./FAP/AradhanaYadav_14836639/2.bmp", "./FAP/AradhanaYadav_14836639/3.bmp", "./FAP/AradhanaYadav_14836639/4.bmp", "./FAP/AradhanaYadav_14836639/5.bmp"],
  [i++, "Supriya", "59028525", "./FAP/Supriya_59028525/1.bmp", "./FAP/Supriya_59028525/2.bmp", "./FAP/Supriya_59028525/3.bmp", "./FAP/Supriya_59028525/4.bmp", "./FAP/Supriya_59028525/5.bmp"],
  [i++, "ArjitaMishra", "42449629", "./FAP/ArjitaMishra_42449629/1.bmp", "./FAP/ArjitaMishra_42449629/2.bmp", "./FAP/ArjitaMishra_42449629/3.bmp", "./FAP/ArjitaMishra_42449629/4.bmp", "./FAP/ArjitaMishra_42449629/5.bmp"],
  [i++, "Sushila", "19957731", "./FAP/Sushila_19957731/1.bmp", "./FAP/Sushila_19957731/2.bmp", "./FAP/Sushila_19957731/3.bmp", "./FAP/Sushila_19957731/4.bmp", "./FAP/Sushila_19957731/5.bmp"],
  [i++, "Bindu", "47622557", "./FAP/Bindu_47622557/1.bmp", "./FAP/Bindu_47622557/2.bmp", "./FAP/Bindu_47622557/3.bmp", "./FAP/Bindu_47622557/4.bmp", "./FAP/Bindu_47622557/5.bmp"],
  [i++, "Vineeta", "18875600", "./FAP/Vineeta_18875600/1.bmp", "./FAP/Vineeta_18875600/2.bmp", "./FAP/Vineeta_18875600/3.bmp", "./FAP/Vineeta_18875600/4.bmp", "./FAP/Vineeta_18875600/5.bmp"],
  [i++, "Chandni", "62554767", "./FAP/Chandni_62554767/1.bmp", "./FAP/Chandni_62554767/2.bmp", "./FAP/Chandni_62554767/3.bmp", "./FAP/Chandni_62554767/4.bmp", "./FAP/Chandni_62554767/5.bmp"],
  [i++, "FirojAli", "49898300", "./FAP/FirojAli_49898300/1.bmp", "./FAP/FirojAli_49898300/2.bmp", "./FAP/FirojAli_49898300/3.bmp", "./FAP/FirojAli_49898300/4.bmp", "./FAP/FirojAli_49898300/5.bmp"],
  [i++, "JyotiDevi", "3740203", "./FAP/JyotiDevi_3740203/1.bmp", "./FAP/JyotiDevi_3740203/2.bmp", "./FAP/JyotiDevi_3740203/3.bmp", "./FAP/JyotiDevi_3740203/4.bmp", "./FAP/JyotiDevi_3740203/5.bmp"],
  [i++, "JyotiMaurya", "63440303", "./FAP/JyotiMaurya_63440303/1.bmp", "./FAP/JyotiMaurya_63440303/2.bmp", "./FAP/JyotiMaurya_63440303/3.bmp", "./FAP/JyotiMaurya_63440303/4.bmp", "./FAP/JyotiMaurya_63440303/5.bmp"],
  [i++, "JyotiYadav", "08282539", "./FAP/JyotiYadav_08282539/1.bmp", "./FAP/JyotiYadav_08282539/2.bmp","./FAP/JyotiYadav_08282539/3.bmp","./FAP/JyotiYadav_08282539/4.bmp","./FAP/JyotiYadav_08282539/5.bmp"],
[i++, "Kajal", "39911130", "./FAP/Kajal_39911130/1.bmp", "./FAP/Kajal_39911130/2.bmp", "./FAP/Kajal_39911130/3.bmp", "./FAP/Kajal_39911130/4.bmp", "./FAP/Kajal_39911130/5.bmp"],
  [i++, "KanakSingh", "02598565", "./FAP/KanakSingh_02598565/1.bmp", "./FAP/KanakSingh_02598565/2.bmp", "./FAP/KanakSingh_02598565/3.bmp", "./FAP/KanakSingh_02598565/4.bmp", "./FAP/KanakSingh_02598565/5.bmp"],
  [i++, "KanchanDevi", "13246031", "./FAP/KanchanDevi_13246031/1.bmp", "./FAP/KanchanDevi_13246031/2.bmp", "./FAP/KanchanDevi_13246031/3.bmp", "./FAP/KanchanDevi_13246031/4.bmp", "./FAP/KanchanDevi_13246031/5.bmp"],
  [i++, "Kirti", "03298239", "./FAP/Kirti_03298239/1.bmp", "./FAP/Kirti_03298239/2.bmp", "./FAP/Kirti_03298239/3.bmp", "./FAP/Kirti_03298239/4.bmp", "./FAP/Kirti_03298239/5.bmp"],
  [i++, "Kshama", "74893761", "./FAP/Kshama_74893761/1.bmp", "./FAP/Kshama_74893761/2.bmp", "./FAP/Kshama_74893761/3.bmp", "./FAP/Kshama_74893761/4.bmp", "./FAP/Kshama_74893761/5.bmp"],
  [i++, "Lalita", "95762506", "./FAP/Lalita_95762506/1.bmp", "./FAP/Lalita_95762506/2.bmp", "./FAP/Lalita_95762506/3.bmp", "./FAP/Lalita_95762506/4.bmp", "./FAP/Lalita_95762506/5.bmp"],
  [i++, "LaxmiKori", "60928904", "./FAP/LaxmiKori_60928904/1.bmp", "./FAP/LaxmiKori_60928904/2.bmp", "./FAP/LaxmiKori_60928904/3.bmp", "./FAP/LaxmiKori_60928904/4.bmp", "./FAP/LaxmiKori_60928904/5.bmp"],
  [i++, "MaltiDevi", "24339999", "./FAP/MaltiDevi_24339999/1.bmp", "./FAP/MaltiDevi_24339999/2.bmp", "./FAP/MaltiDevi_24339999/3.bmp", "./FAP/MaltiDevi_24339999/4.bmp", "./FAP/MaltiDevi_24339999/5.bmp"],
  [i++, "Manshi", "77456895", "./FAP/Manshi_77456895/1.bmp", "./FAP/Manshi_77456895/2.bmp", "./FAP/Manshi_77456895/3.bmp", "./FAP/Manshi_77456895/4.bmp", "./FAP/Manshi_77456895/5.bmp"],
  [i++, "Moni", "12722874", "./FAP/Moni_12722874/1.bmp", "./FAP/Moni_12722874/2.bmp", "./FAP/Moni_12722874/3.bmp", "./FAP/Moni_12722874/4.bmp", "./FAP/Moni_12722874/5.bmp"],
  [i++, "Neha", "09078942", "./FAP/Neha_09078942/1.bmp", "./FAP/Neha_09078942/2.bmp", "./FAP/Neha_09078942/3.bmp", "./FAP/Neha_09078942/4.bmp", "./FAP/Neha_09078942/5.bmp"],
  [i++, "Priti", "66741716", "./FAP/Priti_66741716/1.bmp", "./FAP/Priti_66741716/2.bmp", "./FAP/Priti_66741716/3.bmp", "./FAP/Priti_66741716/4.bmp", "./FAP/Priti_66741716/5.bmp"],
  [i++, "SanjuKumari", "36421124", "./FAP/SanjuKumari_36421124/1.bmp", "./FAP/SanjuKumari_36421124/2.bmp", "./FAP/SanjuKumari_36421124/3.bmp", "./FAP/SanjuKumari_36421124/4.bmp", "./FAP/SanjuKumari_36421124/5.bmp"],
  [i++, "SeemaKori", "68880221", "./FAP/SeemaKori_68880221/1.bmp", "./FAP/SeemaKori_68880221/2.bmp", "./FAP/SeemaKori_68880221/3.bmp", "./FAP/SeemaKori_68880221/4.bmp", "./FAP/SeemaKori_68880221/5.bmp"],

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
