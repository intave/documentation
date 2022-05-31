# settings.yml
In the `settings.yml` file you can change Intave's behavior.
<br>

```yaml
# settings for checks
check:
```
Parent section for all [checks](/mechanics/checks-01-overview.md)<br>

<br>
<br>

<a name="physics"></a>
```yaml
# The physics check
physics:
```

Settings for the [Physics](checks-09-physics.md) check

```yaml
high-tolerance: false
```
`Name:` high-tolerance<br>
`Description:` Enables high tolerance mode for the check. Use this if many players on your server
have a bad internet connection.<br>
`Type:` Boolean<br>
`Default:` false<br>

```yaml
mitigation: CAREFUL
```
`Name:` mitigation<br>
`Description:` Determines how aggressive Intave's setbacks are. [What?](/mechanics/checks-09-physics.md#mitigation-strategy) <br>
`Type:` Select AGGRESSIVE, CAREFUL, LENIENT, or SILENT<br>
`Default:` CAREFUL<br>

```yaml
reset-item-usage: true
```
`Name:` reset-item-usage<br>
`Description:` Enables Intave to reset item usage (for examples eating) when Intave detects
anomalies.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
close-inventory-on-detection: true
```
`Name:` close-inventory-on-detection<br>
`Description:` Enables Intave to close the player inventory when Intave setbacks the player.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
# thresholds for the physics check
thresholds:
  # ...
```
`Name:` thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
100: "intave internals sendnotify &c{player}&7/{trust-color}&7 is moving incorrectly"
400:
  - "intave internals sendnotify &c{player}&7/{trust-color}&7 is moving incorrectly #2"
999:
  - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
  - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
```
<br>
<br>

<a name="timer"></a>
```yaml
# The timer check
timer:
```
Settings for the [Timer](checks-12-timer.md) check.

```yaml
high-tolerance: false
```
`Name:` high-tolerance<br>
`Description:` Enables high tolerance mode for the check. Use this if many players on your server
have a bad internet connection.<br>
`Type:` Boolean<br>
`Default:` false<br>

```yaml
thresholds:
  # ...
```
`Name:` thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is moving too frequently / is lagging"
100: "intave internals sendnotify &c{player}&7/{trust-color}&7 is moving too frequently / is lagging for a long period"
```
<br>
<br>

<a name="heuristics"></a>
```yaml
# The movement check
heuristics:
```

Settings for the [Heuristics](checks-06-heuristics.md) check.

