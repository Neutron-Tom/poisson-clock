# poisson-clock

## A Stochastic Church Bell
I started thinking about this when I realized that, more often than not, I'll become aware that the church bell is ringing half way through the bells. This means that I can't actually tell what time it is, because I didn't start counting promptly. However, the longer the bells keep ringing, the later is is in the day.

It led me to think about how a church bell might work if you never needed to count the bells, you just got a sense of the time from the duration between the bells.

This clock does this stochastically, as a Poisson process. The likelihood of hearing a chime increases throughout the day, from approximately X beats per minute at the start of the day, to Y beats per minute at the end of the day.

It's exactly like a Geiger counter, with a low source of radiation at the start, and a lot towards the end.

