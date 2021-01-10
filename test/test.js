const { expect } = require('chai');

const parse = require('..');

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

describe('test single level', () => {
	it('expect get `simba-fs`', () => {
		expect(parse('name', testData)).to.be.equal('simba-fs');
	});
});

describe('test two levels', () => {
	it('expect get `simba-fs`', () =>{
		expect(parse('contactMe.github')).to.be.equal('simna-fs');
	})
})

describe('test three levels', () => {
	it('expect get `https://github.com/simba-fs/aurl`', () =>{
		expect(parse('project.aurl.code')).to.be.equal('https://github.com/simba-fs/aurl');
	})
})
