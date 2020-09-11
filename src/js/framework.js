/**
 * MIT License - Copyright (c) 2020 Moisés Alcocer
 *
 * contacto@ironwoods.es
 * https://www.ironwoods.es
 */

// Aux.
function getStrFrom(value)
{
    switch (value) {
        case undefined: return 'undefined';
        case null:      return 'null';
        case '':        return '""'

        default: return value.toString();
    }
}

/**
 * Runs the tests and show the results
 *
 * @param  function testedFunc
 * @param  array    data
 * @param  number   expectedGreenResultsNumber
 */
function runAndShowTestResults(
    testedFunc,
    data,
    expectedGreenResultsNumber
)
{
    const funcName = testedFunc.name;
    const resultsNumber = data.length;
    let redOutputs = '';

    let greenResultsNumber = 0;
    let testCounter = 0;
    for (var i = 0; i < resultsNumber; i++) {
        testCounter++;

        const testData = data[i];
        const result = testedFunc(testData);
        if (result) {
            greenResultsNumber++;

        } else {
            redOutputs = 'Testing "' + funcName + '()" - value: ';

            if (result === undefined) {

                redOutputs += 'Test number: ' + testCounter
                + ' return an "undefined"\n';

            } else {
                redOutputs += getStrFrom(testData)+'\n'
                    +'Test number: '+testCounter+'\n';
            }
        }
    }

    showTestResults(
        funcName,
        resultsNumber,
        greenResultsNumber,
        expectedGreenResultsNumber,
        redOutputs
    );
}

/**
 * Show test results
 *
 * @param  string   testName
 * @param  number   resultsNumber
 * @param  number   greenResultsNumber
 * @param  number   expectedGreenResultsNumber
 */
function showTestResults(
    testName,
    resultsNumber,
    greenResultsNumber,
    expectedGreenResultsNumber,
    redOutputs
)
{
    console.log('\n================================================');
    console.log('Checked "' + testName + '()" ---> greenResultsNumber: ' + greenResultsNumber);
    console.log('Total tests: '+resultsNumber);

    if (greenResultsNumber === expectedGreenResultsNumber) {
        console.log('GREEN: 100%');
    } else {
        const redPercentage = (greenResultsNumber === 0)
            ? 100
            : Math.round(
                greenResultsNumber * 100 / resultsNumber, 2);
        const greenPercentage = 100 - redPercentage;

        console.error('RED: ' + redPercentage + '%');
        if (redOutputs) {
            console.error(redOutputs);
        }
        console.log('------------------------------------------------');
        console.log('GREEN: ' + greenPercentage + '%');
    }

    console.log('================================================\n\n');
}
