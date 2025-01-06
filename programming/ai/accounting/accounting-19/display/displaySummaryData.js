
function displaySummaryData(data) {

    console.log(' ');
    console.log('displayCategorySummary() ...');

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
        row.className = invalidCategory ? 'invalidCategory' : ''; 
        row.innerHTML = `
            <td>${category}</td>
            <td>${roundedTotal.toFixed(2)}</td>
        `;
        expenditureSummaryTableBody.appendChild(row);
    });

    // Display the total expenditure
    const totalExpenditure = sortedExpenditureCategories.reduce((sum, [, total]) => sum + total, 0);
    document.getElementById('total-expenditure').textContent = `Total Expenditure - £${totalExpenditure.toFixed(2)}`;
    



    // generate a separate table for charity items
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



    console.log(' ');
    console.log('Generating smaller charity table ... recipient name is in the description ...');
    const smallerCharityTotals = {};
    const smallerCharityRecipients = ['CFAN', 'Burn', 'God TV', 'Wikipedia', 'Saba', 'Shakaib', 'Saima', 'Daniyal', 'Shaloom', 'Shumaila', 'Sumaira', 'Hasroon', 'Zeerish', 'Sehrish', 'Rifqa', 'Gulraiz'];

    data.forEach(entry => {
        if (entry.category.includes('Charity')) {
            for (const recipient of smallerCharityRecipients) {
                if (entry.description.includes(recipient)) {
                    smallerCharityTotals[recipient] = (smallerCharityTotals[recipient] || 0) + -1 * entry.amount;
                }
            }
        }
    });

    console.log(' ');
    console.log('smallerCharityTotals:');
    console.log(smallerCharityTotals);

    const sortedSmallerCharityTotals = Object.entries(smallerCharityTotals)
        .map(([recipient, total]) => [recipient, Math.round(total / roundingFactor) * roundingFactor])
        .sort((a, b) => b[1] - a[1]);

    console.log(' ');
    console.log('sorted smaller charity totals:'); 
    console.log(sortedSmallerCharityTotals);    
        
    const smallerCharityTableBody = document.querySelector('#smaller-charity-table tbody');
    smallerCharityTableBody.innerHTML = '';

    console.log(' ');
    console.log('sorted smaller charity categories');

    sortedSmallerCharityTotals.forEach(([recipient, roundedTotal]) => {
        console.log(recipient, roundedTotal);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${recipient}</td>
            <td>£${roundedTotal.toFixed(0)}</td>
        `;
        smallerCharityTableBody.appendChild(row);
    });


    console.log(' ');
    console.log('... now looking at all the data so far gathered ...');

    sortedCharityCategories.forEach(([category, roundedTotal]) => {
        console.log(category, roundedTotal);
    });

    console.log(' ');
    console.log('smallerCharityTotals:');
    sortedSmallerCharityTotals.forEach(([recipient, roundedTotal]) => {
        console.log(recipient, roundedTotal);
    });

    mergedCharityTotals = {...charityTotalsConsolidated, ...smallerCharityTotals};
    console.log(' ');
    console.log('mergedCharityTotals:');
    console.log(mergedCharityTotals);

    mergedCharityCategories = [...sortedCharityCategories, ...sortedSmallerCharityTotals];
    console.log(' ');
    console.log('mergedCharityCategories:');
    console.log(mergedCharityCategories);

    mergedAndRenamedCharityCategories = mergedCharityCategories.map(([category, total]) => {
        console.log('category:', category);
        if (category === 'Charity Victor') {
            console.log('replace Charity Victor with Orphan School');
            category = 'Orphan School';
        } else if (category === 'Charity Tithe') {
            category = 'Tithe';
        } else if (category.includes('Charity')) {      
            category = category.replace('Charity','').trim();
        }
        return [category, total];
    });

    console.log(' ');
    console.log(`mergedAndRenamedCharityCategories ... remove duplicate entry of 'Saba'`);
    let sabaTotal = 0;
    removeDuplicateSaba = mergedAndRenamedCharityCategories.filter(([category, total]) => {
        if (category === 'Saba') {
            sabaTotal += total;
            console.log(`sabaTotal: ${sabaTotal}`);
            return false;
        }
        return true;
    });

    removeDuplicateSaba.push(['Saba', sabaTotal]);
    mergedAndRenamedCharityCategories = removeDuplicateSaba;

    mergedRenamedFilteredCharityCategories = mergedAndRenamedCharityCategories.filter(([category]) => category !== '');

    mergedRenamedFilteredSortedCharityCategories = mergedRenamedFilteredCharityCategories.sort((a, b) => b[1] - a[1]);

    console.log(' ');
    console.log('mergedRenamedFilteredSortedCharityCategories:');
    console.log(mergedRenamedFilteredSortedCharityCategories);



    const tithesAndOfferingsTableBody = document.querySelector('#tithes-and-offerings-table tbody');
    tithesAndOfferingsTableBody.innerHTML = '';

    console.log(' ');
    console.log('tithes and offerings table ...');  

    mergedRenamedFilteredSortedCharityCategories.forEach(([recipient, roundedTotal]) => {
        if (recipient === 'Tithe' || recipient === 'Offering') {
            console.log(recipient, roundedTotal);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${recipient}</td>
                <td>£${roundedTotal.toFixed(0)}</td>
            `;
            tithesAndOfferingsTableBody.appendChild(row);
        }
    });


    const ukCharityGivingTableBody = document.querySelector('#uk-charity-giving-table tbody');
    ukCharityGivingTableBody.innerHTML = '';

    console.log(' ');
    console.log('uk charity giving table ...');  

    mergedRenamedFilteredSortedCharityCategories.forEach(([recipient, roundedTotal]) => {
        if (recipient === 'GFA' || recipient === 'CFAN' || recipient === 'Burn' || recipient === 'God TV' || recipient === 'Wikipedia') {
            console.log(recipient, roundedTotal);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${recipient}</td>
                <td>£${roundedTotal.toFixed(0)}</td>
            `;
            ukCharityGivingTableBody.appendChild(row);
        }
    });


    const ukIndividualGivingTableBody = document.querySelector('#uk-individual-giving-table tbody');
    ukIndividualGivingTableBody.innerHTML = '';

    console.log(' ');
    console.log('uk individual giving table ...');

    mergedRenamedFilteredSortedCharityCategories.forEach(([recipient, roundedTotal]) => {
        if (recipient === 'Raul' || recipient === 'Jonathan' || recipient === 'One-Off') {
            console.log(recipient, roundedTotal);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${recipient}</td>
                <td>£${roundedTotal.toFixed(0)}</td>
            `;
            ukIndividualGivingTableBody.appendChild(row);
        }
    });

    const internationalCharityGivingTableBody = document.querySelector('#international-charity-giving-table tbody');
    internationalCharityGivingTableBody.innerHTML = '';

    console.log(' ');
    console.log('international charity giving table ...');

    mergedRenamedFilteredSortedCharityCategories.forEach(([recipient, roundedTotal]) => {
        if (recipient === 'Orphan School' || recipient === 'Learning School' || recipient === 'Saba' || recipient === 'Shakaib' 
            || recipient === 'Saima' || recipient === 'Daniyal' || recipient === 'Zeeshan' 
            || recipient === 'Shaloom' || recipient === 'Shumaila' || recipient === 'Sumaira' || recipient === 'Hasroon' 
            || recipient === 'Zeerish' || recipient === 'Sehrish' || recipient === 'Rifqa' || recipient === 'Gulraiz') {
            console.log(recipient, roundedTotal);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${recipient}</td>
                <td>£${roundedTotal.toFixed(0)}</td>
            `;
            internationalCharityGivingTableBody.appendChild(row);
        }
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
