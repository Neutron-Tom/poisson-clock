
console.log('What the heck!'+Math.random())

intervals = generateIntervals();

intervals.reverse();

function popNWait(){
    console.log('Bing!');
    waitTime = intervals.pop();
    if (waitTime == undefined){
        return
    }
    setTimeout(popNWait,waitTime*1000);

}


function generateIntervals(){
    var T = 10;
    var t = 1;
    var bells = [];
    var lambda;


    while (t < T){
        lambda = getLambda(t,T);
        interval = getInterval(lambda);
        t = t + interval;
        bells.push(interval);
    }

    return bells;
}



function getInterval(lambda){

    // Generate a random number between 0 and 1. Math.Random() may give us 0, but will never give us 1.
    // Can't take the log of zero, so we use 1-Math.Random()
    rnd = 1 - Math.random();

    // Calculate an interval time, as per: http://www.math.wsu.edu/faculty/genz/416/lect/l05-45.pdf
    interval = -1 * Math.log(rnd)/lambda;

    return interval;
}

function getLambda(t,T){
    // Function to calculate the scaling of lambda as time increases
    startingBPM = 60; // Average number of beats per minute at start of day, 2 beats per minute
    finalBPM = 240; // At end of day

    // Lambda is calculated to give an interval in seconds
    lambda = (startingBPM/60) + (finalBPM/60)*(t/T);

    return lambda;
}