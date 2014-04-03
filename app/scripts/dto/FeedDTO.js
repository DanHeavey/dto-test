define([], function () {
    'use strict';
    var FeedDTO = function()
    {
        return{
            id:null,
            title:null,
            updated:null,
            author:{name:null},
            entries:[]

        };
    };
    return EntryDTO;
});