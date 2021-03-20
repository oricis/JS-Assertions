/**
 * MIT License - Copyright (c) 2020 Moisés Alcocer
 *
 * contacto@ironwoods.es
 * https://www.ironwoods.es
 */

function checkArray(data)
{
    return (data !== null
        && typeof (data) === 'object'
        && Array.isArray(data));
}


function checkNull(data)
{
    return (typeof data !== 'undefined' &&
        (typeof data !== 'object' || !data));
}

function checkNumber(data)
{
    return (typeof (data) === 'number');
}

function checkObject(data)
{
    return (data !== null
        && typeof (data) === 'object'
        && ! Array.isArray(data));
}

function checkString(data) {
    return (data !== null
        && typeof (data) === 'string');
}
