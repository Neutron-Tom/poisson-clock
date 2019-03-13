import {generateIntervals} from './generateIntervals.js'

var intervals = generateIntervals();

var ring = new Howl({
    src: ['assets/sounds/veil.mp3']
});

var bells = [
    new Howl({src: ['assets/sounds/bells/bell (1).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (2).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (3).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (4).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (5).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (6).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (7).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (8).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (9).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (10).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (11).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (12).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (13).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (14).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (15).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (16).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (17).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (18).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (19).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (20).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (21).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (22).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (23).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (24).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (25).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (26).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (27).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (28).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (29).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (30).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (31).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (32).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (33).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (34).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (35).mp3']}),
    new Howl({src: ['assets/sounds/bells/bell (36).mp3']}),
    ];

// Start ringing
// popNWait();

function basicBell(){
    var randomBell = bells[Math.floor(Math.random() * bells.length)];
    // ring.play();
    randomBell.play();
}

export function popNWait(bingFcn){
    console.log('Bing!');

    basicBell();
    var waitTime = intervals.pop();
    console.log('I will wait: '+waitTime);
    if (waitTime == undefined){
        return
    }
    setTimeout(popNWait,waitTime*100);

}


