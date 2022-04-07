# AttackRaytrace

`Name` AttackRaytrace<br>
`Coverage` Reach and Hitbox cheats<br>
`Developers` Richy, DarkAndBlue<br>
`Since` Intave/14<br>

### How it works
Before knowing how far a player is when attacking, you need to know where a player is - for the observer.
This is an incredibly hard task, with Intave only being the second anti-cheat to implement a feasible solution to it.
By abusing protocol-behaviour, Intave is able to pinpoint observer entity locations with little to no deviation.

Now we simply re-perform the initial raytrace to verify the attack/interaction.
While this sounds quite easy, the implementation is challengingly to say the least.

### Accuracy
Using this technique we can detect reach down to the 15th decimal, so mathematically any reach can be detected.
Due to certain inconsistencies, we achieve a peak accuracy of 3.001 blocks, but you should be fine with that.

### Alternatives
To our current knowledge, no better alternative approach mitigating reach/hitbox cheats exists.<br>

### Issues
[redacted until Jan. 2026]