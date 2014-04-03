define(['jquery'], function ($) {
    'use strict';
    var XMLLoader;

    XMLLoader =
    {
        getXML:function( path )
        {
         //   console.log("test");
            $.ajax({
                type: "GET",
                url: path,
                dataType: "xml",
                success: function (xml) {
                    var xmlDoc = $.parseXML(xml),
                        $xml = $(xmlDoc);
                    var raw = $xml.find('entry');

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                   // alert("some error");
                   console.log("error");
                }
            });

        }

    };

    return XMLLoader;

});