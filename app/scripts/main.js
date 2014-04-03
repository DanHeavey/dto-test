requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        "components": "../bower_components",
        "jquery": "../bower_components/jquery/dist/jquery"
    }
});

require(["dto/EntryDTO","loader/loader"], function(EntryDTO, Loader) {
    var test = new EntryDTO();
    console.log(test);
    console.log(test.toString());

    var xmlLoader = new Loader();
    xmlLoader.getXML();
});