let combinedData = [];

// get your own key from google cloud platform at https://console.cloud.google.com/apis/credentials
const googleSheetsApiKey = 'getYourOwnKey';

// Automatically load the data when the app launches
window.addEventListener('DOMContentLoaded', () => {

    console.log(' ');
    console.log('DOMContentLoaded...');
    console.log('loadGoogleSheetData()...');
    loadGoogleSheetDataApiv4();   
    loadGoogleSheetDataApiv3();
});

function loadGoogleSheetDataApiv3() {
    
    var id = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';
    var gid = '1953160326';
    var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(' ');
            console.log('second method is using google sheets api version 3');
            console.log(' ');
            console.log('data...');
            console.log(data);
            console.log(' ');
            console.log('data without extra characters ...');
            console.log(data.slice(47,-2));
            document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
        });
        
    function myItems(jsonString){
    var json = JSON.parse(jsonString);
    var table = '<table><tr>'
    json.table.cols.forEach(colonne => table += '<th>' + colonne.label + '</th>')
    table += '</tr>'
    json.table.rows.forEach(ligne => {
        table += '<tr>'
        ligne.c.forEach(cellule => {
            try{var valeur = cellule.f ? cellule.f : cellule.v}
            catch(e){var valeur = ''}
            table += '<td>' + valeur + '</td>'
        }
        )
        table += '</tr>'
        }
    )
    table += '</table>'
    return table
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
        console.log(' ');
        console.log('first method is using google sheets api version 4');
        console.log(' ');
        console.log('data...');
        console.log(data);
        console.log(' ');
        parseGoogleSheetData(data);
        displayData(combinedData);
    })
    .catch(error => console.error('Error loading data:', error));
}


function parseGoogleSheetData(data) {

    console.log(' ');
    console.log('data...');
    console.log(data);
    console.log(' ');
    console.log('data values');
    console.log(data.values);

    const headers = data.values[0];

    console.log(' ');
    console.log('headers...');
    console.log(headers);

    combinedData = data.values.slice(1).map(row => {

        console.log(' ');
        console.log('row...');
        console.log(row);

        structuredData = {
            date: row[headers.indexOf('Date')],
            category: row[headers.indexOf('Category')],
            payee: row[headers.indexOf('Payee')],
            amount: parseFloat(row[headers.indexOf('Amount')]),
            description: row[headers.indexOf('Description')]
        };

        console.log(' ');
        console.log('structuredData...');
        console.log(structuredData);

        return structuredData;
    });
}

function filterData() {
    
    const startDate = new Date(document.getElementById('start-date').value);

    console.log(' ');
    console.log('startDate...');
    console.log(startDate);

    const endDate = new Date(document.getElementById('end-date').value);

    console.log(' ');
    console.log('endDate...');
    console.log(endDate);

    const filteredData = combinedData.filter(entry => {

        console.log(' ');
        console.log('entry...');
        console.log(entry);

        console.log(' ');
        console.log('entry date in UK format');
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);

        console.log(' ');
        console.log('entryDateUK...');
        console.log(entryDateUK);
        
        return entryDateUK >= startDate && entryDateUK <= endDate;
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
