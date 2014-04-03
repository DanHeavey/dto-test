requirejs.config({
    //By default load any module IDs from js/lib
  //  baseUrl: 'scripts',
    paths: {

        //"components": "/bower_components",
        "jquery": "bower_components/jquery/dist/jquery"
    }
});

require(["dto/EntryDTO","loader/Loader", "factory/EntryFactory"], function(EntryDTO, Loader, EntryFactory) {
//    var test = new EntryDTO();
//    console.log(test);
//    console.log(test.toString());
    function dataReady( json )
    {
//        console.log( json );
        var dto = EntryFactory.getEntryDTO(json);
        console.log(dto);
    }
    Loader.getXML('data/entry.xml', dataReady );
});