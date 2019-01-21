var EventListener = (function(){
    let instance;

    function getInstance(){
        if(!instance){
            instance = _init();
        }
        return instance;
    } 
    
    function _init(){

        let list = {};


        function addEvent(type, listener){
            if(!list[type]){
                list[type] = [];
            }
            if(list[type].indexOf(listener) === -1){
                list[type].push(listener);
            }
            console.log(list)

        }

        function removeEvent(type, listener){
            var l = list[type];
            if(l){
                var index = l.indexOf(listener);
                if(index>-1){
                    l.splice(index, 1);
                }
            }
        }

        function dispatchEvent(e){
            console.log(list)
            var aList = list[e.type];

            if(aList){
                if(!e.target){
                    e.target = this;
                }
                for(var index in aList){
                    aList[index](e);
                }
            }
        }

        return {
            addEvent,
            removeEvent,
            dispatchEvent
        }
    }

    return {
        getInstance: getInstance,
    }

})();


export default EventListener;
