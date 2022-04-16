# BreakSpeedLimiter

`Name` BreakSpeedLimiter<br>
`Coverage` Fastbreak cheats<br>
`Developers` Jpx3, ventolotl, DarkAndBlue<br>
`Since` Intave 13<br>

### Issue 
The minecraft protocol gives clients full control over block breaking, including their break-duration. While this allows for fluent gameplay even with high
latency, cheats can abuse this to break blocks faster than normally possible.

### How it works
To solve this issue, Intave calculates how long a legitimate player needs to mine specific blocks.
Illegitimate deviations are mitigated by denying the block-break.

### Accuracy
This check is able to detect small deviations and gets more accurate the more data it collects.

### History
This approach remains unchanged for the last eight years.

### Alternatives
To our current knowledge, no better alternative approach mitigating fastbreak cheats exists.
Because this cheat is rarely used and considered "unsexy", not many antichats detect it.

### Issues
The check might false flag legitimate players with rapid latency changes, even with Intave trying to account for such scenarios.
