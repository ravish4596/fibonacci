const { fibonacci } = require('./fibonacci');

describe('Fibonacci Series', () => {
	beforeEach(function () {
		this.timeout(1000);
	});
	
	it('should print fibonacci series upto 4', (done) => {
		expect(fibonnaci(4)).toBe(24);
	});
})