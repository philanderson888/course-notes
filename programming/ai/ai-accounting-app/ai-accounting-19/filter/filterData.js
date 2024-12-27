// --------------------------------------------------------------------------
//
//                            filter data
//
// --------------------------------------------------------------------------

function filterData() {

    console.log(' ');
    console.log('filterData() ...');

    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    const filterByDateAndCategory = cleansedData.filter(entry => {
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);
        return entryDateUK >= startDate && entryDateUK <= endDate;
    });

    displayDataRows(filterByDateAndCategory);
    displayCharityDataRows(filterByDateAndCategory);
    const sortedExpenditureCategories = displayCategorySummary(filterByDateAndCategory);
    updateCategoryBarChart(sortedExpenditureCategories);
    updateCategoryPieChart(sortedExpenditureCategories);
}

function filterByYear(year) {

    console.log(' ');
    console.log('filterByYear() ...');

    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    const filteredData = cleansedData.filter(entry => {
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);
        return entryDateUK >= startDate && entryDateUK <= endDate;
    });

    displayDataRows(filteredData);
    displayCharityDataRows(filteredData);
    const sortedExpenditureCategories = displayCategorySummary(filteredData);
    updateCategoryBarChart(sortedExpenditureCategories);
    updateCategoryPieChart(sortedExpenditureCategories);    
}

function filterByMonth(year, month) {

    console.log(' ');
    console.log('filterByMonth() ...');

    const startDate = new Date(`${year}-${String(month).padStart(2, '0')}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0); // Set to the last day of the month

    const filteredData = cleansedData.filter(entry => {
        const [day, month, year] = entry.date.split('/');
        const entryDateUK = new Date(`${month}/${day}/${year}`);
        return entryDateUK >= startDate && entryDateUK <= endDate;
    });

    displayDataRows(filteredData);
    displayCharityDataRows(filteredData);
    const sortedExpenditureCategories = displayCategorySummary(filteredData);
    updateCategoryBarChart(sortedExpenditureCategories);
    updateCategoryPieChart(sortedExpenditureCategories);
}

function filterLastDays(days) {

    console.log(' ');
    console.log('filterLastDays() ...');

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
    } else if (days === 60) {
        updateHeadings('Recent', 'Last 60 Days');
        updateActiveButton('last-60-days');
    } else if (days === 90) {
        updateHeadings('Recent', 'Last 90 Days');
        updateActiveButton('last-90-days');
    } else if (days === 180) {
        updateHeadings('Recent', 'Last 180 Days');
        updateActiveButton('last-180-days');
    } else if (days === 365) {
        updateHeadings('Recent', 'Last 365 Days');
        updateActiveButton('last-365-days');
    } else if (days === 730) {
        updateHeadings('Recent', 'Last 2 Years');
        updateActiveButton('last-730-days');
    } else if (days === 1095) {
        updateHeadings('Recent', 'Last 3 Years');
        updateActiveButton('last-1095-days');
    }    
}
