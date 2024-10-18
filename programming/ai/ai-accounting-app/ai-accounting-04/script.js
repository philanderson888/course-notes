let combinedData = [];

// get your own key from google cloud platform at https://console.cloud.google.com/apis/credentials
let googleSheetsApiKey = 'getYourOwnKey';

getApiKey = () => {
    console.log('getApiKey()...');
    fetch('api-key.json')
    .then(response => response.json())
    .then(data => {
        console.log('data.apiKey:', data.googleSheetsApiKey);
        googleSheetsApiKey = data.googleSheetsApiKey;
        loadGoogleSheetDataApiv4();   
        loadGoogleSheetDataApiv3();
    })
    .catch(error => console.error('Error loading data:', error));
}

// Automatically load the data when the app launches
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded...');
    getApiKey();
});

function loadGoogleSheetDataApiv3() {
    var id = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';
    var gid = '1953160326';
    var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log('Google Sheets API v3 data:', data);
            document.getElementById("json").innerHTML = myItems(data.slice(47, -2));
        });
        
    function myItems(jsonString){
        var json = JSON.parse(jsonString);
        var table = '<table><tr>'
        json.table.cols.forEach(colonne => table += '<th>' + colonne.label + '</th>')
        table += '</tr>'
        json.table.rows.forEach(ligne => {
            table += '<tr>'
            ligne.c.forEach(cellule => {
                try { var valeur = cellule.f ? cellule.f : cellule.v }
                catch (e) { var valeur = '' }
                table += '<td>' + valeur + '</td>'
            });
            table += '</tr>';
        });
        table += '</table>';
        return table;
    }
}

document.getElementById('filter-data').addEventListener('click', filterData);

function loadGoogleSheetDataApiv4() {
    const spreadsheetId = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';
    const range = 'CombinedAll';   
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${googleSheetsApiKey}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Google Sheets API v4 data:', data);
        parseGoogleSheetData(data);
        displayData(combinedData);
        displayCategorySummary(combinedData); // Call to display the summary
    })
    .catch(error => console.error('Error loading data:', error));
}

function parseGoogleSheetData(data) {
    const headers = data.values[0];
    combinedData = data.values.slice(1).map(row => {
        return {
            date: row[headers.indexOf('Date')],
            category: row[headers.indexOf('Category')],
            payee: row[headers.indexOf('Payee')],
            amount: parseFloat(row[headers.indexOf('Amount')]),
            description: row[headers.indexOf('Description')]
        };
    });
}

function filterData() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    const filteredData = combinedData.filter(entry => {
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);
        return entryDateUK >= startDate && entryDateUK <= endDate;
    });

    displayData(filteredData);
    displayCategorySummary(filteredData); // Update the summary based on filtered data
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

function displayCategorySummary(data) {
    const categoryTotals = {};

    // Calculate total amount for each category
    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += entry.amount;
        } else {
            categoryTotals[entry.category] = entry.amount;
        }
    });

    const summaryTableBody = document.querySelector('#summary-table tbody');
    summaryTableBody.innerHTML = '';

    // Display the summary in the table
    for (const [category, total] of Object.entries(categoryTotals)) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${category}</td>
            <td>${total.toFixed(2)}</td>
        `;
        summaryTableBody.appendChild(row);
    }
}
