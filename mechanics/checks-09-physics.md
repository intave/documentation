# Physics

`Name` Physics<br>
`Coverage` Movement related cheats<br>
`Developers` Richy, DarkAndBlue, vento<br>
`Since` Intave 14<br>

### How it works
By comparing player movement with its own simulations of game code, the physics check can spot almost all movement
cheats. Being the most complicated check in Intave, it spans over thousands of lines of code in more than a hundred
class files.

The simulations account for cross-version bounding-boxes, elytra gliding, vehicles, velocity and fireworks, slime- & bed
physics, fluids, 1.13+ swimming and water elevators, scaffolding blocks, and much more.

A neat setback system will correct any cheats detected, mitigating any possible advantage.

### Accuracy

The check is able to detect any deviation in movement, meaning any movement-related cheat should be detected.

### Alternatives

Some anti-cheats use constraint-based checks, for example: `Player is moving upwards and is in air for longer than X
ticks -> cheating detected`; other anti-cheats (including older version of Intave) hardcode a basic conversion formula
for motion on the Y-Axis and use limiting checks for motion on the XZ-Axes, for example: `Player is jumping (defined by
vertical motion), so he can't move faster than 0.6 blocks horizontally`.

Both variations have major flaws, including bypasses of unbeliever impact on normal players.<br>
Manually blacklisting possible movement scenarios (often in checks called Fly A-Z, Speed A-Z, etc.) seems now tediously
pointless to us.<br>
We avoid figuring out if a movement is legit or not, simply by computing the legit solution.

### Issues

Although the physics check is Intave's most accurate, the sheer amount of data processed can sometimes cause
problems.<br>
Given a hundred million movements, a false positive rate of just 0.01%^[This average was measured over a period of
several weeks on a subserver on GommeHD.net with 350 concurrent players at peak times.] (five immediately consecutive
false positives per hour per player) would still result in ten thousand false positives.

To combat this issue, our mitigation/setback system operates as smoothly as possible, for the player himself and others.
In fact, other players can't even tell the difference between a player moving normally and him/her trying to fly.<br>
To ensure a setback/mitigation feels smooth to the player too, we apply the expected motion with velocity, additional to
a rotation-less teleport.

As of April 2022, not all movement-features of 1.16+ are supported, yet. You may experience some issues with newer
versions.

test
