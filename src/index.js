/**
 * parse string to get property from object
 * @param {String} path 
 * @param {Object} obj
 */
function parse(path, obj){
	return obj[path];
}

module.exports = parse;
