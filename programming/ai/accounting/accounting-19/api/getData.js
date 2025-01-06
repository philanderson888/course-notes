
getUrl = () => {
    console.log('get url ... ');
    fetch('api.json')
    .then(response => response.json())
    .then(data => {
        console.log('data:');
        console.log(data);

        googleSheetsApiKey = data.googleSheetsApiKey;

        console.log('googleSheetsApiKey:', googleSheetsApiKey);

        const spreadsheetId = data.spreadsheetId;

        console.log('spreadsheetId:', spreadsheetId);

        const range = data.range;  

        console.log('range:', range);

        const baseUrl = data.baseUrl;

        console.log('baseUrl:', baseUrl);

        url = `${baseUrl}/${spreadsheetId}/values/${range}?key=${googleSheetsApiKey}`;

        console.log('url:', url);

        getGoogleSheetData();   
    })
    .catch(error => console.error('Error loading data:', error));
}

function loadGoogleSheetData() {
    console.log('url:', url);
    console.log('fetching data from google sheets api v4 ...');
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`data loaded from google sheets api v4 ...`);
        console.log(data)
        cleanData(data);
        renderData(cleansedData);
    })
    .catch(error => console.error('Error loading data:', error));
}
