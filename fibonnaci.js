function fibonacci(n) {
    /*
		@parameters:
		prev: preceding number
		curr: current number
		sum: sum of two preceding number
		output: contains fibonacci series
	*/
	let prev = 0, curr = 1, sum, output = [prev, curr];
	
	// Loop to get n series
    for (i = 2; i < n; i++) {
        sum = prev + curr;
        prev = curr;
        curr = sum;
        output.push(sum);
    }
    return output;
}
console.log(fibonacci(8));

module.exports = { fibonacci };