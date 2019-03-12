import {getInterval, getLambda, generateIntervals} from "../assets/lib/generateIntervals.js";



test('Test that getInterval gives a number greater than 0', ()=>{
    expect(getInterval(4)).toBeGreaterThan(0);
});

test('Test that getLambda gives the correct value', ()=>{
    expect(getLambda(1,2)).toBeCloseTo((1.03333),3);
});

test('Test that generateIntervals gives us a non-zero number of intervals', ()=>{
    var intervals = generateIntervals();
    expect(intervals.length).toBeGreaterThan(0);
});

test('Test that generateIntervals creates correct intervals', ()=>{
    // Use an external cdf package to test the cdf which is generated
    const cdf = require('cumulative-distribution-function');

    var lambda = 3;
    var intervals = [];
    var i = 0;

    // Generate 10,000 intervals
    while (i < 1e4){
        intervals.push(getInterval(lambda));
        i += 1;
    }

    // Compute the empirical cdf of the intervals
    var empCDF  = cdf(intervals); // cdf(mydata) returns a **function**, so mycdf is a **function**

    // For a range of interval values, check how different the empirical cdf is from the exact solution
    var checkPoints = [0.1, 0.5, 1, 1.5, 2, 3];
    var difference =[];
    checkPoints.forEach(function(e){
        difference.push(Math.abs(empCDF(e) - (1 - Math.exp(-1*lambda*e))));
    });

    // Check that the supremium of the differences passes a K-S type test
    var max = difference.reduce(function(a, b) {
        return Math.max(a, b);
    });
    expect(max).toBeLessThan(1.224*(0.01)) // Test for 95% confidence


});