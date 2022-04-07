# Physics

`Name` Physics<br>
`Coverage` Movement related cheats<br>
`Developers` Richy, DarkAndBlue, vento<br>
`Since` Intave 14<br>

### How it works

By comparing player movement with own simulations of the client, the physics check can spot almost all movement cheats.
Being the most complicated check in Intave, it spans over thousands of lines of code in more than a hundred class files.

The simulations account for cross-version bounding-box support, elytra gliding, vehicles, velocity and fireworks, slime
and bed physics, fluids, 1.13+ swimming and water elevators, scaffolding blocks, and much more.

A neat setback system will correct any cheats detected, mitigating any possible advantage.

### Accuracy

The check is able to detect almost any deviation in movement, meaning all fly, speed, velocity, "Jesus" cheats or any
other movement-related module should be detected.

### Alternatives

Other anti-cheats (including older version of Intave) mainly use constraint checks for motion on the Y-Axis. An
exemplary fly check might be `player is moving upwards and is in air for longer than X ticks`. Other checks hardcode a
basic conversion formula for the Y-Axis and use limiting checks for motion on the XZ-Axes. As example, a basic speed
check might be `player is jumping, so he can't move faster than 0.6 blocks/tick`.

The drawback of such movement checks (often called Fly A-Z, Speed A-Z, etc.) is that only a set of edge cases is
covered. This leads to frequent bypasses. Our simulation, on the other hand, covers Minecraft's entire physics engine.

### Issues

The Physics check is Intave's most accurate with only 0.01% false detections per received packet. This translates to
roughly one false positive per player each 10 minutes.

The sheer amount of data processed can sometimes cause problems, however: Given ten million movements, a false positive
rate of 0.01% will result in one thousand false positives. Intave tries to lessen the negative experience of false flags
through fluid setbacks.

As of May 2022, some movement features of 1.16+ are still a work in progress. You may experience some issue with these
versions.
