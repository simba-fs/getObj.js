/**
 * parse string to get property from object
 * @param {String} path
 * @param {Object} obj
 */
function parse(path, obj){
	if(path[0] === '.'){
		let p = path.split('.')
		p.shift();
		let tmp = obj;

		while(p.length){
			tmp = tmp[p.shift()];
			if(tmp === undefined) return undefined;
		}

		return tmp;
	}else{
		return undefined;
	}
}

module.exports = parse;
