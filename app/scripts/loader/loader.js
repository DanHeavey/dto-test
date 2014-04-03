define(['jquery'], function ($) {

    var EntryFactory;

    XMLLoader =
    {
        getXML:function( path )
        {
            $({
                type: "GET",
                url: path,
                dataType: "xml",
                success: function (xml) {
                    // Parse the xml file and get data
                    var xmlDoc = $.parseXML(xml);
                    console.log(xmlDoc);
                       // $xml = $(xmlDoc);

                }
            });

        }

    };

});