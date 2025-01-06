
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
    const charityReportHeading = document.getElementById('charity-report-heading');
    const incomeHeading = document.getElementById('income-summary');
    const expenditureHeading = document.getElementById('expenditure-summary');
    const mortgageHeading = document.getElementById('mortgage-and-utilties-heading');
    const charityHeading = document.getElementById('charity-heading');
    const barChartHeading = document.getElementById('bar-chart-heading');
    const pieChartHeading = document.getElementById('pie-chart-heading');
    
    if (type === 'Custom') {
        filterHeading.textContent = `Filter By Date - ${start} to ${end}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start} to ${end} - click to view`;
        charityReportHeading.textContent = `Giving Report - ${start} to ${end}`;
        incomeHeading.textContent = `Income Summary - ${start} to ${end}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start} to ${end}`;
        barChartHeading.textContent = `Expenditure Summary - ${start} to ${end}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start} to ${end}`;
    } else if (type === 'Year') {
        filterHeading.textContent = `Filter By Year - ${start}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        charityReportHeading.textContent = `Giving Report - ${start}`;
        incomeHeading.textContent = `Income Summary - ${start}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start}`;
        barChartHeading.textContent = `Expenditure Summary - ${start}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start}`;
    } else if (type === 'Tax Year') {
        filterHeading.textContent = `Filter By Tax Year - ${start} to ${parseInt(start) + 1}`;
        reportHeading.textContent = `Combined Income and Expense Report - Tax Year ${start} to ${parseInt(start) + 1} - (click to expand)`;
        charityReportHeading.textContent = `Giving Report - Tax Year ${start} to ${parseInt(start) + 1} - (click to expand)`;
        incomeHeading.textContent = `Income Summary - Tax Year ${start} to ${parseInt(start) + 1}`;
        expenditureHeading.textContent = `Expenditure Summary - Tax Year ${start} to ${parseInt(start) + 1}`;
        mortgageHeading.textContent = `Mortgage and Utilities Summary - Tax Year ${start} to ${parseInt(start) + 1}`;
        charityHeading.textContent = `Charity Summary - Tax Year ${start} to ${parseInt(start) + 1}`;
        barChartHeading.textContent = `Expenditure Summary - Tax Year ${start} to ${parseInt(start) + 1}`;
        pieChartHeading.textContent = `Expenditure Summary - Tax Year ${start} to ${parseInt(start) + 1}`;
    } else if (type === 'Month') {
        filterHeading.textContent = `Filter By Month - ${start}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        charityReportHeading.textContent = `Giving Report - ${start}`;
        incomeHeading.textContent = `Income Summary - ${start}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start}`;
        barChartHeading.textContent = `Expenditure Summary - ${start}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start}`;
    } else if (type === 'Recent') {
        filterHeading.textContent = `Filter - ${start}`;
        reportHeading.textContent = `Combined Income and Expense Report - ${start}`;
        charityReportHeading.textContent = `Giving - ${start}`;
        incomeHeading.textContent = `Income Summary - ${start}`;
        expenditureHeading.textContent = `Expenditure Summary - ${start}`;
        barChartHeading.textContent = `Expenditure Summary - ${start}`;
        pieChartHeading.textContent = `Expenditure Summary - ${start}`;
    }
}
