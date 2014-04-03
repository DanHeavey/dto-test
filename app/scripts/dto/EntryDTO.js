define([], function () {
    'use strict';
    var EntryDTO = function()
    {
        return {
            id:null,
            title:null,
            summary:null,
            updated:null,
            links:null,
            toString:function()
            {
                return '[object EntryDTO]';
            }
        };
    };
    return EntryDTO;
});