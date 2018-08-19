exports.checkValue = function(value){
    if(value > 0 &&  value < 1000){
        return 'ok';
    }

    return 'invalid';

};
