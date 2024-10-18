# ai programming

## contents

- [ai programming](#ai-programming)
  - [contents](#contents)
  - [introduction](#introduction)
  - [case studies](#case-studies)
  - [get google sheets data](#get-google-sheets-data)
  - [new api](#new-api)
  - [working example on code pen using google sheets api version 3](#working-example-on-code-pen-using-google-sheets-api-version-3)
  - [working example on code pen using google sheets api version 3 and 4](#working-example-on-code-pen-using-google-sheets-api-version-3-and-4)

## introduction

just an intro to making code with ai ... exciting !!!

## case studies

trying this one

https://www.youtube.com/watch?v=EsRyyJmO-u8&list=WL&index=3&t=1s

ok so here is my prompt to create an app

```
hey chat gpt are you able to create an accounting application that creates income and expense reports for 3 bank statements, with date, category payee, amount and description as the fields.  The app also gives the option to combine the three sources into one global big picture of all three statements combined, with ability to filter between two dates.  data should be stored in json format locally with a view to migrating to an online storage solution in the future.  thanks.  are you able to create a sample app using html css and javascript initially please? thanks.
```

and here is the output

```
accounting-app/
│
├── index.html
├── styles.css
├── script.js
└── data/
    ├── bank1.json
    ├── bank2.json
    └── bank3.json
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accounting App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Accounting Application</h1>
    <div id="upload-section">
        <label for="file1">Bank Statement 1:</label>
        <input type="file" id="file1" accept=".json"><br><br>
        <label for="file2">Bank Statement 2:</label>
        <input type="file" id="file2" accept=".json"><br><br>
        <label for="file3">Bank Statement 3:</label>
        <input type="file" id="file3" accept=".json"><br><br>
        <button id="load-data">Load Data</button>
    </div>

    <div id="filter-section">
        <label for="start-date">Start Date:</label>
        <input type="date" id="start-date">
        <label for="end-date">End Date:</label>
        <input type="date" id="end-date">
        <button id="filter-data">Filter</button>
    </div>

    <div id="report-section">
        <h2>Combined Income and Expense Report</h2>
        <table id="report-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Payee</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <script src="script.js"></script>
</body>
</html>

```


styles.css

```css
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h1 {
    text-align: center;
}

#upload-section, #filter-section, #report-section {
    margin: 20px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}
```

script.js

```js
let bankData = { bank1: [], bank2: [], bank3: [] };
let combinedData = [];

document.getElementById('load-data').addEventListener('click', () => {
    loadBankData('file1', 'bank1');
    loadBankData('file2', 'bank2');
    loadBankData('file3', 'bank3');
});

document.getElementById('filter-data').addEventListener('click', filterData);

function loadBankData(inputId, bankKey) {
    const fileInput = document.getElementById(inputId);
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = JSON.parse(e.target.result);
            bankData[bankKey] = data;
            combineData();
        };
        reader.readAsText(file);
    }
}

function combineData() {
    combinedData = [...bankData.bank1, ...bankData.bank2, ...bankData.bank3];
    displayData(combinedData);
}

function filterData() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    const filteredData = combinedData.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= startDate && entryDate <= endDate;
    });

    displayData(filteredData);
}

function displayData(data) {
    const tableBody = document.querySelector('#report-table tbody');
    tableBody.innerHTML = '';

    data.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.category}</td>
            <td>${entry.payee}</td>
            <td>${entry.amount}</td>
            <td>${entry.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

```

with sample data

```json
[
    {
        "date": "2024-01-01",
        "category": "Food",
        "payee": "Supermarket",
        "amount": -50.00,
        "description": "Groceries"
    },
    {
        "date": "2024-01-15",
        "category": "Salary",
        "payee": "Company ABC",
        "amount": 2000.00,
        "description": "Monthly salary"
    }
]
```



## get google sheets data

using this page

https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/

we see we can publish our page

here is the google sheets full url

https://docs.google.com/spreadsheets/d/1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI/edit?gid=1953160326#gid=1953160326

and here is the published url

https://docs.google.com/spreadsheets/d/e/2PACX-1vTv8i28kfxug7zacBtU01zSL8bBkGMfJmwd_GW0PpcgFs2Mok1l0ryQDtpOAim6GTv07ML6GwZpo2Iu/pubhtml?gid=1953160326&single=true



here is the template

https://spreadsheets.google.com/feeds/cells/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/full?alt=json

here is the data

YOURGOOGLESHEETCODE = '2PACX-1vTv8i28kfxug7zacBtU01zSL8bBkGMfJmwd_GW0PpcgFs2Mok1l0ryQDtpOAim6GTv07ML6GwZpo2Iu'

SHEETPAGENUMBER = 1

so the url is now

https://spreadsheets.google.com/feeds/cells/2PACX-1vTv8i28kfxug7zacBtU01zSL8bBkGMfJmwd_GW0PpcgFs2Mok1l0ryQDtpOAim6GTv07ML6GwZpo2Iu/1/public/full?alt=json

## new api

https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}


https://sheets.googleapis.com/v4/spreadsheets/1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI


just enabling an api key

api key = "... create your own ..."



https://console.cloud.google.com/apis/credentials/wizard?api=sheets.googleapis.com&previousPage=%2Fapis%2Fapi%2Fsheets.googleapis.com%2Fmetrics%3Fproject%3Ddeft-racer-438912-c0&project=deft-racer-438912-c0

https://sheets.googleapis.com/v4/spreadsheets/1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI?key=AIzaSyAQK2KRPcE_WZTgiqBs4k8_kpztmB4EDEw

and yes this did obtain data

https://sheets.googleapis.com/v4/spreadsheets/1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI?values:batchGet&key=createYourOwnApiKeyHere


so we now have

const apiKey = 'createYourOwn';

const spreadsheetId = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';

const range = 'CombinedAll';   

const url = `https://sheets.googleapis.com/v4/spreadsheets/1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI/values/CombinedAll?key=createYourOwn`;

and yes 

this finally gets my data

```json
{
    "range": "CombinedAll!A1:Z3",
    "majorDimension": "ROWS",
    "values": [
        [
            "Date",
            "Category",
            "Payee",
            "Amount",
            "Description"
        ],
        [
            "07/03/2020",
            "Transfers",
            "ANDERSON P&Z",
            "1",
            "OPEN MONZO"
        ],
        [
            "14/03/2020",
            "Domestic",
            "Amazon",
            "-3.74",
            "#domestic labels for printer"
        ]
    ]
}
```

ok ... great ...



## working example on code pen using google sheets api version 3

so ... we have got this working !!!

I used this code pen

https://codepen.io/philanderson888/pen/bGXWXmB

first in order to establish that version 3 of google sheets api was actually working

```html
<div id="json">json here</div>
```

```css
table {border-collapse: collapse;}
th,td {border: 1px solid black;}
```

```js
var id = '1A7-9gAZbPcMF7ZWu25AxLL3RwhL8iRA8_TO9o_LzDuI';
var gid = '1953160326';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
  .then(response => response.text())
  .then(data => {
 
 console.log('data...');
 console.log(data);
 console.log(data.slice(47,-2));
  document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
  
});
        
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = '<table><tr>'
  json.table.cols.forEach(colonne => table += '<th>' + colonne.label + '</th>')
  table += '</tr>'
  json.table.rows.forEach(ligne => {
    table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += '<td>' + valeur + '</td>'
      }
    )
    table += '</tr>'
    }
  )
  table += '</table>'
  return table
}
```

## working example on code pen using google sheets api version 3 and 4

https://codepen.io/philanderson888/pen/RwXgZav


