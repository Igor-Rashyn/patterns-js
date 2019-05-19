const Singelton = (function () {
    let obj;
    function createInstance(){
        const obj = new Object();
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