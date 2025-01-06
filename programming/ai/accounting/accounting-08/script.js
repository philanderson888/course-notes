let combinedData = [];

// get your own key from google cloud platform at https://console.cloud.google.com/apis/credentials
let googleSheetsApiKey = 'getYourOwnKey';

const categoryChart = document.getElementById('categoryChart');
const categoryPieChart = document.getElementById('categoryPieChart');

document.getElementById('filter-data').addEventListener('click', filterData);
document.getElementById('filter-data').addEventListener('click', () => {
    filterData();
    updateActiveButton(null);
    updateHeadings('Custom', document.getElementById('start-date').value, document.getElementById('end-date').value);
});

document.getElementById('show-2022').addEventListener('click', () => {
    filterByYear(2022);
    updateActiveButton('show-2022');
    updateHeadings('Year', 2022);
});

document.getElementById('show-2023').addEventListener('click', () => {
    filterByYear(2023);
    updateActiveButton('show-2023');
    updateHeadings('Year', 2023);
});

document.getElementById('show-2024').addEventListener('click', () => {
    filterByYear(2024);
    updateActiveButton('show-2024');
    updateHeadings('Year', 2024);
});

// Add event listeners for each month button
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
months.forEach((month, index) => {
    document.getElementById(`show-${month.toLowerCase()}-2024`).addEventListener('click', () => {
        filterByMonth(2024, index + 1);
        updateActiveButton(`show-${month.toLowerCase()}-2024`);
        updateHeadings('Month', `${month} 2024`);
    });
});

function updateActiveButton(activeId) {
    const allButtons = document.querySelectorAll('#year-buttons button, #month-buttons button, #filter-section button');
    allButtons.forEach(button => {
        if (button.id === activeId) {
            button.classList.add('active-button');
        } else {
            button.classList.remove('active-button');
        }
    });
}

function updateHeadings(type, start, end = null) {
    const reportHeading = document.getElementById('report-heading');
    const summaryHeading = document.getElementById('summary-heading');
    const barChartHeading = document.getElementById('bar-chart-heading');
    const pieChartHeading = document.getElementById('pie-chart-heading');
    
    if (type === 'Custom') {
        reportHeading.textContent = `Combined Income and Expense Report - ${start} to ${end}`;
        summaryHeading.textContent = `Category Summary - ${start} to ${end}`;
        barChartHeading.textContent = `Expenditure by Category Bar Chart - ${start} to ${end}`;
        pieChartHeading.textContent = `Expenditure by Category Pie Chart - ${start} to ${end}`;
    } else if (type === 'Year') {
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        summaryHeading.textContent = `Category Summary - ${start}`;
        barChartHeading.textContent = `Expenditure by Category Bar Chart - ${start}`;
        pieChartHeading.textContent = `Expenditure by Category Pie Chart - ${start}`;
    } else if (type === 'Month') {
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        summaryHeading.textContent = `Category Summary - ${start}`;
        barChartHeading.textContent = `Expenditure by Category Bar Chart - ${start}`;
        pieChartHeading.textContent = `Expenditure by Category Pie Chart - ${start}`;
    }
}


// Add event listeners for each month button
document.getElementById('show-jan-2024').addEventListener('click', () => filterByMonth(2024, 1));
document.getElementById('show-feb-2024').addEventListener('click', () => filterByMonth(2024, 2));
document.getElementById('show-mar-2024').addEventListener('click', () => filterByMonth(2024, 3));
document.getElementById('show-apr-2024').addEventListener('click', () => filterByMonth(2024, 4));
document.getElementById('show-may-2024').addEventListener('click', () => filterByMonth(2024, 5));
document.getElementById('show-jun-2024').addEventListener('click', () => filterByMonth(2024, 6));
document.getElementById('show-jul-2024').addEventListener('click', () => filterByMonth(2024, 7));
document.getElementById('show-aug-2024').addEventListener('click', () => filterByMonth(2024, 8));
document.getElementById('show-sep-2024').addEventListener('click', () => filterByMonth(2024, 9));
document.getElementById('show-oct-2024').addEventListener('click', () => filterByMonth(2024, 10));
document.getElementById('show-nov-2024').addEventListener('click', () => filterByMonth(2024, 11));
document.getElementById('show-dec-2024').addEventListener('click', () => filterByMonth(2024, 12));

// --------------------------------------------------------------------------
//
//                           load data
//
// --------------------------------------------------------------------------

