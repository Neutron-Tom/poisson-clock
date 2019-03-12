
export function generateIntervals(){
    var T = 5*60;
    var t = 1;
    var intervals = [];
    var lambda;
    var interval;

    while (t < T){
        lambda = getLambda(t,T);
        interval = getInterval(lambda);
        t = t + interval;
        intervals.push(interval);
    }

    // Reverse order, so we can pop off the first interval
    intervals.reverse();
    return intervals;
}



export function getInterval(lambda){

    // Generate a random number between 0 and 1. Math.Random() may give us 0, but will never give us 1.
    // Can't take the log of zero, so we use 1-Math.Random()
    var rnd = 1 - Math.random();

    // Calculate a poisson distributed interval time, as per: http://www.math.wsu.edu/faculty/genz/416/lect/l05-45.pdf
    var interval = -1 * Math.log(rnd)/lambda;

    return interval;
}

export function getLambda(t,T){
    // Function to calculate the scaling of lambda as time increases
    var startingBPM = 2; // Average number of beats per minute at start of day, 2 beats per minute
    var finalBPM = 120; // At end of day

    // Lambda is calculated to give an interval in seconds
    var lambda = (startingBPM/60) + (finalBPM/60)*(t/T);

    return lambda;
}