```yaml
enabled: true
```
`Name:` enabled<br>
`Description:` Enables the [Heuristics](checks-06-heuristics.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
combat-sampling: false
```
`Name:` combat-sampling<br>
`Description:` Grants Intave permission to record and upload player combat data. See our [Service Terms](https://policy.intave.de/service) for details on the collected information.<br>
`Type:` Boolean<br>
`Default:` false<br>

```yaml
disable-reducing: false
```
`Name:` disable-reducing<br>
`Description:` Disables attack cooldown. While this option significantly reduces the impact of autoclickers, it in itself has a huge impact on normal gameplay as well.<br>
`Type:` Boolean<br>
`Default:` false<br>

```yaml
confidence-thresholds: 
```
`Name:` confidence-thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Confidence thresholds](configuration-03-thresholds.md#confidence-threshold)<br>
`Default:`<br>
```yaml
"!!":
  25:
    - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for attacking suspiciously (!!) (heuristics)"
    - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
    - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
"!":
  25: "intave internals sendnotify &c{player}&7/{trust-color}&7 is attacking suspiciously (!) (heuristics)"
  50:
    - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for attacking suspiciously (!) (heuristics)"
    - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
    - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
"?!":
  50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is attacking suspiciously (?!) (heuristics)"
  75: "intave internals sendnotify &c{player}&7/{trust-color}&7 is attacking suspiciously #2 (?!) (heuristics)"
```

<br>
<br>

<a name="attackraytrace"></a>
```yaml
# The attackraytrace check
attackraytrace:
```

Settings for the [AttackRaytrace](checks-02-attackraytrace.md) check.

```yaml
enabled: true
```
`Name:` enabled<br>
`Description:` Enables the [AttackRaytrace](checks-02-attackraytrace.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
applicable-thresholds:
```
`Name:` applicable-thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [AttackRaytrace thresholds](configuration-03-thresholds.md#attackraytrace-thresholds)<br>
`Default:`<br>
```yaml
reach:
  50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is attacking suspiciously (reach)"
  100:
    - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for attacking suspiciously (reach)"
    - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
    - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
hitbox:
  50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is attacking suspiciously (hitbox)"
  100: "intave internals sendnotify &c{player}&7/{trust-color}&7 is attacking suspiciously #2 (hitbox)"
```

<br>
<br>

<a name="interactionraytrace"></a>
```yaml
# The interactionraytrace check
interactionraytrace:
```

Settings for the [InteractionRaytrace](checks-07-interactionraytrace.md) check.

```yaml
enabled: true
```
`Name:` enabled<br>
`Description:` Enables the [InteractionRaytrace](checks-07-interactionraytrace.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
thresholds:
```
`Name:` thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is interacting suspiciously"
100: "intave internals sendnotify &c{player}&7/{trust-color}&7 is interacting suspiciously #2"
```

<br>
<br>

<a name="clickpatterns"></a>
```yaml
# The clickpatterns check
clickpatterns:
```

Settings for the [ClickPatterns](checks-04-clickpatterns.md) check.

```yaml
enabled: true
```
`Name:` enabled<br>
`Description:` Enables the [ClickPatterns](checks-04-clickpatterns.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
thresholds:
```
`Name:` thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is clicking statistically anomalously (auto-clicker)"
100:
  - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for clicking statistically anomalously (auto-clicker)"
  - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
  - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
```

<br>
<br>

<a name="clickspeedlimiter"></a>
```yaml
# The clickspeedlimiter check
clickspeedlimiter:
```
Settings for the [ClickSpeedLimiter](checks-05-clickspeedlimiter.md) check.

```yaml
enabled: true
```
`Name:` enabled<br>
`Description:` Enables the [ClickSpeedLimiter](checks-05-clickspeedlimiter.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
max-cps:
```
`Name:` max-cps<br>
`Description:` Sets the maximum amount of clicks per second a player may use.<br>
`Type:` Number<br>
`Default:` 20<br>

```yaml
thresholds:
```
`Name:` thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is attacking too quickly"
100:
  - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for attacking too quickly"
  - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
  - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
```

<br>
<br>

<a name="breakspeedlimiter"></a>
```yaml
# The breakspeedlimiter check
breakspeedlimiter:
```

Settings for the [BreakSpeedLimiter](checks-03-breakspeedlimiter.md) check.

```yaml
enabled: true
```
`Name:` enabled<br>
`Description:` Enables the [BreakSpeedLimiter](checks-03-breakspeedlimiter.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
thresholds:
```
`Name:` thresholds<br>
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```
100: "intave internals sendnotify &c{player}&7/{trust-color}&7 is breaking blocks too quickly"
```

<br>
<br>

<a name="protocolscanner"></a>
```yaml
# The protocolscanner check
protocolscanner:
```

Settings for the [ProtocolScanner](checks-11-protocolscanner.md) check.

```yaml
enabled: true
```

`Description:` Enables the [ProtocolScanner](checks-11-protocolscanner.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
invokant: false
```

`Description:` *Currently unused.*<br>
`Type:` Boolean<br>
`Default:` false<br>

<a name="check-sent-slot-twice-vl"></a>
```yaml
check_sent_slot_twice_vl: 100
```

`Description:` Allows you to modify the violation level of when the client sends a slot twice.
If you experience false positives, lower this number or set it to 0.<br>
`Type:` Intave<br>
`Default:` 100<br>

```yaml
thresholds:
```

`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is sending invalid packets"
100:
  - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for sending invalid packets"
  - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
  - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
```

<br>
<br>

<a name="placementanalysis"></a>
```yaml
# The placementanalysis check
placementanalysis:
```
Settings for the [PlacementAnalysis](checks-10-placementanalysis.md) check.

```yaml
enabled: true
```
`Description:` Enables the [PlacementAnalysis](checks-10-placementanalysis.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
check_timings: false
```
`Description:` Enables time based scaffold checks. Please test this setting before enabling it on
production as some servers may experience false positives with it.<br>
`Type:` Boolean<br>
`Default:` false<br>

```yaml
thresholds:
```
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is placing blocks incorrectly"
100:
  - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for placing blocks incorrectly"
  - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
  - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
```

<br>
<br>

<a name="inventoryclickanalysis"></a>
```yaml
# The inventoryclickanalysis check
inventoryclickanalysis:
```
Settings for the [InventoryClickAnalysis](checks-08-inventoryclickanalysis.md) check.

```yaml
enabled: true
```
`Description:` Enables the [InventoryClickAnalysis](checks-08-inventoryclickanalysis.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
high-tolerance: false
```
`Description:` Enables high tolerance mode for the check. Use this if many players on your server
have a bad internet connection.<br>
`Type:` Boolean<br>
`Default:` false<br>

```yaml
thresholds:
```
`Description:` Actions Intave should execute when detecting a player.<br>
`Type:` [Thresholds](configuration-03-thresholds.md)<br>
`Default:`<br>
```yaml
50: "intave internals sendnotify &c{player}&7/{trust-color}&7 is performing invalid item-operations"
100:
  - "intave internals sendnotify &c{player}&7/{trust-color}&7 has been removed for clicking suspiciously on items"
  - "intave internals collectivekick {player} &cYou have been kicked, as an account with your ip address was removed from the game"
  - "kick {player} &cYou have been removed from the game based on data that was collected by the anti-cheat"
```

<br>
<br>
<br>
<br>

```yaml
# blacklist section
blacklist:
```
Blacklist section.

```yaml
apply: true
```

`Description:` Enables Intaves internal blacklist of known cheaters and players dangerous to your
server and Intave.<br>
`Type:` Boolean<br>
`Default:` true<br>

<br>

<a name="proxy"></a>
```yaml
# proxy section
proxy:
```
Proxy section.

```yaml
enabled: true
```
`Description:` Enables Intave's proxy support. Only enable this option if you are using the
[Proxy Support](/guides/asset-03-proxy.md) plugin.<br>
`Type:` Boolean<br>
`Default:` false<br>

<br>

```yaml
# client-warning section
clientwarning:
```
Client warning section.

```yaml
enabled: true
```
`Description:` Warning system for bugged legit clients.<br>
`Type:` Boolean<br>
`Default:` true<br>


```yaml
# filter section
filter:
```
Filter section.

```yaml
health: true
```
`Description:` If enabled, Intave will not send health data of other entities to the client. This
doesn't affect legitimate players but may impact (cheat) clients with damage indicators.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
equipmentdata: true
```
`Description:` If enabled, Intave will not send equipment data of other entities to the client. This
doesn't affect legitimate players but may impacts cheat clients.<br>
`Type:` Boolean<br>
`Default:` true<br>

<!--
### chat-insults

`Description:` _Currently unused._<br>
`Type:` Boolean<br>
`Default:` true<br>

### chat-spam

`Description:` _Currently unused._<br>
`Type:` Boolean<br>
`Default:` true<br>
-->
```yaml
# commands section
command:
```
Command section.

```yaml
hide: true
```
`Description:` If activated, hides Intaves commands from normal players. Messages with the regular
Intave command are replaced with a command that does not exist. This way, your custom error messages
will apply.<br>
`Type:` True/False<br>
`Default:` true<br>

```yaml
# rejoin section
rejoin:
```
Configuration for Intave's behavior when a player that has recently been kicked rejoins.

```yaml
delay: 3600
```
`Description:` How many ticks (1 tick = 50ms) a recently kicked player must wait until they can
rejoin.<br>
`Type:` Number<br>
`Default:` 3600<br>

```yaml
refresh: true
```
`Description:` Whether Intave should reset the delay timer if a player tries to rejoin before the
delay has expired.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
message: "&cYou were recently removed, please wait before connecting again"
```

`Description:` What kick message Intave should use in this scenario.<br>
`Type:` Text<br>
`Default:` "&cYou were recently removed, please wait before connecting again"<br>

```yaml
# logging section
logging:
```
Logging section.

```yaml
console-log: false
```
`Description:` Whether Intave should log verbose messages to the console.<br>
`Type:` Boolean<br>
`Default:` false<br>

```yaml
file-log: true
```

`Description:` Whether Intave should log verbose messages to the file system.<br>
`Type:` Boolean<br>
`Default:` true<br>

```yaml
# layout section
layout:
```
Layout section.

```yaml
verbose: {prefix} &c{player}&7/{trust-color}&7 {message} {details} (+{vladded} -> {vl})
```

`Description:` The verbose message format. Please note you can use
[placeholders](configuration-04-placeholders.md).<br>
`Type:` Text<br>
`Default:` "{prefix} &c{player}&7/{trust-color}&7 {message} {details} (+{vladded} -> {vl})"<br>

```yaml
notify: {prefix} &c&lNotify&8: &7{text}
```
`Description:` The notify message format. Please note you can use
[placeholders](configuration-04-placeholders.md).<br>
`Type:` Text<br>
`Default:` "{prefix} &c&lNotify&8: &7{text}"<br>

```yaml
prefix: "&8[&c&lIntave&8]&7 "
```

`Description:` Value of the `{prefix}` placeholder.<br>
`Type:` Text<br>
`Default:` "&8[&c&lIntave&8]&7 "<br>
