let i=1;
const data = [
[i++, "Alka", "44261228", "./data/Alka_44261228/1.bmp", "./data/Alka_44261228/2.bmp", "./data/Alka_44261228/3.bmp", "./data/Alka_44261228/4.bmp", "./data/Alka_44261228/5.bmp"],
[i++, "Aneeta Devi", "1647711", "./data/AneetaDevi_1647711/1.bmp", "./data/AneetaDevi_1647711/2.bmp", "./data/AneetaDevi_1647711/3.bmp", "./data/AneetaDevi_1647711/4.bmp", "./data/AneetaDevi_1647711/5.bmp"],
[i++, "Anjali", "49441296", "./data/Anjali_49441296/1.bmp", "./data/Anjali_49441296/2.bmp", "./data/Anjali_49441296/3.bmp", "./data/Anjali_49441296/4.bmp", "./data/Anjali_49441296/5.bmp"],
[i++, "Anju Verma", "72333632", "./data/AnjuVerma_72333632/1.bmp", "./data/AnjuVerma_72333632/2.bmp", "./data/AnjuVerma_72333632/3.bmp", "./data/AnjuVerma_72333632/4.bmp", "./data/AnjuVerma_72333632/5.bmp"],
[i++, "Anupa Pal", "21849673", "./data/AnupaPal_21849673/1.bmp", "./data/AnupaPal_21849673/2.bmp", "./data/AnupaPal_21849673/3.bmp", "./data/AnupaPal_21849673/4.bmp", "./data/AnupaPal_21849673/5.bmp"],
[i++, "Beenu Singh", "4646283", "./data/BeenuSingh_4646283/1.bmp", "./data/BeenuSingh_4646283/2.bmp", "./data/BeenuSingh_4646283/3.bmp", "./data/BeenuSingh_4646283/4.bmp", "./data/BeenuSingh_4646283/5.bmp"],
[i++, "Deepa Saroj", "7557639", "./data/DeepaSaroj_7557639/1.bmp", "./data/DeepaSaroj_7557639/2.bmp", "./data/DeepaSaroj_7557639/3.bmp", "./data/DeepaSaroj_7557639/4.bmp", "./data/DeepaSaroj_7557639/5.bmp"],
[i++, "Gudiya Yadav", "32169193", "./data/GudiyaYadav_32169193/1.bmp", "./data/GudiyaYadav_32169193/2.bmp", "./data/GudiyaYadav_32169193/3.bmp", "./data/GudiyaYadav_32169193/4.bmp", "./data/GudiyaYadav_32169193/5.bmp"],
[i++, "Jyoti Tiwari", "41436758", "./data/JyotiTiwari_41436758/1.bmp", "./data/JyotiTiwari_41436758/2.bmp", "./data/JyotiTiwari_41436758/3.bmp", "./data/JyotiTiwari_41436758/4.bmp", "./data/JyotiTiwari_41436758/5.bmp"],
[i++, "KAJAL", "68968207", "./data/KAJAL_68968207/1.bmp", "./data/KAJAL_68968207/2.bmp", "./data/KAJAL_68968207/3.bmp", "./data/KAJAL_68968207/4.bmp", "./data/KAJAL_68968207/5.bmp"],
[i++, "Kajal", "74265522", "./data/Kajal_74265522/1.bmp", "./data/Kajal_74265522/2.bmp", "./data/Kajal_74265522/3.bmp", "./data/Kajal_74265522/4.bmp", "./data/Kajal_74265522/5.bmp"],
[i++, "Kajal Saroj", "80481708", "./data/KajalSaroj_80481708/1.bmp", "./data/KajalSaroj_80481708/2.bmp", "./data/KajalSaroj_80481708/3.bmp", "./data/KajalSaroj_80481708/4.bmp", "./data/KajalSaroj_80481708/5.bmp"],
[i++, "Km Swati Mishra", "4775592", "./data/KmSwatiMishra_4775592/1.bmp", "./data/KmSwatiMishra_4775592/2.bmp", "./data/KmSwatiMishra_4775592/3.bmp", "./data/KmSwatiMishra_4775592/4.bmp", "./data/KmSwatiMishra_4775592/5.bmp"],
[i++, "Komal", "76499563", "./data/Komal_76499563/1.bmp", "./data/Komal_76499563/2.bmp", "./data/Komal_76499563/3.bmp", "./data/Komal_76499563/4.bmp", "./data/Komal_76499563/5.bmp"],
[i++, "Komal Singh", "12239794", "./data/KomalSingh_12239794/1.bmp", "./data/KomalSingh_12239794/2.bmp", "./data/KomalSingh_12239794/3.bmp", "./data/KomalSingh_12239794/4.bmp", "./data/KomalSingh_12239794/5.bmp"],
[i++, "Komal Yadav", "17047455", "./data/KomalYadav_17047455/1.bmp", "./data/KomalYadav_17047455/2.bmp", "./data/KomalYadav_17047455/3.bmp", "./data/KomalYadav_17047455/4.bmp", "./data/KomalYadav_17047455/5.bmp"],
[i++, "Kumkum Pal", "99423462", "./data/KumkumPal_99423462/1.bmp", "./data/KumkumPal_99423462/2.bmp", "./data/KumkumPal_99423462/3.bmp", "./data/KumkumPal_99423462/4.bmp", "./data/KumkumPal_99423462/5.bmp"],
[i++, "Madhu", "91799560", "./data/Madhu_91799560/1.bmp", "./data/Madhu_91799560/2.bmp", "./data/Madhu_91799560/3.bmp", "./data/Madhu_91799560/4.bmp", "./data/Madhu_91799560/5.bmp"],
[i++, "Madhu Yadav", "56998835", "./data/MadhuYadav_56998835/1.bmp", "./data/MadhuYadav_56998835/2.bmp", "./data/MadhuYadav_56998835/3.bmp", "./data/MadhuYadav_56998835/4.bmp", "./data/MadhuYadav_56998835/5.bmp"],
[i++, "Manju Yadav", "85977196", "./data/ManjuYadav_85977196/1.bmp", "./data/ManjuYadav_85977196/2.bmp", "./data/ManjuYadav_85977196/3.bmp", "./data/ManjuYadav_85977196/4.bmp", "./data/ManjuYadav_85977196/5.bmp"],
[i++, "Neha Bharti", "40581911", "./data/NehaBharti_40581911/1.bmp", "./data/NehaBharti_40581911/2.bmp", "./data/NehaBharti_40581911/3.bmp", "./data/NehaBharti_40581911/4.bmp", "./data/NehaBharti_40581911/5.bmp"],
[i++, "Palak Singh", "3806529", "./data/PalakSingh_3806529/1.bmp", "./data/PalakSingh_3806529/2.bmp", "./data/PalakSingh_3806529/3.bmp", "./data/PalakSingh_3806529/4.bmp", "./data/PalakSingh_3806529/5.bmp"],
[i++, "Payal Yadav", "40661243", "./data/PayalYadav_40661243/1.bmp", "./data/PayalYadav_40661243/2.bmp", "./data/PayalYadav_40661243/3.bmp", "./data/PayalYadav_40661243/4.bmp", "./data/PayalYadav_40661243/5.bmp"],
[i++, "Pinki Yadav", "56429672", "./data/PinkiYadav_56429672/1.bmp", "./data/PinkiYadav_56429672/2.bmp", "./data/PinkiYadav_56429672/3.bmp", "./data/PinkiYadav_56429672/4.bmp", "./data/PinkiYadav_56429672/5.bmp"],
[i++, "Pooja", "53051546", "./data/Pooja_53051546/1.bmp", "./data/Pooja_53051546/2.bmp", "./data/Pooja_53051546/3.bmp", "./data/Pooja_53051546/4.bmp", "./data/Pooja_53051546/5.bmp"],
[i++, "Pooja Yadav", "35028256", "./data/PoojaYadav_35028256/1.bmp", "./data/PoojaYadav_35028256/2.bmp", "./data/PoojaYadav_35028256/3.bmp", "./data/PoojaYadav_35028256/4.bmp", "./data/PoojaYadav_35028256/5.bmp"],
[i++, "Prachi Singh", "48504347", "./data/PrachiSingh_48504347/1.bmp", "./data/PrachiSingh_48504347/2.bmp", "./data/PrachiSingh_48504347/3.bmp", "./data/PrachiSingh_48504347/4.bmp", "./data/PrachiSingh_48504347/5.bmp"],
[i++, "Priya Pathak", "88241499", "./data/PriyaPathak_88241499/1.bmp", "./data/PriyaPathak_88241499/2.bmp", "./data/PriyaPathak_88241499/3.bmp", "./data/PriyaPathak_88241499/4.bmp", "./data/PriyaPathak_88241499/5.bmp"],
[i++, "Reeta Kashyap", "86500560", "./data/ReetaKashyap_86500560/1.bmp", "./data/ReetaKashyap_86500560/2.bmp", "./data/ReetaKashyap_86500560/3.bmp", "./data/ReetaKashyap_86500560/4.bmp", "./data/ReetaKashyap_86500560/5.bmp"],
[i++, "Rekha Gautam", "34839001", "./data/RekhaGautam_34839001/1.bmp", "./data/RekhaGautam_34839001/2.bmp", "./data/RekhaGautam_34839001/3.bmp", "./data/RekhaGautam_34839001/4.bmp", "./data/RekhaGautam_34839001/5.bmp"],
[i++, "Rekha Vishwkarma", "29741235", "./data/RekhaVishwkarma_29741235/1.bmp", "./data/RekhaVishwkarma_29741235/2.bmp", "./data/RekhaVishwkarma_29741235/3.bmp", "./data/RekhaVishwkarma_29741235/4.bmp", "./data/RekhaVishwkarma_29741235/5.bmp"],
[i++, "Renu Gupta", "36720573", "./data/RenuGupta_36720573/1.bmp", "./data/RenuGupta_36720573/2.bmp", "./data/RenuGupta_36720573/3.bmp", "./data/RenuGupta_36720573/4.bmp", "./data/RenuGupta_36720573/5.bmp"],
[i++, "Rinki", "54337804", "./data/Rinki_54337804/1.bmp", "./data/Rinki_54337804/2.bmp", "./data/Rinki_54337804/3.bmp", "./data/Rinki_54337804/4.bmp", "./data/Rinki_54337804/5.bmp"],
[i++, "Roli Gupta", "18335011", "./data/RoliGupta_18335011/1.bmp", "./data/RoliGupta_18335011/2.bmp", "./data/RoliGupta_18335011/3.bmp", "./data/RoliGupta_18335011/4.bmp", "./data/RoliGupta_18335011/5.bmp"],
[i++, "Sanju Yadav", "31476916", "./data/SanjuYadav_31476916/1.bmp", "./data/SanjuYadav_31476916/2.bmp", "./data/SanjuYadav_31476916/3.bmp", "./data/SanjuYadav_31476916/4.bmp", "./data/SanjuYadav_31476916/5.bmp"],
[i++, "Shalu Singh", "96001116", "./data/ShaluSingh_96001116/1.bmp", "./data/ShaluSingh_96001116/2.bmp", "./data/ShaluSingh_96001116/3.bmp", "./data/ShaluSingh_96001116/4.bmp", "./data/ShaluSingh_96001116/5.bmp"],
[i++, "Shiv Kumari", "44122259", "./data/ShivKumari_44122259/1.bmp", "./data/ShivKumari_44122259/2.bmp", "./data/ShivKumari_44122259/3.bmp", "./data/ShivKumari_44122259/4.bmp", "./data/ShivKumari_44122259/5.bmp"],
[i++, "Shivani Yadav", "22732067", "./data/ShivaniYadav_22732067/1.bmp", "./data/ShivaniYadav_22732067/2.bmp", "./data/ShivaniYadav_22732067/3.bmp", "./data/ShivaniYadav_22732067/4.bmp", "./data/ShivaniYadav_22732067/5.bmp"],
[i++, "Shiwani Jaiswal", "43057534", "./data/ShiwaniJaiswal_43057534/1.bmp", "./data/ShiwaniJaiswal_43057534/2.bmp", "./data/ShiwaniJaiswal_43057534/3.bmp", "./data/ShiwaniJaiswal_43057534/4.bmp", "./data/ShiwaniJaiswal_43057534/5.bmp"],
[i++, "Shriti Yadav", "79970078", "./data/ShritiYadav_79970078/1.bmp", "./data/ShritiYadav_79970078/2.bmp", "./data/ShritiYadav_79970078/3.bmp", "./data/ShritiYadav_79970078/4.bmp", "./data/ShritiYadav_79970078/5.bmp"],
[i++, "Sonam", "42773454", "./data/Sonam_42773454/1.bmp", "./data/Sonam_42773454/2.bmp", "./data/Sonam_42773454/3.bmp", "./data/Sonam_42773454/4.bmp", "./data/Sonam_42773454/5.bmp"],
[i++, "Suman Yadav", "51968873", "./data/SumanYadav_51968873/1.bmp", "./data/SumanYadav_51968873/2.bmp", "./data/SumanYadav_51968873/3.bmp", "./data/SumanYadav_51968873/4.bmp", "./data/SumanYadav_51968873/5.bmp"],
[i++, "Tanya Singh", "35050307", "./data/TanyaSingh_35050307/1.bmp", "./data/TanyaSingh_35050307/2.bmp", "./data/TanyaSingh_35050307/3.bmp", "./data/TanyaSingh_35050307/4.bmp", "./data/TanyaSingh_35050307/5.bmp"],
[i++, "Vandna", "88955100", "./data/Vandna_88955100/1.bmp", "./data/Vandna_88955100/2.bmp", "./data/Vandna_88955100/3.bmp", "./data/Vandna_88955100/4.bmp", "./data/Vandna_88955100/5.bmp"],
[i++, "Vanshika Kanaujiya", "71640871", "./data/VanshikaKanaujiya_71640871/1.bmp", "./data/VanshikaKanaujiya_71640871/2.bmp", "./data/VanshikaKanaujiya_71640871/3.bmp", "./data/VanshikaKanaujiya_71640871/4.bmp", "./data/VanshikaKanaujiya_71640871/5.bmp"],
[i++, "Vindu", "33345169", "./data/Vindu_33345169/1.bmp", "./data/Vindu_33345169/2.bmp", "./data/Vindu_33345169/3.bmp", "./data/Vindu_33345169/4.bmp", "./data/Vindu_33345169/5.bmp"],

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
