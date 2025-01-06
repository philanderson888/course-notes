let bankData = { bank1: [], bank2: [], bank3: [] };
let combinedData = [];

// Automatically load the data when the app launches
window.addEventListener('DOMContentLoaded', () => {
    loadBankData('data/bank1.json', 'bank1');
    loadBankData('data/bank2.json', 'bank2');
    loadBankData('data/bank3.json', 'bank3');
});

document.getElementById('filter-data').addEventListener('click', filterData);

function loadBankData(url, bankKey) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            bankData[bankKey] = data;
            combineData();
        })
        .catch(error => console.error('Error loading data:', error));
}

function combineData() {
    combinedData = [...bankData.bank1, ...bankData.bank2, ...bankData.bank3];
    displayData(combinedData);
}

function filterData() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    const filteredData = combinedData.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= startDate && entryDate <= endDate;
    });

    displayData(filteredData);
}

function displayData(data) {
    const tableBody = document.querySelector('#report-table tbody');
    tableBody.innerHTML = '';

    data.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.category}</td>
            <td>${entry.payee}</td>
            <td>${entry.amount}</td>
            <td>${entry.description}</td>
        `;
        tableBody.appendChild(row);
    });
}
