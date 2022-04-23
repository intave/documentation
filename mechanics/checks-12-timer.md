# Timer

`Name` Timer<br>
`Coverage` Altered tick speed<br>
`Developers` Jpx3<br>
`Since` Intave 13<br>

## Issue
Changing the game speed allows players to move and operate faster than usual.
While the movement information itself remains unchanged, the client simply sends more packets to the server.
A player could modify their game to process 40 ticks/s instead of the default 20 ticks/s, doubling their movement speed.

## Detection
Intave keeps track of the movement packets sent by the client in a variable amount of time.
If the amount of packets sent exceeds a certain threshold, enhanced by our [trustfactor](/mechanics/trust-01-introduction.md) mechanic, 
Intave will skip movement packets ahead.

## Accuracy
The Timer check is able to mitigate any advantage of increasing the game speed.

## Issues
Latency fluctuations and client lag can cause false positives. This is due to the limited information the Minecraft
protocol provides us with. 
