exports.stringChecker = function(string){
    if(!(typeof string === "string")){
        throw new Error('Valid string is required');
    }

    return string.length;
};