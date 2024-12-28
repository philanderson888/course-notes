
// --------------------------------------------------------------------------
//
//                           update charts
//
// --------------------------------------------------------------------------


function updateBarChart(sortedExpenditureCategories) {

    console.log(' ');
    console.log('update bar chart ...');

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

function updatePieChart(sortedExpenditureCategories) {

    console.log(' ');
    console.log('update pie chart ...');

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
