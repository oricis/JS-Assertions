# JS Asserts - v.1.3.0

This is a **simple JS unitary test framework** based on the use of
asserts and inspired by XUnit test frameworks that allow us to check
functions over a modern web browser.


The results are displayed as this

![js ](https://user-images.githubusercontent.com/7187599/73694188-df826880-46d7-11ea-9f80-b216c051681d.png)


or this other (when some error is found)

![salida-js-asserts](https://user-images.githubusercontent.com/7187599/73694190-df826880-46d7-11ea-9787-97e89da522d3.png)


***
## Instructions

The tests are running in the web browser and the results displayed over
the navigator terminal. Then, the unitary tests are written in a simple HTML
document follow the structure of the example files hosted in 'src/html/'
and linked from the 'index.html'.

To run the written tests, open the HTML file with the navigator and show
the "Console" of the "developer tools".

 * Available asserts:

    - assertArray()       // bool
    - assertArrayEquals() // bool
    - assertArraySize()   // bool
    - assertEmpty()       // bool
    - assertEquals()      // bool
    - assertFalse()       // bool
    - assertNull()        // bool
    - assertNumber()      // bool
    - assertSoftEquals()  // bool
    - assertTrue()        // bool


 * Available functions to check types:

    - checkArray()  | isArray()  // bool
    - checkNull()   | isNull()   // bool
    - checkNumber() | isNumber() // bool
    - checkObject() | isObject() // bool
    - checkString() | isString() // bool

All the functions have a boolean return type and can be used independently.


The main framework, build-in, functions, from *'src/js/framework.js'*, are:

    - runAndShowTestResults() // void
    - showTestResult()        // void
    - showTestResults()       // void

### Use of "runAndShowTestResults()"
    This function receives three arguments:

    1. The function to check.
    2. An array with the data for the tests.
    3. A number of the expected positive results.

    This function allow us to test functions that receive one argument
    with boolean outputs.

    Internally use the *showTestResults* function to display the test results.

### Use of "showTestResult()"
    This function needs two params: the total number of tests and the
    passed number of tests to show a trace "green" or "red" depending
    of the coincidence.

### Use of "showTestResults()"
    This function needs four arguments and can receive a fifth (optional).
    These are:

    1. The name of the function to check.
    2. The number of tests will run.
    3. The number of the positive results.
    4. A number with the expected positive results.
    5. A string with error information to be printed.

    This function helps us to show test results and test functions
    that receive one or more arguments with boolean outputs
    (although we can use it together with assert functions to test
    other output types functions).

***
## About

This development started at February of 2020 by ** Moisés Alcocer**.

To known more email me: contacto@ironwoods.es or visit my website:
https://www.ironwoods.es

***
## License notice

**MIT License**

Copyright (c) 2020 Moisés Alcocer.

***
***
***
