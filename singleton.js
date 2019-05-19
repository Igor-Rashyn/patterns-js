var Singelton = (function () {
    var obj;
    function createInstance(){
        var obj = new Object();
        return obj
    }

    return {
        getInstance: function(){
            if(!obj){
                obj = createInstance()
            }
            return obj;
        }
    }
})