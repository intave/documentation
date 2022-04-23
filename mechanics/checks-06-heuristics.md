# Heuristics

`Name` Heuristics<br>
`Coverage` Combat automation cheats<br>
`Developers` DarkAndBlue, ventolotl<br>
`Since` Intave 14<br>

### Issue
Combat automation cheats like "KillAura" automatically attack other players, often leading to advantages.
This type of cheating is usually very obvious to other players, but very hard to detect with code.

### History
Detecting combat automations has always been a difficulty.

The most basic approach even in very early anti-cheats was to spawn a fake player, checking if a players KillAura would attack it.
When cheaters started to exclude bot players, that often even annoyed normal players, their usefulness was questioned.

The next big anticheat move was to check if attackers were actually looking at the attacked.
While this is generally a good idea (see [AttackRaytrace](checks-02-attackraytrace.md)),
its detection did at the time little to mitigate killaura cheats.

Only when anti-cheats started to fall back to analytical approaches, cheaters needed to get creative.
Randomized aim, limited/prioritized targets and smooth rotations were now a requirement.

The last big anti-cheat move was to check whether the player's rotation actually matches their movement.
killauras at the time just told the server where they were looking at, without actually applying their fake rotations.
Our [Physics](checks-09-physics.md) check covers these old killauras.
Clients now need to adjust their movement to their spoofed rotations, often resulting in weird and inconvenient movement.

So here we are, needing to distinguish - from thousands of legitmate players - a few cheaters, that don't attack bots,
emulate a correct attack-raytrace, legitimize their rotations and follow minecraft protocol as good as it gets.


### Detection
Understand that details on this check will remain secret, mostly for the check to remain effective in the long run.
Each (30s-60s) scheduled analysis will generate a unique identifier, helpful if you want to report false positives.

### Accuracy
Heuristics is a sophisticated and well-tested detection system for combat related cheats.
It notices, mitigates and removes even privately created combat automations targeted towards Intave, including treats it has never seen before. 
False positives are rare and unlikely.

### Issues
Unfortunately, a full distinction from legitimate behavior is not always possible; not even with a complete game
protocol overhaul. Therefore, albeit difficult, it is and always will be theoretically possible to bypass this check.