let i=1;
const data = [
[i++, "Anchal", "41349046", "./data/Anchal_41349046/1.bmp", "./data/Anchal_41349046/2.bmp", "./data/Anchal_41349046/3.bmp", "./data/Anchal_41349046/4.bmp", "./data/Anchal_41349046/5.bmp"],
[i++, "Anjali", "47391075", "./data/Anjali_47391075/1.bmp", "./data/Anjali_47391075/2.bmp", "./data/Anjali_47391075/3.bmp", "./data/Anjali_47391075/4.bmp", "./data/Anjali_47391075/5.bmp"],
[i++, "Anjali Mishra", "30340062", "./data/AnjaliMishra_30340062/1.bmp", "./data/AnjaliMishra_30340062/2.bmp", "./data/AnjaliMishra_30340062/3.bmp", "./data/AnjaliMishra_30340062/4.bmp", "./data/AnjaliMishra_30340062/5.bmp"],
[i++, "Anjali Saroj", "44082382", "./data/AnjaliSaroj_44082382/1.bmp", "./data/AnjaliSaroj_44082382/2.bmp", "./data/AnjaliSaroj_44082382/3.bmp", "./data/AnjaliSaroj_44082382/4.bmp", "./data/AnjaliSaroj_44082382/5.bmp"],
[i++, "Ankita", "89504820", "./data/Ankita_89504820/1.bmp", "./data/Ankita_89504820/2.bmp", "./data/Ankita_89504820/3.bmp", "./data/Ankita_89504820/4.bmp", "./data/Ankita_89504820/5.bmp"],
[i++, "Ankita Mishra", "98023891", "./data/AnkitaMishra_98023891/1.bmp", "./data/AnkitaMishra_98023891/2.bmp", "./data/AnkitaMishra_98023891/3.bmp", "./data/AnkitaMishra_98023891/4.bmp", "./data/AnkitaMishra_98023891/5.bmp"],
[i++, "Archana", "28708090", "./data/Archana_28708090/1.bmp", "./data/Archana_28708090/2.bmp", "./data/Archana_28708090/3.bmp", "./data/Archana_28708090/4.bmp", "./data/Archana_28708090/5.bmp"],
[i++, "Archana", "19409782", "./data/Archana_19409782/1.bmp", "./data/Archana_19409782/2.bmp", "./data/Archana_19409782/3.bmp", "./data/Archana_19409782/4.bmp", "./data/Archana_19409782/5.bmp"],
[i++, "Arti Maurya", "96729425", "./data/ArtiMaurya_96729425/1.bmp", "./data/ArtiMaurya_96729425/2.bmp", "./data/ArtiMaurya_96729425/3.bmp", "./data/ArtiMaurya_96729425/4.bmp", "./data/ArtiMaurya_96729425/5.bmp"],
[i++, "GUDIYA", "87932462", "./data/GUDIYA_87932462/1.bmp", "./data/GUDIYA_87932462/2.bmp", "./data/GUDIYA_87932462/3.bmp", "./data/GUDIYA_87932462/4.bmp", "./data/GUDIYA_87932462/5.bmp"],
[i++, "Jyoti Gautam", "19964546", "./data/JyotiGautam_19964546/1.bmp", "./data/JyotiGautam_19964546/2.bmp", "./data/JyotiGautam_19964546/3.bmp", "./data/JyotiGautam_19964546/4.bmp", "./data/JyotiGautam_19964546/5.bmp"],
[i++, "Kanchan Prajapati", "54908206", "./data/KanchanPrajapati_54908206/1.bmp", "./data/KanchanPrajapati_54908206/2.bmp", "./data/KanchanPrajapati_54908206/3.bmp", "./data/KanchanPrajapati_54908206/4.bmp", "./data/KanchanPrajapati_54908206/5.bmp"],
[i++, "Kanti Verma", "14421916", "./data/KantiVerma_14421916/1.bmp", "./data/KantiVerma_14421916/2.bmp", "./data/KantiVerma_14421916/3.bmp", "./data/KantiVerma_14421916/4.bmp", "./data/KantiVerma_14421916/5.bmp"],
[i++, "Khushboo Yadav", "57014808", "./data/KhushbooYadav_57014808/1.bmp", "./data/KhushbooYadav_57014808/2.bmp", "./data/KhushbooYadav_57014808/3.bmp", "./data/KhushbooYadav_57014808/4.bmp", "./data/KhushbooYadav_57014808/5.bmp"],
[i++, "Kranti Kumari", "63945977", "./data/KrantiKumari_63945977/1.bmp", "./data/KrantiKumari_63945977/2.bmp", "./data/KrantiKumari_63945977/3.bmp", "./data/KrantiKumari_63945977/4.bmp", "./data/KrantiKumari_63945977/5.bmp"],
[i++, "Lakshmi Devi", "14085573", "./data/LakshmiDevi_14085573/1.bmp", "./data/LakshmiDevi_14085573/2.bmp", "./data/LakshmiDevi_14085573/3.bmp", "./data/LakshmiDevi_14085573/4.bmp", "./data/LakshmiDevi_14085573/5.bmp"],
[i++, "Manju Devi", "13107915", "./data/ManjuDevi_13107915/1.bmp", "./data/ManjuDevi_13107915/2.bmp", "./data/ManjuDevi_13107915/3.bmp", "./data/ManjuDevi_13107915/4.bmp", "./data/ManjuDevi_13107915/5.bmp"],
[i++, "Muskan", "53917891", "./data/Muskan_53917891/1.bmp", "./data/Muskan_53917891/2.bmp", "./data/Muskan_53917891/3.bmp", "./data/Muskan_53917891/4.bmp", "./data/Muskan_53917891/5.bmp"],
[i++, "Neha", "17801338", "./data/Neha_17801338/1.bmp", "./data/Neha_17801338/2.bmp", "./data/Neha_17801338/3.bmp", "./data/Neha_17801338/4.bmp", "./data/Neha_17801338/5.bmp"],
[i++, "POOJA", "66193018", "./data/POOJA_66193018/1.bmp", "./data/POOJA_66193018/2.bmp", "./data/POOJA_66193018/3.bmp", "./data/POOJA_66193018/4.bmp", "./data/POOJA_66193018/5.bmp"],
[i++, "Pooja", "55223038", "./data/Pooja_55223038/1.bmp", "./data/Pooja_55223038/2.bmp", "./data/Pooja_55223038/3.bmp", "./data/Pooja_55223038/4.bmp", "./data/Pooja_55223038/5.bmp"],
[i++, "POONAM", "30326555", "./data/POONAM_30326555/1.bmp", "./data/POONAM_30326555/2.bmp", "./data/POONAM_30326555/3.bmp", "./data/POONAM_30326555/4.bmp", "./data/POONAM_30326555/5.bmp"],
[i++, "Princi", "2483838", "./data/Princi_2483838/1.bmp", "./data/Princi_2483838/2.bmp", "./data/Princi_2483838/3.bmp", "./data/Princi_2483838/4.bmp", "./data/Princi_2483838/5.bmp"],
[i++, "Priya", "87304383", "./data/Priya_87304383/1.bmp", "./data/Priya_87304383/2.bmp", "./data/Priya_87304383/3.bmp", "./data/Priya_87304383/4.bmp", "./data/Priya_87304383/5.bmp"],
[i++, "Priya Sharma", "88443300", "./data/PriyaSharma_88443300/1.bmp", "./data/PriyaSharma_88443300/2.bmp", "./data/PriyaSharma_88443300/3.bmp", "./data/PriyaSharma_88443300/4.bmp", "./data/PriyaSharma_88443300/5.bmp"],
[i++, "Priyanshi Pandey", "73964577", "./data/PriyanshiPandey_73964577/1.bmp", "./data/PriyanshiPandey_73964577/2.bmp", "./data/PriyanshiPandey_73964577/3.bmp", "./data/PriyanshiPandey_73964577/4.bmp", "./data/PriyanshiPandey_73964577/5.bmp"],
[i++, "Rannu", "68585531", "./data/Rannu_68585531/1.bmp", "./data/Rannu_68585531/2.bmp", "./data/Rannu_68585531/3.bmp", "./data/Rannu_68585531/4.bmp", "./data/Rannu_68585531/5.bmp"],
[i++, "Rekha", "36009612", "./data/Rekha_36009612/1.bmp", "./data/Rekha_36009612/2.bmp", "./data/Rekha_36009612/3.bmp", "./data/Rekha_36009612/4.bmp", "./data/Rekha_36009612/5.bmp"],
[i++, "Saloni Saroj", "56343068", "./data/SaloniSaroj_56343068/1.bmp", "./data/SaloniSaroj_56343068/2.bmp", "./data/SaloniSaroj_56343068/3.bmp", "./data/SaloniSaroj_56343068/4.bmp", "./data/SaloniSaroj_56343068/5.bmp"],
[i++, "Sangeeta Yadav", "63440645", "./data/SangeetaYadav_63440645/1.bmp", "./data/SangeetaYadav_63440645/2.bmp", "./data/SangeetaYadav_63440645/3.bmp", "./data/SangeetaYadav_63440645/4.bmp", "./data/SangeetaYadav_63440645/5.bmp"],
[i++, "Sanjana", "2658190", "./data/Sanjana_2658190/1.bmp", "./data/Sanjana_2658190/2.bmp", "./data/Sanjana_2658190/3.bmp", "./data/Sanjana_2658190/4.bmp", "./data/Sanjana_2658190/5.bmp"],
[i++, "Sanjana", "97062709", "./data/Sanjana_97062709/1.bmp", "./data/Sanjana_97062709/2.bmp", "./data/Sanjana_97062709/3.bmp", "./data/Sanjana_97062709/4.bmp", "./data/Sanjana_97062709/5.bmp"],
[i++, "Sanjana Kumari", "92813019", "./data/SanjanaKumari_92813019/1.bmp", "./data/SanjanaKumari_92813019/2.bmp", "./data/SanjanaKumari_92813019/3.bmp", "./data/SanjanaKumari_92813019/4.bmp", "./data/SanjanaKumari_92813019/5.bmp"],
[i++, "Sanju", "50557840", "./data/Sanju_50557840/1.bmp", "./data/Sanju_50557840/2.bmp", "./data/Sanju_50557840/3.bmp", "./data/Sanju_50557840/4.bmp", "./data/Sanju_50557840/5.bmp"],
[i++, "Sapna Yadav", "40345598", "./data/SapnaYadav_40345598/1.bmp", "./data/SapnaYadav_40345598/2.bmp", "./data/SapnaYadav_40345598/3.bmp", "./data/SapnaYadav_40345598/4.bmp", "./data/SapnaYadav_40345598/5.bmp"],
[i++, "Sarita", "44732277", "./data/Sarita_44732277/1.bmp", "./data/Sarita_44732277/2.bmp", "./data/Sarita_44732277/3.bmp", "./data/Sarita_44732277/4.bmp", "./data/Sarita_44732277/5.bmp"],
[i++, "Shabana Bano", "90601579", "./data/ShabanaBano_90601579/1.bmp", "./data/ShabanaBano_90601579/2.bmp", "./data/ShabanaBano_90601579/3.bmp", "./data/ShabanaBano_90601579/4.bmp", "./data/ShabanaBano_90601579/5.bmp"],
[i++, "Shivani Pal", "99648564", "./data/ShivaniPal_99648564/1.bmp", "./data/ShivaniPal_99648564/2.bmp", "./data/ShivaniPal_99648564/3.bmp", "./data/ShivaniPal_99648564/4.bmp", "./data/ShivaniPal_99648564/5.bmp"],
[i++, "Shivani Prajapati", "48405178", "./data/ShivaniPrajapati_48405178/1.bmp", "./data/ShivaniPrajapati_48405178/2.bmp", "./data/ShivaniPrajapati_48405178/3.bmp", "./data/ShivaniPrajapati_48405178/4.bmp", "./data/ShivaniPrajapati_48405178/5.bmp"],
[i++, "Sonam", "70063021", "./data/Sonam_70063021/1.bmp", "./data/Sonam_70063021/2.bmp", "./data/Sonam_70063021/3.bmp", "./data/Sonam_70063021/4.bmp", "./data/Sonam_70063021/5.bmp"],
[i++, "Sudha Saroj", "53748249", "./data/SudhaSaroj_53748249/1.bmp", "./data/SudhaSaroj_53748249/2.bmp", "./data/SudhaSaroj_53748249/3.bmp", "./data/SudhaSaroj_53748249/4.bmp", "./data/SudhaSaroj_53748249/5.bmp"],
[i++, "Suman Prajapati", "57645639", "./data/SumanPrajapati_57645639/1.bmp", "./data/SumanPrajapati_57645639/2.bmp", "./data/SumanPrajapati_57645639/3.bmp", "./data/SumanPrajapati_57645639/4.bmp", "./data/SumanPrajapati_57645639/5.bmp"],
[i++, "Sunita", "20466735", "./data/Sunita_20466735/1.bmp", "./data/Sunita_20466735/2.bmp", "./data/Sunita_20466735/3.bmp", "./data/Sunita_20466735/4.bmp", "./data/Sunita_20466735/5.bmp"],
[i++, "Sunita Gautam", "25889766", "./data/SunitaGautam_25889766/1.bmp", "./data/SunitaGautam_25889766/2.bmp", "./data/SunitaGautam_25889766/3.bmp", "./data/SunitaGautam_25889766/4.bmp", "./data/SunitaGautam_25889766/5.bmp"],
[i++, "Vandana", "44622843", "./data/Vandana_44622843/1.bmp", "./data/Vandana_44622843/2.bmp", "./data/Vandana_44622843/3.bmp", "./data/Vandana_44622843/4.bmp", "./data/Vandana_44622843/5.bmp"],
[i++, "Vandana Maurya", "86825834", "./data/VandanaMaurya_86825834/1.bmp", "./data/VandanaMaurya_86825834/2.bmp", "./data/VandanaMaurya_86825834/3.bmp", "./data/VandanaMaurya_86825834/4.bmp", "./data/VandanaMaurya_86825834/5.bmp"],

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

    const contrastRange = document.getElementById('contrast');
    contrastRange.addEventListener('input', function () {
        const contrastValue = this.value;
        document.querySelector('.contrast-value').textContent = `${contrastValue}%`;
        updateImageContrast(contrastValue);
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
                img.style.filter = `invert(100%) contrast(${document.getElementById('contrast').value}%)`; // Color invert and apply contrast
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

function updateImageContrast(contrastValue) {
    const images = document.querySelectorAll('td img');
    images.forEach(img => {
        img.style.filter = `invert(100%) contrast(${contrastValue}%)`;
    });
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
