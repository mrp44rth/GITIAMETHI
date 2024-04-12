let i=1;
const data = [
[i++, "Alankrita Gupta", "47424291", "./data/AlankritaGupta_47424291/1.bmp", "./data/AlankritaGupta_47424291/2.bmp", "./data/AlankritaGupta_47424291/3.bmp", "./data/AlankritaGupta_47424291/4.bmp", "./data/AlankritaGupta_47424291/5.bmp"],
[i++, "ANCHAL SAHOO", "4951856", "./data/ANCHALSAHOO_4951856/1.bmp", "./data/ANCHALSAHOO_4951856/2.bmp", "./data/ANCHALSAHOO_4951856/3.bmp", "./data/ANCHALSAHOO_4951856/4.bmp", "./data/ANCHALSAHOO_4951856/5.bmp"],
[i++, "Anchal Verma", "83102790", "./data/AnchalVerma_83102790/1.bmp", "./data/AnchalVerma_83102790/2.bmp", "./data/AnchalVerma_83102790/3.bmp", "./data/AnchalVerma_83102790/4.bmp", "./data/AnchalVerma_83102790/5.bmp"],
[i++, "Anjali", "80869655", "./data/Anjali_80869655/1.bmp", "./data/Anjali_80869655/2.bmp", "./data/Anjali_80869655/3.bmp", "./data/Anjali_80869655/4.bmp", "./data/Anjali_80869655/5.bmp"],
[i++, "Anjali Agrahari", "80101114", "./data/AnjaliAgrahari_80101114/1.bmp", "./data/AnjaliAgrahari_80101114/2.bmp", "./data/AnjaliAgrahari_80101114/3.bmp", "./data/AnjaliAgrahari_80101114/4.bmp", "./data/AnjaliAgrahari_80101114/5.bmp"],
[i++, "Anjali Kanaujiya", "63051121", "./data/AnjaliKanaujiya_63051121/1.bmp", "./data/AnjaliKanaujiya_63051121/2.bmp", "./data/AnjaliKanaujiya_63051121/3.bmp", "./data/AnjaliKanaujiya_63051121/4.bmp", "./data/AnjaliKanaujiya_63051121/5.bmp"],
[i++, "Anjali Singh", "10918609", "./data/AnjaliSingh_10918609/1.bmp", "./data/AnjaliSingh_10918609/2.bmp", "./data/AnjaliSingh_10918609/3.bmp", "./data/AnjaliSingh_10918609/4.bmp", "./data/AnjaliSingh_10918609/5.bmp"],
[i++, "Anshu Yadav", "51043176", "./data/AnshuYadav_51043176/1.bmp", "./data/AnshuYadav_51043176/2.bmp", "./data/AnshuYadav_51043176/3.bmp", "./data/AnshuYadav_51043176/4.bmp", "./data/AnshuYadav_51043176/5.bmp"],
[i++, "Antima", "48450319", "./data/Antima_48450319/1.bmp", "./data/Antima_48450319/2.bmp", "./data/Antima_48450319/3.bmp", "./data/Antima_48450319/4.bmp", "./data/Antima_48450319/5.bmp"],
[i++, "Antima", "13792723", "./data/Antima_13792723/1.bmp", "./data/Antima_13792723/2.bmp", "./data/Antima_13792723/3.bmp", "./data/Antima_13792723/4.bmp", "./data/Antima_13792723/5.bmp"],
[i++, "Anuradha Verma", "63896200", "./data/AnuradhaVerma_63896200/1.bmp", "./data/AnuradhaVerma_63896200/2.bmp", "./data/AnuradhaVerma_63896200/3.bmp", "./data/AnuradhaVerma_63896200/4.bmp", "./data/AnuradhaVerma_63896200/5.bmp"],
[i++, "Deepika Verma", "84007651", "./data/DeepikaVerma_84007651/1.bmp", "./data/DeepikaVerma_84007651/2.bmp", "./data/DeepikaVerma_84007651/3.bmp", "./data/DeepikaVerma_84007651/4.bmp", "./data/DeepikaVerma_84007651/5.bmp"],
[i++, "DEVKI", "95103656", "./data/DEVKI_95103656/1.bmp", "./data/DEVKI_95103656/2.bmp", "./data/DEVKI_95103656/3.bmp", "./data/DEVKI_95103656/4.bmp", "./data/DEVKI_95103656/5.bmp"],
[i++, "Kajal Verma", "89686585", "./data/KajalVerma_89686585/1.bmp", "./data/KajalVerma_89686585/2.bmp", "./data/KajalVerma_89686585/3.bmp", "./data/KajalVerma_89686585/4.bmp", "./data/KajalVerma_89686585/5.bmp"],
[i++, "Kavita", "28753789", "./data/Kavita_28753789/1.bmp", "./data/Kavita_28753789/2.bmp", "./data/Kavita_28753789/3.bmp", "./data/Kavita_28753789/4.bmp", "./data/Kavita_28753789/5.bmp"],
[i++, "Khushboo Maurya", "73039253", "./data/KhushbooMaurya_73039253/1.bmp", "./data/KhushbooMaurya_73039253/2.bmp", "./data/KhushbooMaurya_73039253/3.bmp", "./data/KhushbooMaurya_73039253/4.bmp", "./data/KhushbooMaurya_73039253/5.bmp"],
[i++, "Khushi Yadav", "11159613", "./data/KhushiYadav_11159613/1.bmp", "./data/KhushiYadav_11159613/2.bmp", "./data/KhushiYadav_11159613/3.bmp", "./data/KhushiYadav_11159613/4.bmp", "./data/KhushiYadav_11159613/5.bmp"],
[i++, "Kritika", "32610430", "./data/Kritika_32610430/1.bmp", "./data/Kritika_32610430/2.bmp", "./data/Kritika_32610430/3.bmp", "./data/Kritika_32610430/4.bmp", "./data/Kritika_32610430/5.bmp"],
[i++, "MADHU", "97873026", "./data/MADHU_97873026/1.bmp", "./data/MADHU_97873026/2.bmp", "./data/MADHU_97873026/3.bmp", "./data/MADHU_97873026/4.bmp", "./data/MADHU_97873026/5.bmp"],
[i++, "Manisha Yadav", "40973686", "./data/ManishaYadav_40973686/1.bmp", "./data/ManishaYadav_40973686/2.bmp", "./data/ManishaYadav_40973686/3.bmp", "./data/ManishaYadav_40973686/4.bmp", "./data/ManishaYadav_40973686/5.bmp"],
[i++, "Manshi Maurya", "50304922", "./data/ManshiMaurya_50304922/1.bmp", "./data/ManshiMaurya_50304922/2.bmp", "./data/ManshiMaurya_50304922/3.bmp", "./data/ManshiMaurya_50304922/4.bmp", "./data/ManshiMaurya_50304922/5.bmp"],
[i++, "Neelam Maurya", "92411236", "./data/NeelamMaurya_92411236/1.bmp", "./data/NeelamMaurya_92411236/2.bmp", "./data/NeelamMaurya_92411236/3.bmp", "./data/NeelamMaurya_92411236/4.bmp", "./data/NeelamMaurya_92411236/5.bmp"],
[i++, "Neetu Singh", "76266339", "./data/NeetuSingh_76266339/1.bmp", "./data/NeetuSingh_76266339/2.bmp", "./data/NeetuSingh_76266339/3.bmp", "./data/NeetuSingh_76266339/4.bmp", "./data/NeetuSingh_76266339/5.bmp"],
[i++, "Neha Jaiswal", "60015278", "./data/NehaJaiswal_60015278/1.bmp", "./data/NehaJaiswal_60015278/2.bmp", "./data/NehaJaiswal_60015278/3.bmp", "./data/NehaJaiswal_60015278/4.bmp", "./data/NehaJaiswal_60015278/5.bmp"],
[i++, "Neha Mishra", "16942616", "./data/NehaMishra_16942616/1.bmp", "./data/NehaMishra_16942616/2.bmp", "./data/NehaMishra_16942616/3.bmp", "./data/NehaMishra_16942616/4.bmp", "./data/NehaMishra_16942616/5.bmp"],
[i++, "Neha Sharma", "72853721", "./data/NehaSharma_72853721/1.bmp", "./data/NehaSharma_72853721/2.bmp", "./data/NehaSharma_72853721/3.bmp", "./data/NehaSharma_72853721/4.bmp", "./data/NehaSharma_72853721/5.bmp"],
[i++, "Neha Yadav", "86651606", "./data/NehaYadav_86651606/1.bmp", "./data/NehaYadav_86651606/2.bmp", "./data/NehaYadav_86651606/3.bmp", "./data/NehaYadav_86651606/4.bmp", "./data/NehaYadav_86651606/5.bmp"],
[i++, "Pooja Devi", "65019598", "./data/PoojaDevi_65019598/1.bmp", "./data/PoojaDevi_65019598/2.bmp", "./data/PoojaDevi_65019598/3.bmp", "./data/PoojaDevi_65019598/4.bmp", "./data/PoojaDevi_65019598/5.bmp"],
[i++, "Prachi Diwedi", "45763205", "./data/PrachiDiwedi_45763205/1.bmp", "./data/PrachiDiwedi_45763205/2.bmp", "./data/PrachiDiwedi_45763205/3.bmp", "./data/PrachiDiwedi_45763205/4.bmp", "./data/PrachiDiwedi_45763205/5.bmp"],
[i++, "Priyansha", "36132258", "./data/Priyansha_36132258/1.bmp", "./data/Priyansha_36132258/2.bmp", "./data/Priyansha_36132258/3.bmp", "./data/Priyansha_36132258/4.bmp", "./data/Priyansha_36132258/5.bmp"],
[i++, "Rahamatul Nisha", "88741605", "./data/RahamatulNisha_88741605/1.bmp", "./data/RahamatulNisha_88741605/2.bmp", "./data/RahamatulNisha_88741605/3.bmp", "./data/RahamatulNisha_88741605/4.bmp", "./data/RahamatulNisha_88741605/5.bmp"],
[i++, "Roshnee Vishvakarma", "60287698", "./data/RoshneeVishvakarma_60287698/1.bmp", "./data/RoshneeVishvakarma_60287698/2.bmp", "./data/RoshneeVishvakarma_60287698/3.bmp", "./data/RoshneeVishvakarma_60287698/4.bmp", "./data/RoshneeVishvakarma_60287698/5.bmp"],
[i++, "RUBI", "15476893", "./data/RUBI_15476893/1.bmp", "./data/RUBI_15476893/2.bmp", "./data/RUBI_15476893/3.bmp", "./data/RUBI_15476893/4.bmp", "./data/RUBI_15476893/5.bmp"],
[i++, "Rubi Sahu", "47435477", "./data/RubiSahu_47435477/1.bmp", "./data/RubiSahu_47435477/2.bmp", "./data/RubiSahu_47435477/3.bmp", "./data/RubiSahu_47435477/4.bmp", "./data/RubiSahu_47435477/5.bmp"],
[i++, "Ruchi Singh", "91703686", "./data/RuchiSingh_91703686/1.bmp", "./data/RuchiSingh_91703686/2.bmp", "./data/RuchiSingh_91703686/3.bmp", "./data/RuchiSingh_91703686/4.bmp", "./data/RuchiSingh_91703686/5.bmp"],
[i++, "Ruchi Singh", "76236468", "./data/RuchiSingh_76236468/1.bmp", "./data/RuchiSingh_76236468/2.bmp", "./data/RuchiSingh_76236468/3.bmp", "./data/RuchiSingh_76236468/4.bmp", "./data/RuchiSingh_76236468/5.bmp"],
[i++, "Sanjana", "95505364", "./data/Sanjana_95505364/1.bmp", "./data/Sanjana_95505364/2.bmp", "./data/Sanjana_95505364/3.bmp", "./data/Sanjana_95505364/4.bmp", "./data/Sanjana_95505364/5.bmp"],
[i++, "Sanju Yadav", "80608714", "./data/SanjuYadav_80608714/1.bmp", "./data/SanjuYadav_80608714/2.bmp", "./data/SanjuYadav_80608714/3.bmp", "./data/SanjuYadav_80608714/4.bmp", "./data/SanjuYadav_80608714/5.bmp"],
[i++, "Seema", "87608084", "./data/Seema_87608084/1.bmp", "./data/Seema_87608084/2.bmp", "./data/Seema_87608084/3.bmp", "./data/Seema_87608084/4.bmp", "./data/Seema_87608084/5.bmp"],
[i++, "Shalini Maurya", "72824250", "./data/ShaliniMaurya_72824250/1.bmp", "./data/ShaliniMaurya_72824250/2.bmp", "./data/ShaliniMaurya_72824250/3.bmp", "./data/ShaliniMaurya_72824250/4.bmp", "./data/ShaliniMaurya_72824250/5.bmp"],
[i++, "Shivani Saroj", "55954755", "./data/ShivaniSaroj_55954755/1.bmp", "./data/ShivaniSaroj_55954755/2.bmp", "./data/ShivaniSaroj_55954755/3.bmp", "./data/ShivaniSaroj_55954755/4.bmp", "./data/ShivaniSaroj_55954755/5.bmp"],
[i++, "Soni Yadav", "5901026", "./data/SoniYadav_5901026/1.bmp", "./data/SoniYadav_5901026/2.bmp", "./data/SoniYadav_5901026/3.bmp", "./data/SoniYadav_5901026/4.bmp", "./data/SoniYadav_5901026/5.bmp"],
[i++, "Sufiya Bano", "21240133", "./data/SufiyaBano_21240133/1.bmp", "./data/SufiyaBano_21240133/2.bmp", "./data/SufiyaBano_21240133/3.bmp", "./data/SufiyaBano_21240133/4.bmp", "./data/SufiyaBano_21240133/5.bmp"],
[i++, "Suman", "37410900", "./data/Suman_37410900/1.bmp", "./data/Suman_37410900/2.bmp", "./data/Suman_37410900/3.bmp", "./data/Suman_37410900/4.bmp", "./data/Suman_37410900/5.bmp"],
[i++, "Sushma Yadav", "27277435", "./data/SushmaYadav_27277435/1.bmp", "./data/SushmaYadav_27277435/2.bmp", "./data/SushmaYadav_27277435/3.bmp", "./data/SushmaYadav_27277435/4.bmp", "./data/SushmaYadav_27277435/5.bmp"],
[i++, "Twinkal Jaiswal", "33438658", "./data/TwinkalJaiswal_33438658/1.bmp", "./data/TwinkalJaiswal_33438658/2.bmp", "./data/TwinkalJaiswal_33438658/3.bmp", "./data/TwinkalJaiswal_33438658/4.bmp", "./data/TwinkalJaiswal_33438658/5.bmp"],

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
