
// --------------------------------------------------------------------------
//
//                           display data
//
// --------------------------------------------------------------------------

function displayCleansedTransactions(data) {
    const tableBody = document.querySelector('#report-table tbody');
    tableBody.innerHTML = '';

    let counter = 0;
    data.forEach(entry => {
        counter++;

        let invalidDescription = false;
        if (entry.description === undefined || entry.description === '') {
            invalidDescription = true;
            entry.description = '';
        }

        let invalidCategory = false;
        if (entry.category === 'General' || entry.category === 'Transport' || entry.category === 'Bills' || entry.category === 'Groceries' || entry.category === 'Shopping' || entry.category === 'Entertainment') {
            invalidCategory = true;
        }

        if (counter < maxRowsToDisplay) {
            const row = document.createElement('tr');
            row.className = (invalidCategory || invalidDescription) ? 'invalidCategory' : ''; 
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

function displayCleansedCharityTransactions(data) {

    const charityData = data.filter(entry => (entry.category.includes('Charity') || entry.description.toLowerCase().includes('charity')));

    const tableBody = document.querySelector('#charity-report-table tbody');
    tableBody.innerHTML = '';

    let counter = 0;
    charityData.forEach(entry => {
        counter++;

        let invalidDescription = false;
        if (entry.description === undefined || entry.description === '') {
            invalidDescription = true;
            entry.description = '';
        }

        let invalidCategory = true;
        if (entry.category.toLowerCase().includes('charity')) {
            invalidCategory = false;
        }

        if (counter < maxCharityRowsToDisplay) {
            const row = document.createElement('tr');
            row.className = (invalidCategory || invalidDescription) ? 'invalidCategory' : ''; 
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