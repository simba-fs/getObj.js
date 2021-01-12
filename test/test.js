const { expect } = require('chai');

const parse = require('..');

const testData = {
	name: 'simba-fs',
	contactMe: {
		github: 'simba-fs'
	},
	project: {
		aurl: {
			code: 'https://github.com/simba-fs/aurl',
			docker: 'https://github.com/simba-fs/aurl-docker-deploy'
		}
	}
};

// describe('', () => {
//     it('', () => {
//         expect(parse('', testData)).to.be.equal();
//     });
// });
//
describe('test single level', () => {
	it('expect get `simba-fs`', () => {
		expect(parse('.name', testData)).to.be.equal('simba-fs');
	});
});

describe('test two levels', () => {
	it('expect get `simba-fs`', () =>{
		expect(parse('.contactMe.github', testData)).to.be.equal('simba-fs');
	});
});

describe('test three levels', () => {
	it('expect get `https://github.com/simba-fs/aurl`', () =>{
		expect(parse('.project.aurl.code', testData)).to.be.equal('https://github.com/simba-fs/aurl');
	});
});

describe('test not exist path', () => {
	it('expect get undefined', () => {
		expect(parse('.babababa', testData)).to.be.equal(undefined);
		expect(parse('.babababa.lalalalala', testData)).to.be.equal(undefined);
		expect(parse('.contactMe.facebook', testData)).to.be.equal(undefined);
	});
});

describe('query should start with a .(dot)', () => {
	it('should start with a ,(dot)', () => {
		expect(parse('name', testData)).to.be.equal(undefined);
		expect(parse('contactMe.github', testData)).to.be.equal(undefined);
	});
});

