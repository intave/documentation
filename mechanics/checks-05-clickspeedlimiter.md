# ClickSpeedLimiter

`Name` ClickSpeedLimiter<br>
`Coverage` High click speed<br>
`Developers` DarkAndBlue<br>
`Since` Intave 13<br>

### Issue

To gain an advantage in 1.8 combat, players try to click as fast as possible. Some players may try to abuse this and
use autoclickers or clicking techniques forbidden on your server.

### Detection

This check enforces click speed limits set by your server. For that, Intave accurately counts how many times per second
a player clicks.

### Accuracy

We take network lag into account wherever we can to make the CPS measurement as accurate as possible.

### Issues

On 1.9+ clients, you may encounter accuracy issues.
