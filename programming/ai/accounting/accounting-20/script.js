console.log("--------------------------------------------------------------------------");
console.log("                                                                          ");
console.log("                         accounts application                             ");
console.log("                                                                          ");
console.log("--------------------------------------------------------------------------");

console.log("==========================================================================");
console.log("                            introduction                                  ");
console.log("==========================================================================");

console.log("This application is designed to help you manage your accounts. It will ");
console.log("fetch data from your google sheets account, cleanse the data, and display ");
console.log("it in a user-friendly way. ");

console.log("==========================================================================");
console.log("                            author                                       ");
console.log("==========================================================================");

console.log("Author: Philip Anderson");
console.log("@philanderson888 on social media platforms and github");

console.log("==========================================================================");
console.log("                          version history                               ");
console.log("==========================================================================");

console.log("August 2024 ... ");
console.log("... version 1 ... initial version, with gradual improvements to build out the app as we see it today, version 18");
console.log("December 2024 ... ");
console.log("Version 19: Fixed some bugs with regards to data display; also completely refactored the application to be more modular as it had been all one single file up to now");
console.log("december 2024 - version 20 - add support for exact tax years from 6 april to 5 april the next year, in clean easy buttons ... ")

// Automatically load the data when the app launches
window.addEventListener('DOMContentLoaded', () => {
    getData();
});

function getData() {
    getUrl();
}

function getGoogleSheetData() {
    loadGoogleSheetData();
}

function renderData(cleansedData) {
    console.log('cleansedData:');
    console.log(cleansedData);
    displayCleansedData(cleansedData);
    const sortedExpenditureCategories = displaySummaryData(cleansedData);
    displayGraphicalData(sortedExpenditureCategories);
}

function displayCleansedData(cleansedData) {
    console.log('cleansedData:');
    console.log(cleansedData);
    displayCleansedTransactions(cleansedData);
    displayCleansedCharityTransactions(cleansedData);
}

function displayGraphicalData(sortedExpenditureCategories) {
    displayBarChart(sortedExpenditureCategories);
    displayPieChart(sortedExpenditureCategories);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
