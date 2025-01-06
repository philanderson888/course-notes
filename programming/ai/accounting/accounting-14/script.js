let combinedData = [];

// get your own key from google cloud platform at https://console.cloud.google.com/apis/credentials
let googleSheetsApiKey = 'getYourOwnKey';

const categoryChart = document.getElementById('categoryChart');
const categoryPieChart = document.getElementById('categoryPieChart');

document.getElementById('report-heading').addEventListener('click', () => {
    const rawTransactions = document.getElementById('raw-transactions');
    if (rawTransactions.style.display === 'none') {
        rawTransactions.style.display = 'block';
    } else {
        rawTransactions.style.display = 'none';
    } 
});

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

document.getElementById('last-1-day').addEventListener('click', () => {
    console.log(' ');
    console.log('last 1 day button clicked...');
    filterLastDays(1);
});

document.getElementById('last-2-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 2 days button clicked...');
    filterLastDays(2);
});

document.getElementById('last-3-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 3 days button clicked...');
    filterLastDays(3);
});

document.getElementById('last-4-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 4 days button clicked...');
    filterLastDays(4);
});

document.getElementById('last-5-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 5 days button clicked...');
    filterLastDays(5);
});

document.getElementById('last-6-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 6 days button clicked...');
    filterLastDays(6);
});

document.getElementById('last-7-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 7 days button clicked...');
    filterLastDays(7);
});

document.getElementById('last-10-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 10 days button clicked...');
    filterLastDays(10);
});

document.getElementById('last-14-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 14 days button clicked...');
    filterLastDays(14);
});

