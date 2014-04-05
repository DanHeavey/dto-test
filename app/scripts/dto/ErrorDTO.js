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
            return '[object ErrorDTO] ' + 'XMLHttpRequest:' + this.XMLHttpRequest + ' textStatus:' + this.textStatus + ' errorThrown:' + this.errorThrown;
        }
        };
    };

    return ErrorDTO;

});