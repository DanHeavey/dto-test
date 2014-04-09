define(['jquery','vendor/xml2json','dto/ErrorDTO'], function ($, xml2json, ErrorDTO) {
    'use strict';
    var XMLLoader;

    XMLLoader =
    {
        getXML:function( path, callback )
        {
            $.ajax({
                type: "GET",
                url: path,
                dataType: "xml",
                success: function (xml) {
                    var data = $.xml2json(xml);
                    callback(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                   var error = new ErrorDTO();
                   error.XMLHttpRequest = XMLHttpRequest;
                   error.textStatus = textStatus;
                   error.errorThrown = errorThrown;
                   callback(error);
                   console.log("error [" + XMLHttpRequest + textStatus + errorThrown +"]");
                }
            });

        }

    };

    return XMLLoader;

});