document.getElementById('last-21-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 21 days button clicked...');
    filterLastDays(21);
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
    const filterHeading = document.getElementById('filter-heading');
    const reportHeading = document.getElementById('report-heading');
    const incomeHeading = document.getElementById('income-summary');
    const expenditureHeading = document.getElementById('expenditure-summary');
    const barChartHeading = document.getElementById('bar-chart-heading');
    const pieChartHeading = document.getElementById('pie-chart-heading');
    
    if (type === 'Custom') {
        filterHeading.textContent = `Filter By Date - ${start} to ${end}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start} to ${end}`;
        incomeHeading.textContent = `Income Summary - ${start} to ${end}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start} to ${end}`;
        barChartHeading.textContent = `Expenditure Summary - ${start} to ${end}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start} to ${end}`;
    } else if (type === 'Year') {
        filterHeading.textContent = `Filter By Year - ${start}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        incomeHeading.textContent = `Income Summary - ${start}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start}`;
        barChartHeading.textContent = `Expenditure Summary - ${start}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start}`;
    } else if (type === 'Month') {
        filterHeading.textContent = `Filter By Month - ${start}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        incomeHeading.textContent = `Income Summary - ${start}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start}`;
        barChartHeading.textContent = `Expenditure Summary - ${start}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start}`;
    } else if (type === 'Recent') {
        filterHeading.textContent = `Filter - ${start}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        incomeHeading.textContent = `Income Summary - ${start}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start}`;
        barChartHeading.textContent = `Expenditure Summary - ${start}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start}`;
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
    const spreadsheetId = '1JBQkV95ga83ccbg5ZHRKOooNYNietvdTCIpEzBKZIXw';
    const range = 'CombinedAll';   
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${googleSheetsApiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        parseGoogleSheetData(data);
        displayData(combinedData);
        const sortedExpenditureCategories = displayCategorySummary(combinedData);
        displayCategoryBarChart(sortedExpenditureCategories);
        displayCategoryPieChart(sortedExpenditureCategories);
    })
    .catch(error => console.error('Error loading data:', error));
}

function parseGoogleSheetData(data) {
    const headers = data.values[0];

    const filterByCategory = data.values.slice(1).filter(entry => entry[headers.indexOf('Category')] !== 'Transfers' && entry[headers.indexOf('Category')] !== 'Transfer' && entry[headers.indexOf('Category')] !== 'Initial Balance');

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

        let invalidDescription = false;
        if (entry.description === undefined) {
            invalidDescription = true;
            entry.description = '';
        }

        let invalidCategory = false;
        if (entry.category === 'General' || entry.category === 'Transport' || entry.category === 'Bills' || entry.category === 'Groceries' || entry.category === 'Shopping' || entry.category === 'Entertainment') {
            invalidCategory = true;
        }

        if (counter < 100) {
            const row = document.createElement('tr');
            row.style = (invalidCategory || invalidDescription) ? 'background-color: #ffcccc;' : '';
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

    // Calculate totals for each category
    data.forEach(entry => {
        if (categoryTotals[entry.category]) {
            categoryTotals[entry.category] += -1 * entry.amount;
        } else {
            categoryTotals[entry.category] = -1 * entry.amount;
        }
    });

    // Consolidate categories
    const categoryTotalsConsolidated = {};

    for (const [category, total] of Object.entries(categoryTotals)) {
        if (category.includes('Charity')) {
            categoryTotalsConsolidated['Charity'] = (categoryTotalsConsolidated['Charity'] || 0) + total;
        } else if (category.includes('Acting school')) {
            categoryTotalsConsolidated['Kids'] = (categoryTotalsConsolidated['Kids'] || 0) + total;
        } else if (category.includes('Girls')) {
            categoryTotalsConsolidated['Kids'] = (categoryTotalsConsolidated['Kids'] || 0) + total;
        } else if (category.includes('Kids')) {
            categoryTotalsConsolidated['Kids'] = (categoryTotalsConsolidated['Kids'] || 0) + total;
        } else if (category.includes('Travel')) {
            categoryTotalsConsolidated['Travel'] = (categoryTotalsConsolidated['Travel'] || 0) + total;
        } else if (category.includes('Telecoms')) {
            categoryTotalsConsolidated['Mortgage and Utilities'] = (categoryTotalsConsolidated['Mortgage and Utilities'] || 0) + total;
        } else if (category.includes('Utilities')) {
            categoryTotalsConsolidated['Mortgage and Utilities'] = (categoryTotalsConsolidated['Mortgage and Utilities'] || 0) + total;
        } else if (category.includes('Mortgage')) {
            categoryTotalsConsolidated['Mortgage and Utilities'] = (categoryTotalsConsolidated['Mortgage and Utilities'] || 0) + total;
        } else if (category.includes('Eating Out')) {
            categoryTotalsConsolidated['Food'] = (categoryTotalsConsolidated['Food'] || 0) + total;
        } else if (category.includes('Eating out')) {
            categoryTotalsConsolidated['Food'] = (categoryTotalsConsolidated['Food'] || 0) + total;
        } else if (category.includes('Holiday')) {
            categoryTotalsConsolidated['Holiday'] = (categoryTotalsConsolidated['Holiday'] || 0) + total;
        } else if (category.includes('Invest')) {
            categoryTotalsConsolidated['Investments'] = (categoryTotalsConsolidated['Investments'] || 0) + total;
        } else {
            categoryTotalsConsolidated[category] = total;
        }
    }

    // Convert the categoryTotals object to an array and sort it by value in descending order, filtering out zero values after rounding to the nearest 100
    const roundingFactor = 100;
    sortedExpenditureCategories = Object.entries(categoryTotalsConsolidated)
        .map(([category, total]) => [category, Math.round(total / roundingFactor) * roundingFactor])
        .filter(([, roundedTotal]) => roundedTotal !== 0)
        .filter(([, roundedTotal]) => roundedTotal > 0)
        .sort((a, b) => b[1] - a[1]);

    // Display sorted data in the table
    const expenditureSummaryTableBody = document.querySelector('#expenditure-summary-table tbody');
    expenditureSummaryTableBody.innerHTML = '';
    sortedExpenditureCategories.forEach(([category, roundedTotal]) => {
        const row = document.createElement('tr');

        invalidCategory = false;
        if (category === 'General' || category === 'Transport' || category === 'Bills' || category === 'Groceries' || category === 'Shopping' || category === 'Entertainment') {
            invalidCategory = true;
        }
        row.style = invalidCategory ? 'background-color: #ffcccc;' : ''; 
        row.innerHTML = `
            <td>${category}</td>
            <td>${roundedTotal.toFixed(2)}</td>
        `;
        expenditureSummaryTableBody.appendChild(row);
    });

    // Display the total expenditure
    const totalExpenditure = sortedExpenditureCategories.reduce((sum, [, total]) => sum + total, 0);
    document.getElementById('total-expenditure').textContent = `Total Expenditure - £${totalExpenditure.toFixed(2)}`;
    







    // provide a separate table for charity items also
    const charityTotalsConsolidated = {};

    for (const [category, total] of Object.entries(categoryTotals)) {
        if (category.includes('Charity')) {
            charityTotalsConsolidated[category] = (charityTotalsConsolidated[category] || 0) + total;
        }
    }

    const sortedCharityCategories = Object.entries(charityTotalsConsolidated)
        .map(([category, total]) => [category, Math.round(total / roundingFactor) * roundingFactor])
        .filter(([, roundedTotal]) => roundedTotal !== 0)
        .sort((a, b) => b[1] - a[1]);

    // Populate the charity categories table
    const charityTableBody = document.querySelector('#charity-table tbody');
    charityTableBody.innerHTML = '';
    sortedCharityCategories.forEach(([category, roundedTotal]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${category}</td>
            <td>£${roundedTotal.toFixed(0)}</td>
        `;
        charityTableBody.appendChild(row);
    });

    const totalCharityExpenditure = sortedCharityCategories.reduce((sum, [, total]) => sum + total, 0);
    document.getElementById('total-charity-expenditure').textContent = `Total Charity Expenditure - £${totalCharityExpenditure.toFixed(0)}`;
   


    const mortgageAndUtilitiesTotals = {};

    for (const [category, total] of Object.entries(categoryTotals)) {
        if (category.includes('Mortgage') || category.includes('Utilities') || category.includes('Telecoms')) {
            mortgageAndUtilitiesTotals[category] = (mortgageAndUtilitiesTotals[category] || 0) + total;
        }
    }

    // Convert to array, round to nearest £100, and sort in descending order
    const sortedMortgageAndUtilitiesCategories = Object.entries(mortgageAndUtilitiesTotals)
        .map(([category, total]) => [category, Math.round(total / 100) * 100])
        .filter(([, total]) => total !== 0)
        .sort((a, b) => b[1] - a[1]);

    const mortgageAndUtilitiesTableBody = document.querySelector('#mortgage-and-utilities-table tbody');
    mortgageAndUtilitiesTableBody.innerHTML = '';

    // Display sorted data in the table
    sortedMortgageAndUtilitiesCategories.forEach(([category, roundedTotal]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${category}</td>
            <td>£${roundedTotal.toFixed(2)}</td>
        `;
        mortgageAndUtilitiesTableBody.appendChild(row);
    });

    const totalMortgageAndUtilitiesExpenditure = sortedMortgageAndUtilitiesCategories.reduce((sum, [, total]) => sum + total, 0);
    document.getElementById('total-mortgage-and-utilities-expenditure').textContent = `Total Mortgage And Utilities Expenditure - £${totalMortgageAndUtilitiesExpenditure.toFixed(0)}`;   



    // add on income summary
    sortedIncomeCategories = Object.entries(categoryTotalsConsolidated)
    .map(([category, total]) => [category, -1 * Math.round(total / roundingFactor) * roundingFactor])
    .filter(([, roundedTotal]) => roundedTotal !== 0)
    .filter(([, roundedTotal]) => roundedTotal > 0)
    .sort((a, b) => b[1] - a[1]);

    // Display sorted data in the table
    const incomeSummaryTableBody = document.querySelector('#income-summary-table tbody');
    incomeSummaryTableBody.innerHTML = '';
    sortedIncomeCategories.forEach(([category, roundedTotal]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${category}</td>
            <td>${roundedTotal.toFixed(2)}</td>
        `;
        incomeSummaryTableBody.appendChild(row);
    });

    // Display the total income
    const totalIncome = sortedIncomeCategories.reduce((sum, [, total]) => sum + total, 0);
    
    document.getElementById('total-income').textContent = `Total Income - £${totalIncome.toFixed(2)}`;

    return sortedExpenditureCategories;
}