// Automatically load the data when the app launches
window.addEventListener('DOMContentLoaded', () => {
    getApiKey();
});

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
        json.table.cols.forEach(column => table += '<th>' + column.label + '</th>')
        table += '</tr>'

        let counter = 0;
        json.table.rows.forEach(row => {
            counter++;
            if (counter < 5) {
                table += '<tr>'
                row.c.forEach(cell => {
                    try { var valeur = cell.f ? cell.f : cell.v }
                    catch (e) { var valeur = '' }
                    table += '<td>' + valeur + '</td>'
                });
                table += '</tr>';
            }
        });
        table += '</table>';
        return table;
    }
}

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
        displayCategoryPieChart(combinedData);
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

// --------------------------------------------------------------------------
//
//                           display data
//
// --------------------------------------------------------------------------

function displayData(data) {
    const tableBody = document.querySelector('#report-table tbody');
    tableBody.innerHTML = '';

    let counter = 0;
    data.forEach(entry => {
        counter++;
        if (counter < 5) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.date}</td>
                <td>${entry.category}</td>
                <td>${entry.payee}</td>
                <td>${entry.amount}</td>
                <td>${entry.description}</td>
            `;
            tableBody.appendChild(row);
        }
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

// --------------------------------------------------------------------------
//
//                            display charts
//
// --------------------------------------------------------------------------

function displayCategoryChart(data) {
    const categoryTotals = {};

    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += -1 * entry.amount;
        } else {
            categoryTotals[entry.category] = -1 * entry.amount;
        }
    });

    const categories = Object.keys(categoryTotals);
    const totals = Object.values(categoryTotals);

    const ctx = categoryChart.getContext('2d');

    const chartData = {
        labels: categories,
        datasets: [{
            label: 'Expenditure',
            data: totals,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const options = {
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
    };

    window.categoryChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options
    });
    
}

function displayCategoryPieChart(data) {
    const categoryTotals = {};

    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += -1 * entry.amount;
        } else {
            categoryTotals[entry.category] = -1 * entry.amount;
        }
    });

    const categories = Object.keys(categoryTotals);
    const totals = Object.values(categoryTotals);

    const ctx = categoryPieChart.getContext('2d');

    const chartData = {
        labels: categories,
        datasets: [{
            label: 'Expenditure',
            data: totals,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: false, 
        maintainAspectRatio: false,
    };

    window.categoryPieChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: options
    });
    
}

// --------------------------------------------------------------------------
//
//                            filter data
//
// --------------------------------------------------------------------------

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
    updateCategoryChart(filteredData);
    updateCategoryPieChart(filteredData);
}

function filterByYear(year) {

    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    const filteredData = combinedData.filter(entry => {
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);
        return entryDateUK >= startDate && entryDateUK <= endDate;
    });

    displayData(filteredData);
    displayCategorySummary(filteredData);
    updateCategoryChart(filteredData);
    updateCategoryPieChart(filteredData);
}

function filterByMonth(year, month) {
    const startDate = new Date(`${year}-${String(month).padStart(2, '0')}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0); // Set to the last day of the month

    const filteredData = combinedData.filter(entry => {
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);
        return entryDateUK >= startDate && entryDateUK <= endDate;
    });

    displayData(filteredData);
    displayCategorySummary(filteredData);
    updateCategoryChart(filteredData);
    updateCategoryPieChart(filteredData);
}

// --------------------------------------------------------------------------
//
//                           update charts
//
// --------------------------------------------------------------------------

function updateCategoryChart(data) {
    const categoryTotals = {};

    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += -1 * entry.amount;
        } else {
            categoryTotals[entry.category] = -1 * entry.amount;
        }
    });

    const categories = Object.keys(categoryTotals);
    const totals = Object.values(categoryTotals);

    const chartData = {
        labels: categories,
        datasets: [{
            label: 'Expenditure',
            data: totals,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const options = {
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
    };

    window.categoryChart.data = chartData;
    window.categoryChart.options = options;

    console.log(' ');
    console.log('Updating bar chart...');
    window.categoryChart.update();    
}

function updateCategoryPieChart(data) {
    const categoryTotals = {};

    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += -1 * entry.amount;
        } else {
            categoryTotals[entry.category] = -1 * entry.amount;
        }
    });

    const categories = Object.keys(categoryTotals);
    const totals = Object.values(categoryTotals);

    const chartData = {
        labels: categories,
        datasets: [{
            label: 'Expenditure',
            data: totals,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: false, 
        maintainAspectRatio: false,
    };

    window.categoryPieChart.data = chartData;
    window.categoryPieChart.options = options;

    console.log(' ');
    console.log('Updating pie chart...');
    window.categoryPieChart.update();    
}
