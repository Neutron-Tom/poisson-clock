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
})