import {generateIntervals} from './generateIntervals.js'

var intervals = generateIntervals();

var ring = new Howl({
    src: ['assets/sounds/veil.mp3']
});

// Start ringing
popNWait();

function basicBell(){
    ring.play();
}

function popNWait(bingFcn){
    console.log('Bing!');

    basicBell()
    var waitTime = intervals.pop();
    console.log('I will wait: '+waitTime);
    if (waitTime == undefined){
        return
    }
    setTimeout(popNWait,waitTime*1000);

}


