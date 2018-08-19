var codes = {
    'Poland': 48,
    'Germany': 49,
};

exports.findPrefixCode = function(country){
    if(country in codes){
        return codes[country];
    }
    return 'Unknown value';
} //findPrefixCode