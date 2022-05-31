# InteractionRaytrace

`Name` InteractionRaytrace<br>
`Coverage` Reach, hitbox, block placement cheats<br>
`Developers` Jpx3<br>
`Since` Intave 14<br>
`Links` [Config](/mechanics/configuration-02-settings.md#interactionraytrace)<br>

### Issue
When placing, interacting with, or breaking blocks, [players can state](https://wiki.vg/Protocol#Player_Digging) arbitrary block-positions and faces.<br>
The server barely verifies this action, allowing players to break blocks through walls, place blocks behind them or place blocks way too far away.

### Detection
Intave re-performs the required raytrace, verifying that all placements, interactions and breaks are within reach and in sight.

### Accuracy
Since this check imitates the vanilla raytrace, it is extremely accurate.

### Issues
No known issues.
