# Physics

`Name` Physics<br>
`Coverage` Movement related cheats<br>
`Developers` DarkAndBlue, vento, Richy<br>
`Since` Intave 14<br>

### Issue
Movement-related cheats can allow players to fly, move faster/slower or ignore knockback.
The client just [informs the server](https://wiki.vg/Protocol#Player_Position) about its new position, 
making it difficult to detect cheats without impacting normal players.

### Detection
By comparing player movement with its own simulations of game code, the physics check can spot almost all movement
cheats. Spanning over thousands of lines of code in more than a hundred class files, it is the most complicated check in Intave.

The simulations need to account for cross-version bounding-boxes, elytra gliding, vehicles, velocity and fireworks, slime- & bed physics, fluids, 1.13+ swimming and water elevators, scaffolding blocks, and much more.

A neat setback system will correct any cheats detected, mitigating any possible advantage.
### Accuracy
The check is able to detect any deviation in movement, meaning we can detect any movement-related cheats like Speed, Fly and Anti-Knockback.

### History
Some anti-cheats use constraint-based checks, for example: `Player is moving upwards and is in air for longer than X ticks -> cheating detected`;
other anti-cheats (including older version of Intave) hardcode a basic conversion formula for motion on the Y-Axis and use limiting checks for motion on the XZ-Axes, 
for example: `Player is jumping (defined by vertical motion), so he can't move faster than 0.6 blocks horizontally`.<br>

Both variations have major flaws, including extreme bypasses. <br>
Manually blacklisting possible movement scenarios (often in checks called Fly A-Z, Speed A-Z, etc.) seems now tediously pointless to us.<br>
We can avoid manually figuring out if a movement is legit or not, simply by computing the legit solution ourselves.

### Issues
Although the physics check is Intave's most accurate, the sheer amount of data processed can sometimes cause problems.<br>
Given a hundred million movements, a false positive rate of just 0.01%^[This average was measured over a period of
several weeks on a subserver on GommeHD.net with 350 concurrent players at peak times.] (five immediately consecutive false positives per hour per player) would still result in ten thousand false positives.<br>

To combat the impact of this issue, the mitigation/setback system needs to operate as smoothly as possible, for the player himself and others.
In fact, other players shouldn't be able to differentiate a player moving normally and him/her trying to fly.<br>
To ensure a setback/mitigation feels smooth to the player too, we apply the expected motion as velocity, additional to the rotationless teleport.

As of April 2022, not all movement-features of 1.16+ are supported, yet.
You may experience some issues with newer versions.