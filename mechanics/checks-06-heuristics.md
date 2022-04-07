# Heuristics

`Name` Heuristics<br>
`Coverage` Combat automation cheats<br>
`Developers` Richy, DarkAndBlue, vento<br>
`Since` Intave 14<br>

### How it works

Killaura cheats allow cheaters to automatically hit players around them.

Intave analyzes player combat over longer periods of time (30-60 seconds). The check then decides how likely a player is
cheating. Please understand that the internal details of this check will remain a permanent secret. This is to make it
very hard to bypass and have it remain effective in the long run.

Each detection will generate a unique identifier, helpful if you want to report false positives.

### Accuracy

Heuristics is a sophisticated and well-tested detection system. It notices, mitigates and removes even privately created
combat cheats targeted towards Intave. False positives are very unlikely.

### Alternatives

To our current knowledge, no better alternative approach mitigating fight-automation cheats exists.

### Issues

Unfortunately, a full distinction from legitimate behavior is not always possible; not even with a complete game
protocol overhaul. Therefore, albeit hard, it is and always will be theoretically possible to bypass this check.
