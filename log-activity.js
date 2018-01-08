function optional(module) {
    try {
        require(module);
        return true;
    } catch(err) {
        return false;
    }
}

var dev = optional('is-positive');
var prod = optional('is-negative');
var info = '-> ' + process.argv[2] + ' dev:' + dev + ' prod:' + prod + ' ' + process.cwd();

console.log(info);
