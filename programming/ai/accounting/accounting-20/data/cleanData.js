function cleanData(data) {

    console.log('parsing google sheet data ...');

    console.log('slice 0');
    console.log(data.values.slice(0));

    const rawData = data.values.slice(0);

    const dataRemoveTransfers = data.values.slice(0).filter(row => row[1] !== 'Transfers' && row[1] !== 'Transfer' && row[1] !== 'Initial Balance');

    console.log('data remove transfers:');
    console.log(dataRemoveTransfers);

    const dataRemoveZeros = dataRemoveTransfers.filter(row => row[3] !== '0.00');

    console.log('data remove zeros:');
    console.log(dataRemoveZeros);

    cleansedData = dataRemoveZeros.map(row => {

        const cleanedRow = {
            date: row[0],
            category: row[1],
            payee: row[2],
            amount: parseFloat(row[3]),
            description: row[4]
        }
        return cleanedRow;
    });
}
