(function(scope){
    
    var version = 1.00001;
    console.log("my version is: "+version);

    var dQ = function(selector, context){}

    dQ.loadJS = function () {
        console.log("loadJS")
    }

    dQ.version = function () {
        return version;
    }

    if(!window.dQ){
        window.dQ = dQ;
    }else{
        //TBD
    }

}(window));
