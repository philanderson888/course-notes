let combinedData = [];

// Automatically load the data when the app launches
window.addEventListener('DOMContentLoaded', () => {
    loadGoogleSheetData();
    loadGoogleSheetData2();
});

document.getElementById('filter-data').addEventListener('click', filterData);

function loadGoogleSheetData2() {
    
    var id = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';
    var gid = '1953160326';
    var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
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

function loadGoogleSheetData() {
    // Replace with your published JSON URL
    // const url = 'https://spreadsheets.google.com/feeds/list/2PACX-1vTv8i28kfxug7zacBtU01zSL8bBkGMfJmwd_GW0PpcgFs2Mok1l0ryQDtpOAim6GTv07ML6GwZpo2Iu/od6/public/values?alt=json&key=AIzaSyAQK2KRPcE_WZTgiqBs4k8_kpztmB4EDEw';

    var id = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';
    var gid = '1953160326';
    var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;

    console.log('fetching data from google sheets');

    fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(' ');
        console.log('response recieved from google sheets');
        console.log(data);
        console.log(' ');
        console.log('data without extra characters ...');
        dataAsJson = data.slice(47,-2);
        console.log(dataAsJson);
        //document.getElementById("json").innerHTML=myItems(dataAsJson);
        parseGoogleSheetData(dataAsJson);
        displayData(combinedData);
    });



     

    /*
    
        .then(output => {
            console.log('data recieved from google sheets');
            console.log(output);
            parseGoogleSheetData(output);
            displayData(combinedData);
        })
        .catch(error => console.error('Error loading data:', error));
        */
}

function parseGoogleSheetData(data) {
    console.log(' ');
    console.log('parsing data from google sheets');
    console.log(data);
    data = JSON.parse(data);
    console.log(' ');
    console.log('parsed data from google sheets 1');
    console.log(data);

    data = data['table']['rows'];
    console.log(' ');
    console.log('parsed data from google sheets 2');
    console.log(data);

    combinedData = data.map(entry => ({
        date: entry['gsx$date']['$t'],
        category: entry['gsx$category']['$t'],
        payee: entry['gsx$payee']['$t'],
        amount: parseFloat(entry['gsx$amount']['$t']),
        description: entry['gsx$description']['$t']
    }));
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
