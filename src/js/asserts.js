/**
 * MIT License - Copyright (c) 2020 Moisés Alcocer
 *
 * contacto@ironwoods.es
 * https://www.ironwoods.es
 */

function assertArray(data)
{
    return (checkArray(data));
}

function assertArraySize(data, expectedSize)
{
    return (data && Array.isArray(data)
        && data.length === expectedSize);
}

/**
 * Checks an empty String, Array or Object
 *
 * @param  mixed     data
 * @return boolean
 */
function assertEmpty(data)
{
    if (data !== undefined && data !== null
        && typeof (data) === 'object'
        || typeof (data) === 'string') {
        if (data === ''
            || Array.isArray(data) && data.length === 0
            || Object.entries(data).length === 0) {

            return true;
        }
    }

    return false;
}

function assertEquals(data, expected, strict=false)
{
    return (strict)
        ? (data === expected)
        : assertSoftEquals(data, expected);
}

function assertFalse(data)
{
    return (data === false);
}

function assertNull(data)
{
    return checkNull(data);
}

function assertNumber(data)
{
    return checkNumber(data);
}

/**
 * Compare two data with NO strict checks for "arrays" and "objects":
 * only checks the type and size
 *
 * @param  mixed     data
 * @param  mixed     expected
 * @return boolean
 */
function assertSoftEquals(data, expected)
{
    // Use NO strict comparison for "arrays" -> type & size
    if (checkArray(data) && checkArray(expected)) {
        return (data.length === expected.length);
    }

    // Use NO strict comparison for "objects" -> type & size
    if (checkObject(data) && checkObject(expected)) {
        return (Object.entries(data).length
            === Object.entries(expected).length);
    }

    return (data === expected);
}

function assertTrue(data)
{
    return (data === true);
}
