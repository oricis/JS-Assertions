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

function checkObject(data)
{
    return (data !== null
        && typeof (data) === 'object'
        && ! Array.isArray(data));
}

