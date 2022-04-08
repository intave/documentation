# Timer

`Name` Timer<br>
`Coverage` Game speed modifications<br>
`Developers` Richy<br>
`Since` Intave 13<br>

## Issue

Changing the client game speed allows cheaters to move faster than usual. The movement itself can be legitimate, just
more movement packets are sent.

## Detection

Intave keeps track of the time passed and movement packets sent. This way, we determine if client ticks are ahead of the
server.

## Accuracy

The Timer check is able to mitigate any advantage of increasing the game speed.

## Alternatives

The false positive rate could be improved by long term timer checks. Those are not able to actually mitigate any
advantage, however, and might be vulnerable to bypasses.

## Issues

Latency fluctuations and client lag can cause false positives. This is due to the limited information the Minecraft
protocol provides us with. 
