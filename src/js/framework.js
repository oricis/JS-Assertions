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
    const twoArgsAssertFunctions = [
        'assertArraySize',
        'assertEquals',
        'assertSoftEquals',
    ];
    const funcName = testedFunc.name;
    const resultsNumber = data.length;
    let redOutputs = '';

    let greenResultsNumber = 0;
    let testCounter = 0;
    for (var i = 0; i < resultsNumber; i++) {
        testCounter++;

        const testData = data[i];
        const result = (twoArgsAssertFunctions.includes(funcName))
            ? testedFunc(testData, data[++i])
            : testedFunc(testData);
        if (result) {
            greenResultsNumber++;

        } else {
            redOutputs = 'Testing "' + funcName + '()" - value: ';

            if (result === undefined) {

                redOutputs += 'Test number: '
                    + testCounter
                    + ' return an "undefined"\n';

            } else {
                redOutputs += getStrFrom(testData) + '\n'
                    + 'Test number: ' + testCounter + '\n';
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
    console.log('Checked "' + testName + '()" ---> greenResultsNumber: '
        + '%c ' + greenResultsNumber, 'color: #2ba029; font-weight: 900');
    console.log('Total tests: ' + resultsNumber);

    if (greenResultsNumber === expectedGreenResultsNumber) {
        console.log('%c GREEN: 100%', 'color: #368700');
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
        console.log('%c GREEN: ' + greenPercentage + '%', 'color: #6f753a');
    }

    console.log('================================================\n\n');
}
