# Settings Placeholders
## Intave

* `{prefix}` &8[&c&lIntave&8]&7 by default

## Player

* `{player}` or `{playername}`
* `{uuid}`
* `{ip}` or `{address}`
* `{trust}` the trustfactor capitalized and coloured, like &aGREEN
* `{trust-color}` the trustfactor color
* `{latency}`
* `{jitter}` (latency jitter)
* `{version}`
* `{world}`

## Server

* `{tps}`

## Violation

### Global

* `{check}`, `{checkdetected}` or `{checkname}`
* `{message}`
* `{details}`
* `{details-raw}`
* `{vlbefore}`
* `{vl}`
* `{vladded}`

### Check-specific

#### AttackRaytrace
* `{reach}` -1 when it is a hitbox flag

#### Heuristics
* `{confidence}` full confidence, for example "CERTAIN (!!)"
* `{confidence-name}` confidence name, for example "CERTAIN"
* `{confidence-symbol}` confidence symbol, for example "!!"
* `{identifier}` (use this when reporting false positives)
