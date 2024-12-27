
document.getElementById('report-heading').addEventListener('click', () => {
    const rawTransactions = document.getElementById('raw-transactions');
    if (rawTransactions.style.display === 'none') {
        rawTransactions.style.display = 'block';
    } else {
        rawTransactions.style.display = 'none';
    } 
});
    
document.getElementById('charity-report-heading').addEventListener('click', () => {
    const charityRawTransactions = document.getElementById('charity-raw-transactions');
    if (charityRawTransactions.style.display === 'none') {
        charityRawTransactions.style.display = 'block';
    } else {
        charityRawTransactions.style.display = 'none';
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

document.getElementById('last-60-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 60 days button clicked...');
    filterLastDays(60);
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

document.getElementById('last-730-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 2 years ie 730 days button clicked...');
    filterLastDays(730);
});

document.getElementById('last-1095-days').addEventListener('click', () => {
    console.log(' ');
    console.log('last 3 years ie 1095 days button clicked...');
    filterLastDays(1095);
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
