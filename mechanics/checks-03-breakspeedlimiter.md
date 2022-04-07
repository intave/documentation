# BreakSpeedLimiter

`Name` BreakSpeedLimiter<br>
`Coverage` FastBreak cheats<br>
`Developers` Richy, vento, DarkAndBlue<br>
`Since` Intave/14<br>

### How it works
Intave recalculates how long a player needs to break a block, and compares the duration with the actual duration

### Accuracy
This check detects deviations small deviations starting from 100ms, and lower deviations when repeatedly done

### Alternatives
To our current knowledge, no better alternative approach mitigating fast-break cheats exists.<br>
The issue originates from a protocol decision from Mojang to have block-breaking clientside,
which is - considering the bad internet of many client - reasonable.

### Issues
None known