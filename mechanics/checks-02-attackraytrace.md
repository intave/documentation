# AttackRaytrace

* `Name` AttackRaytrace<br>
* `Coverage` Reach and hitbox cheats<br>
* `Developers` Richy, DarkAndBlue<br>
* `Since` Intave 14<br>

## How it works

To know how far a player is hitting, we need to know the exact positions of both the attacker and the target. To avoid
any false positives caused by latency, we need to know the positions from the perspective of the attacker. This is a
challenging task, with Intave being the second anti-cheat to implement a feasible solution to it.

By carefully playing the Minecraft protocol, Intave is able to pinpoint entity locations with little to no deviation.
Now we can re-perform the client's raytrace to verify the attack. While this whole procedure sounds easy on paper, a
correct implementation must solve many challenges. Additionally, commonly used mods like Optifine change certain
relevant aspects of the game.

## Accuracy

Using our techniques we are theoretically able to detect reach down to the 15th decimal. Due to inconsistencies in
Minecraft and Optifine, we achieve a peak accuracy of 3.001 blocks. False positives are very unlikely. This check has
been battle-tested on large server networks and has proven to be stable.

## Alternatives

There are many other approaches to detect reach. All of them fail in certain areas however: Either they fail to account
for latency properly, causing many false positives or allowing bypasses. Or wrong calculations are used to determine
the player's reach. To our current knowledge, no better alternative approach mitigating reach and hitbox cheats exists.

## Issues

[redacted until Jan. 2026]
