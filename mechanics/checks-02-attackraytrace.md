# AttackRaytrace

`Name` AttackRaytrace<br>
`Coverage` Reach and hitbox cheats<br>
`Developers` Richy, DarkAndBlue<br>
`Since` Intave 14<br>

### Issue
Reach cheats allow players to attack other entities further away, for example from 3.5 blocks.<br>
The vanilla client-side limit for entity interactions in survival mode is 3.0 blocks.

### Detection
Before we can check from how far an entity is attacked, we need to know its position for the observer.
While this sounds quite easy indeed, it couldn't be more complicated.
With the correct observer entity position, we can re-perform the client's raytrace to verify the attack.
Commonly used mods like Optifine make matters with their "bugfixes" only worse.

### Accuracy
Any reach down to the 15th decimal is theoretically detectable.
Due to certain inconsistencies, we achieve a peak accuracy of 3.001 blocks.

### History
[write more]

### Issues
[redacted until common knowledge]
