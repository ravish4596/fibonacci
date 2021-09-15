const { fibonacci } = require('./fibonacci');

describe('Fibonacci Series', () => {
	beforeEach(function () {
		this.timeout(1000);
	});
	
	it('should print fibonacci series upto 8', (done) => {
		expect(fibonnaci(8)).toBe([0, 1, 1, 2, 3, 5, 8, 13]);
	});
})
