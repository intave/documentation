# AttackRaytrace

`Name` AttackRaytrace<br>
`Coverage` Reach and hitbox cheats<br>
`Developers` Jpx3, DarkAndBlue<br>
`Since` Intave 14<br>

### Issue
Reach cheats allow players to attack others from further away, for example from 3.5 blocks.<br>
The vanilla client-side limit for entity interactions in survival mode is 3.0 blocks.

### Detection
Before checking from how far an entity is attacked, Intave needs to know its current position - for the observer.
Imagine the difference of the server and client position if the observer has a connection delay of 500ms or more.
Now knowing the client-side position, we can re-perform the client's raytrace to verify the attack with incredible accuracy.
<!--Commonly used mods like Optifine make matters with their "bugfixes" and "optimizations" only worse.-->


### Accuracy
Any reach down to the 15th decimal is theoretically detectable.
Due to certain inconsistencies, we achieve a peak accuracy detecting 0.001 blocks of additional reach.

<!--
### History
[redacted until further notice]

### Issues
[redacted until further notice]
-->