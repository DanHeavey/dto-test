requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {

        "components": "../bower_components",
        "jquery": "../../bower_components/jquery/dist/jquery"
    }
});

require(["dto/EntryDTO","loader/Loader"], function(EntryDTO, Loader) {
    var test = new EntryDTO();
    console.log(test);
    console.log(test.toString());
    var data = Loader.getXML('http://localhost:63342/dto-test/app/data/entry.xml');
    console.log(data);

});