// --------------------------------------------------------------------------
//
//                            display charts
//
// --------------------------------------------------------------------------

function displayCategoryBarChart(sortedExpenditureCategories) {
    const categories = sortedExpenditureCategories.map(([category]) => category);
    const totals = sortedExpenditureCategories.map(([, total]) => total);

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
        },
        responsive: true, 
        maintainAspectRatio: false,
    };

    window.categoryChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options
    });
}

function displayCategoryPieChart(sortedExpenditureCategories) {
    const categories = sortedExpenditureCategories.map(([category]) => category);
    const totals = sortedExpenditureCategories.map(([, total]) => total);

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
    const sortedExpenditureCategories = displayCategorySummary(filterByDateAndCategory);
    updateCategoryBarChart(sortedExpenditureCategories);
    updateCategoryPieChart(sortedExpenditureCategories);
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
    const sortedExpenditureCategories = displayCategorySummary(filteredData);
    updateCategoryBarChart(sortedExpenditureCategories);
    updateCategoryPieChart(sortedExpenditureCategories);    
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
    const sortedExpenditureCategories = displayCategorySummary(filteredData);
    updateCategoryBarChart(sortedExpenditureCategories);
    updateCategoryPieChart(sortedExpenditureCategories);
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

    if (days === 1) {
        updateHeadings('Recent', 'Last 1 Day');
        updateActiveButton('last-1-day');
    } else if (days === 2) {
        updateHeadings('Recent', 'Last 2 Days');
        updateActiveButton('last-2-days');
    } else if (days === 3) {
        updateHeadings('Recent', 'Last 3 Days');
        updateActiveButton('last-3-days');
    } else if (days === 4) {
        updateHeadings('Recent', 'Last 4 Days');
        updateActiveButton('last-4-days');
    } else if (days === 5) {
        updateHeadings('Recent', 'Last 5 Days');
        updateActiveButton('last-5-days');
    } else if (days === 6) {
        updateHeadings('Recent', 'Last 6 Days');
        updateActiveButton('last-6-days');
    } else if (days === 7) {
        updateHeadings('Recent', 'Last 7 Days');
        updateActiveButton('last-7-days');
    } else if (days === 10) {
        updateHeadings('Recent', 'Last 10 Days');
        updateActiveButton('last-10-days');
    } else if (days === 14) {
        updateHeadings('Recent', 'Last 14 Days');
        updateActiveButton('last-14-days');
    } else if (days === 21) {
        updateHeadings('Recent', 'Last 21 Days');
        updateActiveButton('last-21-days');
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


function updateCategoryBarChart(sortedExpenditureCategories) {
    const categories = sortedExpenditureCategories.map(([category]) => category);
    const totals = sortedExpenditureCategories.map(([, total]) => total);

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

function updateCategoryPieChart(sortedExpenditureCategories) {
    const categories = sortedExpenditureCategories.map(([category]) => category);
    const totals = sortedExpenditureCategories.map(([, total]) => total);

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
