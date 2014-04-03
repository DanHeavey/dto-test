define(['jquery','xml2json'], function ($, xml2json) {
    'use strict';
    var XMLLoader;

    XMLLoader =
    {
        getXML:function( path, callback )
        {
         //   console.log("test");
            $.ajax({
                type: "GET",
                url: path,
                dataType: "xml",
                success: function (xml) {
                    var data = $.xml2json(xml);
                    callback(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                   // alert("some error");
                   console.log("error [" + XMLHttpRequest + textStatus + errorThrown +"]");
                }
            });

        }

    };

    return XMLLoader;

});