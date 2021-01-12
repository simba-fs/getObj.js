# getObj.js
parse a string and get property from a object by the parsed result.

# Example
```
const getObj = require('getObj');
const testData = {
	name: 'simba-fs',
	contactMe: {
		github: 'simba-fs'
	},
	prject: {
		aurl: {
			code: 'https://github.com/simba-fs/aurl',
			docker: 'https://github.com/simba-fs/aurl-docker-deploy'
		}
	}
};

getObj('name', testObj); 
// expect 'simba-fs'

getObj('contactMe.github', testData)
// expect 'simba-fs'

getObj('project.aurl.code', testData)
// expect 'https://github.com/simba-fs/aurl'

```
