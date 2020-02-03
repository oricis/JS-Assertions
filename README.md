# JS Asserts

This is a **simple JS unitary test framework** based on the use of
asserts and inspired by XUnit test frameworks that allow us to check
functions over a modern web browser.


The results are displayed as this

![js ](https://user-images.githubusercontent.com/7187599/73694188-df826880-46d7-11ea-9f80-b216c051681d.png)


or this other (when some error is found)

![salida-js-asserts](https://user-images.githubusercontent.com/7187599/73694190-df826880-46d7-11ea-9787-97e89da522d3.png)


*This test framework was developed and tested over Chromium,
Versión 79.0.3945.79 (Build oficial), running on Ubuntu 18.04 (64 bits).*

***
## Instructions

The tests are running in the web browser and the results displayed over
the navigator terminal. Then, the unitary tests are written in a simple HTML
document follow the structure of the example files hosted in 'src/html/'
and linked from the 'index.html'.

To run the written tests, open the HTML file with the navigator and show
the "Console" of the "developer tools".

This framework (version 1.0.0) has the asserts:

    - assertArray
    - assertArraySize
    - assertEmpty
    - assertEquals
    - assertFalse
    - assertSoftEquals
    - assertTrue

Other useful functions are:

    - checkArray
    - checkObject

All these listed functions have a return of type boolean and can be used
independenly.


The main framework, build-in, functions, from *'src/js/framework.js'*, are:

    - runAndShowTestResults
    - showTestResults

### Use of "runAndShowTestResults()"
    This function receive three arguments:

    1. The function to check.
    2. An array with the data for the tests.
    3. A number of the expected positive results.

    This function allow us to test functions that receive one argument with boolean outputs.

    Internally use the *showTestResults* function to display the test results.


### Use of "showTestResults()"
    This function need four arguments and can receive a fift (optional). These are:

    1. The name of the function to check.
    2. The number of tests will be runned.
    3. The number of the positive results.
    4. A number with the expected positive results.
    5. A string with error information to be printed.

    This function helps us to show test results and test functions
    that receive one or more arguments with boolean outputs
    (althought we can use it together with assert functions to test
    other output types functions).

***
## About

This development began in february of 2020 by ** Moisés Alcocer**.

To known more email me: contacto@ironwoods.es or visit my website:
https://www.ironwoods.es

***
## License notice

**MIT License**

Copyright (c) 2020 Moisés Alcocer.

***
***
***
