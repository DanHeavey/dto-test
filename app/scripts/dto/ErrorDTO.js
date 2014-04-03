define([], function () {
    'use strict';

    var ErrorDTO = function()
    {
        return {
        XMLHttpRequest:null,
        textStatus:null,
        errorThrown:null,
        toString:function()
        {
            return '[object ErrorDTO]';
        }
        };
    };

    return ErrorDTO;

});