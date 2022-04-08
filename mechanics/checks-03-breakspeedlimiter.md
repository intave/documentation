# BreakSpeedLimiter

`Name` BreakSpeedLimiter<br>
`Coverage` Fastbreak cheats<br>
`Developers` Richy, vento, DarkAndBlue<br>
`Since` Intave 13<br>

### How it works

The Minecraft protocol lets the client control block breaking. While this allows for fluent gameplay even with high
latency, cheat client may try to abuse this: Fast break cheats allow players to break blocks faster than usual.

To solve this issue, Intave calculates how long a legitimate player needs to break specific blocks. The check then
compares the expected duration with the actual duration a player needs. Illegitimate deviations are corrected by
canceling the block break.

### Accuracy

This check is able to detect small deviations and gets more accurate over time the more data it collects.

### Alternatives

To our current knowledge, no better alternative approach mitigating fast-break cheats exists.
Other solutions rarely even try to detect it.

### Issues

The check might false flag legitimate players with rapid latency changes, even with Intave trying to account for such scenarios.
