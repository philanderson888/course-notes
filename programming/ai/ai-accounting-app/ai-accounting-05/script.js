let combinedData = [];

// get your own key from google cloud platform at https://console.cloud.google.com/apis/credentials
let googleSheetsApiKey = 'getYourOwnKey';

getApiKey = () => {
    console.log('getApiKey()...');
    fetch('api-key.json')
    .then(response => response.json())
    .then(data => {
        googleSheetsApiKey = data.googleSheetsApiKey;
        loadGoogleSheetDataApiv4();   
        loadGoogleSheetDataApiv3();
    })
    .catch(error => console.error('Error loading data:', error));
}

// Automatically load the data when the app launches
window.addEventListener('DOMContentLoaded', () => {
    getApiKey();
});

function loadGoogleSheetDataApiv3() {
    var id = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';
    var gid = '1953160326';
    var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
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
        parseGoogleSheetData(data);
        displayData(combinedData);
        displayCategorySummary(combinedData);
        displayCategoryChart(combinedData);
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
    displayCategorySummary(filteredData);
    displayCategoryChart(filteredData);
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

    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += -1 * entry.amount;
        } else {
            categoryTotals[entry.category] = -1 * entry.amount;
        }
    });

    const summaryTableBody = document.querySelector('#summary-table tbody');
    summaryTableBody.innerHTML = '';

    console.log(' ');

    for (const [category, total] of Object.entries(categoryTotals)) {
        const roundedTotal = Math.round(total / 5) * 5; // Round to nearest 5
        const row = document.createElement('tr');
        
        console.log(`${category} ${roundedTotal}`);

        row.innerHTML = `
            <td>${category}</td>
            <td>${roundedTotal.toFixed(2)}</td>
        `;
        summaryTableBody.appendChild(row);
    }
}

function displayCategoryChart(data) {

    console.log(' ');
    console.log('display category chart');

    const categoryTotals = {};

    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += -1 * entry.amount;
        } else {
            categoryTotals[entry.category] = -1 * entry.amount;
        }
    });

    console.log(' ');
    console.log('category totals');
    console.log(categoryTotals);

    const categories = Object.keys(categoryTotals);
    const totals = Object.values(categoryTotals).map(total => Math.round(total / 5) * 5);

    document.getElementById('categoryChart').innerHTML = '';
    document.getElementById('categoryPieChart').innerHTML = '';
    
    // Get the canvas contexts
    const barCtx = document.getElementById('categoryChart').getContext('2d');
    const pieCtx = document.getElementById('categoryPieChart').getContext('2d');

    // Destroy previous chart instances if they exist
    /*
    if (window.categoryChart) {
        window.categoryChart.destroy();
    }
    if (window.categoryPieChart) {
        window.categoryPieChart.destroy();
    }
    */

    document.getElementById('categoryChart').innerHTML = '';
    document.getElementById('categoryPieChart').innerHTML = '';

    // Create the bar chart
    window.categoryChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Expenditure',
                data: totals,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Category'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Expenditure'
                    }
                }
            }
        }
    });


    // Create the pie chart
    window.categoryPieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                label: 'Expenditure',
                data: totals,
                backgroundColor: categories.map((_, index) =>
                    `hsl(${(index * 360) / categories.length}, 70%, 50%)`
                ),
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                }
            }
        }
    });
}
