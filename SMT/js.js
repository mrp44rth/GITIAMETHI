// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++, "Pawan Kumar", "91607848", "./SMT/PawanKumar_91607848/1.bmp", "./SMT/PawanKumar_91607848/2.bmp", "./SMT/PawanKumar_91607848/3.bmp", "./SMT/PawanKumar_91607848/4.bmp", "./SMT/PawanKumar_91607848/5.bmp"],
[i++, "Rajdayee", "49542902", "./SMT/Rajdayee_49542902/1.bmp", "./SMT/Rajdayee_49542902/2.bmp", "./SMT/Rajdayee_49542902/3.bmp", "./SMT/Rajdayee_49542902/4.bmp", "./SMT/Rajdayee_49542902/5.bmp"],
[i++, "Rakesh Kumar Maurya", "72618365", "./SMT/RakeshKumarMaurya_72618365/1.bmp", "./SMT/RakeshKumarMaurya_72618365/2.bmp", "./SMT/RakeshKumarMaurya_72618365/3.bmp", "./SMT/RakeshKumarMaurya_72618365/4.bmp", "./SMT/RakeshKumarMaurya_72618365/5.bmp"],
[i++, "Ram Karan Yadav", "34773989", "./SMT/RamKaranYadav_34773989/1.bmp", "./SMT/RamKaranYadav_34773989/2.bmp", "./SMT/RamKaranYadav_34773989/3.bmp", "./SMT/RamKaranYadav_34773989/4.bmp", "./SMT/RamKaranYadav_34773989/5.bmp"],
[i++, "Ravi Singh", "71134091", "./SMT/RaviSingh_71134091/1.bmp", "./SMT/RaviSingh_71134091/2.bmp", "./SMT/RaviSingh_71134091/3.bmp", "./SMT/RaviSingh_71134091/4.bmp", "./SMT/RaviSingh_71134091/5.bmp"],
[i++, "ROHIT", "77274866", "./SMT/ROHIT_77274866/1.bmp", "./SMT/ROHIT_77274866/2.bmp", "./SMT/ROHIT_77274866/3.bmp", "./SMT/ROHIT_77274866/4.bmp", "./SMT/ROHIT_77274866/5.bmp"],
[i++, "SACHIN", "82959256", "./SMT/SACHIN_82959256/1.bmp", "./SMT/SACHIN_82959256/2.bmp", "./SMT/SACHIN_82959256/3.bmp", "./SMT/SACHIN_82959256/4.bmp", "./SMT/SACHIN_82959256/5.bmp"],
[i++, "Sagar Gautam", "98978538", "./SMT/SagarGautam_98978538/1.bmp", "./SMT/SagarGautam_98978538/2.bmp", "./SMT/SagarGautam_98978538/3.bmp", "./SMT/SagarGautam_98978538/4.bmp", "./SMT/SagarGautam_98978538/5.bmp"],
[i++, "Sakshi Singh", "10614582", "./SMT/SakshiSingh_10614582/1.bmp", "./SMT/SakshiSingh_10614582/2.bmp", "./SMT/SakshiSingh_10614582/3.bmp", "./SMT/SakshiSingh_10614582/4.bmp", "./SMT/SakshiSingh_10614582/5.bmp"],
[i++, "Sanjeev Kumar", "71833665", "./SMT/SanjeevKumar_71833665/1.bmp", "./SMT/SanjeevKumar_71833665/2.bmp", "./SMT/SanjeevKumar_71833665/3.bmp", "./SMT/SanjeevKumar_71833665/4.bmp", "./SMT/SanjeevKumar_71833665/5.bmp"],
[i++, "Sanjeev Kumar Sharma", "1677653", "./SMT/SanjeevKumarSharma_1677653/1.bmp", "./SMT/SanjeevKumarSharma_1677653/2.bmp", "./SMT/SanjeevKumarSharma_1677653/3.bmp", "./SMT/SanjeevKumarSharma_1677653/4.bmp", "./SMT/SanjeevKumarSharma_1677653/5.bmp"],
[i++, "Satyam Gupta", "60488690", "./SMT/SatyamGupta_60488690/1.bmp", "./SMT/SatyamGupta_60488690/2.bmp", "./SMT/SatyamGupta_60488690/3.bmp", "./SMT/SatyamGupta_60488690/4.bmp", "./SMT/SatyamGupta_60488690/5.bmp"],
[i++, "Saurabh", "28750552", "./SMT/Saurabh_28750552/1.bmp", "./SMT/Saurabh_28750552/2.bmp", "./SMT/Saurabh_28750552/3.bmp", "./SMT/Saurabh_28750552/4.bmp", "./SMT/Saurabh_28750552/5.bmp"],
[i++, "Saurabh Singh", "27915150", "./SMT/SaurabhSingh_27915150/1.bmp", "./SMT/SaurabhSingh_27915150/2.bmp", "./SMT/SaurabhSingh_27915150/3.bmp", "./SMT/SaurabhSingh_27915150/4.bmp", "./SMT/SaurabhSingh_27915150/5.bmp"],
[i++, "Seeta Kumari", "27279707", "./SMT/SeetaKumari_27279707/1.bmp", "./SMT/SeetaKumari_27279707/2.bmp", "./SMT/SeetaKumari_27279707/3.bmp", "./SMT/SeetaKumari_27279707/4.bmp", "./SMT/SeetaKumari_27279707/5.bmp"],
[i++, "Shatrughn Rai", "37544340", "./SMT/ShatrughnRai_37544340/1.jpg", "./SMT/ShatrughnRai_37544340/2.jpg", "./SMT/ShatrughnRai_37544340/3.jpg", "./SMT/ShatrughnRai_37544340/4.jpg", "./SMT/ShatrughnRai_37544340/5.jpg"],
[i++, "Shivam Kashyap", "25801713", "./SMT/ShivamKashyap_25801713/1.bmp", "./SMT/ShivamKashyap_25801713/2.bmp", "./SMT/ShivamKashyap_25801713/3.bmp", "./SMT/ShivamKashyap_25801713/4.bmp", "./SMT/ShivamKashyap_25801713/5.bmp"],
[i++, "Shivam Mishra", "16738062", "./SMT/ShivamMishra_16738062/1.bmp", "./SMT/ShivamMishra_16738062/2.bmp", "./SMT/ShivamMishra_16738062/3.bmp", "./SMT/ShivamMishra_16738062/4.bmp", "./SMT/ShivamMishra_16738062/5.bmp"],
[i++, "Shivam Yadav", "35725215", "./SMT/ShivamYadav_35725215/1.bmp", "./SMT/ShivamYadav_35725215/2.bmp", "./SMT/ShivamYadav_35725215/3.bmp", "./SMT/ShivamYadav_35725215/4.bmp", "./SMT/ShivamYadav_35725215/5.bmp"],
[i++, "Shradhey Dwivedi", "51829733", "./SMT/ShradheyDwivedi_51829733/1.bmp", "./SMT/ShradheyDwivedi_51829733/2.bmp", "./SMT/ShradheyDwivedi_51829733/3.bmp", "./SMT/ShradheyDwivedi_51829733/4.bmp", "./SMT/ShradheyDwivedi_51829733/5.bmp"],
[i++, "Shubham Shukla", "34307989", "./SMT/ShubhamShukla_34307989/1.bmp", "./SMT/ShubhamShukla_34307989/2.bmp", "./SMT/ShubhamShukla_34307989/3.bmp", "./SMT/ShubhamShukla_34307989/4.bmp", "./SMT/ShubhamShukla_34307989/5.bmp"],
[i++, "Soniya", "11381654", "./SMT/Soniya_11381654/1.bmp", "./SMT/Soniya_11381654/2.bmp", "./SMT/Soniya_11381654/3.bmp", "./SMT/Soniya_11381654/4.bmp", "./SMT/Soniya_11381654/5.bmp"],
[i++, "Sunil Kumar", "39733823", "./SMT/SunilKumar_39733823/1.bmp", "./SMT/SunilKumar_39733823/2.bmp", "./SMT/SunilKumar_39733823/3.bmp", "./SMT/SunilKumar_39733823/4.bmp", "./SMT/SunilKumar_39733823/5.bmp"],
[i++, "Suraj", "75044814", "./SMT/Suraj_75044814/1.bmp", "./SMT/Suraj_75044814/2.bmp", "./SMT/Suraj_75044814/3.bmp", "./SMT/Suraj_75044814/4.bmp", "./SMT/Suraj_75044814/5.bmp"],
[i++, "Umesh Prajapati", "56437711", "./SMT/UmeshPrajapati_56437711/1.bmp", "./SMT/UmeshPrajapati_56437711/2.bmp", "./SMT/UmeshPrajapati_56437711/3.bmp", "./SMT/UmeshPrajapati_56437711/4.bmp", "./SMT/UmeshPrajapati_56437711/5.bmp"],
[i++, "Umesh Vishwakarma", "92161384", "./SMT/UmeshVishwakarma_92161384/1.bmp", "./SMT/UmeshVishwakarma_92161384/2.bmp", "./SMT/UmeshVishwakarma_92161384/3.bmp", "./SMT/UmeshVishwakarma_92161384/4.bmp", "./SMT/UmeshVishwakarma_92161384/5.bmp"],
[i++, "VIKHYAT SINGH", "85943678", "./SMT/VIKHYATSINGH_85943678/1.bmp", "./SMT/VIKHYATSINGH_85943678/2.bmp", "./SMT/VIKHYATSINGH_85943678/3.bmp", "./SMT/VIKHYATSINGH_85943678/4.bmp", "./SMT/VIKHYATSINGH_85943678/5.bmp"],
[i++, "Vinay Tiwari", "87450859", "./SMT/VinayTiwari_87450859/1.bmp", "./SMT/VinayTiwari_87450859/2.bmp", "./SMT/VinayTiwari_87450859/3.bmp", "./SMT/VinayTiwari_87450859/4.bmp", "./SMT/VinayTiwari_87450859/5.bmp"],
[i++, "VIPIN", "19848301", "./SMT/VIPIN_19848301/1.bmp", "./SMT/VIPIN_19848301/2.bmp", "./SMT/VIPIN_19848301/3.bmp", "./SMT/VIPIN_19848301/4.bmp", "./SMT/VIPIN_19848301/5.bmp"],
[i++, "Vishal Maurya", "1769924", "./SMT/VishalMaurya_1769924/1.bmp", "./SMT/VishalMaurya_1769924/2.bmp", "./SMT/VishalMaurya_1769924/3.bmp", "./SMT/VishalMaurya_1769924/4.bmp", "./SMT/VishalMaurya_1769924/5.bmp"],


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
