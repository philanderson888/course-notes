let combinedData = [];

// get your own key from google cloud platform at https://console.cloud.google.com/apis/credentials
let googleSheetsApiKey = 'getYourOwnKey';

const categoryChart = document.getElementById('categoryChart');
const categoryPieChart = document.getElementById('categoryPieChart');

document.getElementById('filter-data').addEventListener('click', () => {
    filterData();
    updateActiveButton('filter-data');
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

document.getElementById('last-7-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 7 days button clicked...');
    filterLastDays(7);
});

document.getElementById('last-30-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 30 days button clicked...');
    filterLastDays(30);
});

document.getElementById('last-90-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 90 days button clicked...');
    filterLastDays(90);
});

document.getElementById('last-180-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 180 days button clicked...');
    filterLastDays(180);
});

document.getElementById('last-365-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 365 days button clicked...');
    filterLastDays(365);
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
    const allButtons = document.querySelectorAll('.filter-buttons-row button, #filter-section button');
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
    } else if (type === 'Recent') {
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        summaryHeading.textContent = `Category Summary - ${start}`;
        barChartHeading.textContent = `Expenditure by Category Bar Chart - ${start}`;
        pieChartHeading.textContent = `Expenditure by Category Pie Chart - ${start}`;
    }
}

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
    })
    .catch(error => console.error('Error loading data:', error));
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

    const filterByCategory = data.values.slice(1).filter(entry => entry[headers.indexOf('Category')] !== 'Transfers' && entry[headers.indexOf('Category')] !== 'Transfer' && entry[headers.indexOf('Category')] !== 'Salary' && entry[headers.indexOf('Category')] !== 'Initial Balance');

    const filterByCategoryAndAmount = filterByCategory.filter(entry => entry[headers.indexOf('Amount')] !== '0.00');

    combinedData = filterByCategoryAndAmount.map(row => {
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

    window.categoryPieChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
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

    const filterByDateAndCategory = combinedData.filter(entry => {
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);
        return entryDateUK >= startDate && entryDateUK <= endDate;
    });

    displayData(filterByDateAndCategory);
    displayCategorySummary(filterByDateAndCategory);
    updateCategoryChart(filterByDateAndCategory);
    updateCategoryPieChart(filterByDateAndCategory);
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

function filterLastDays(days) {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days + 1);

    console.log(' ');
    console.log('startDate:', startDate);
    console.log('endDate:', endDate);
    
    // Format the dates as 'YYYY-MM-DD'
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    console.log(' ');
    console.log('formattedStartDate:', formattedStartDate);
    console.log('formattedEndDate:', formattedEndDate);
    
    document.getElementById('start-date').value = formattedStartDate;
    document.getElementById('end-date').value = formattedEndDate;
    
    filterData();

    if (days === 7) {
        updateHeadings('Recent', 'Last 7 Days');
        updateActiveButton('last-7-days');
    } else if (days === 30) {
        updateHeadings('Recent', 'Last 30 Days');
        updateActiveButton('last-30-days');
    } else if (days === 90) {
        updateHeadings('Recent', 'Last 90 Days');
        updateActiveButton('last-90-days');
    } else if (days === 180) {
        updateHeadings('Recent', 'Last 180 Days');
        updateActiveButton('last-180-days');
    } else if (days === 365) {
        updateHeadings('Recent', 'Last 365 Days');
        updateActiveButton('last-365-days');
    }
    
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
        },
        responsive: true, 
        maintainAspectRatio: false,
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
        responsive: true, 
        maintainAspectRatio: false,
    };

    window.categoryPieChart.data = chartData;
    window.categoryPieChart.options = options;

    console.log(' ');
    console.log('Updating pie chart...');
    window.categoryPieChart.update();    
}
