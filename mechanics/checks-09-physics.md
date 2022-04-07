# Physics

`Name` Physics<br>
`Coverage` Movement related cheats<br>
`Developers` Richy, DarkAndBlue, vento<br>
`Since` Intave 14<br>

### How it works
By comparing player movement with own simulations, the physics check can spot almost all movement cheats.
Being the most complicated check in Intave, it spans over thousands of lines of code in more than a hundred class files.<br>
The simulations account for bounding-box cross-version support, elytra gliding, vehicles, velocity and fireworks, slime- & bed physics, fluids, 1.13+ swimming and water elevators, scaffolding blocks, and much more.
A neat setback system will correct any cheats detected, mitigating any possible advantage.
### Accuracy
The check is able to detect any deviation in movement, meaning all Fly modules, Speed modules, Velocity modules, "Jesus" modules or any other movement-related module should be detected.
### Alternatives
Other anti-cheats including older version of Intave mainly use 
hardcode-constraint checks for motion on the Y-Axis, like `player is moving upwards and is in air for longer than X ticks` or just hardcode a basic conversion formula,
and hardcode-limiting checks for motion on the XZ-Axes, like `player is jumping, so he can't move faster than 0.6 blocks/tick`.<br>
Manually whitelisting all possible movement scenarios (often in something like Fly A-Z, Speed A-Z, etc.) seems now tediously pointless to us.
### Issues
Although the physics check is Intave's most accurate, the sheer amount of data processed can sometimes cause problems.<br>
Given a hundred million movements, a false positive rate of just 0.001% will result in one thousand false positives.
As of May 2022, not all movement-features of 1.16+ are supported, too.