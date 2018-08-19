exports.stringCheckerv2 = function(string){
    if(!(typeof string === "string")){
        // throw new Error('Valid string is required');
        return false;
    }

    return string.length;
};