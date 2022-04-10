# settings.yml

In the `settings.yml` file you can change Intave's behavior.

## version

`Description:` Configuration version used internally. Do not change this value.<br>
`Type:` String<br>
`Default:` "14.0.0"<br>

## state

`Description:` Internally used value. Do not change this.<br>
`Type:` Integer<br>
`Default:` 0<br>

## check
### physics

Settings for the [Physics](checks-09-physics.md) check.

#### high-tolerance

`Description:` Enables high tolerance mode for the check. Use this if many players on your server
have a bad internet connection.<br>
`Type:` Boolean<br>
`Default:` false<br>

#### mitigation

`Description:` Determines how aggressive Intave's setbacks are.<br>
`Type:` Enum (values: AGGRESSIVE, CAREFUL, LENIENT, SILENT)<br>
`Default:` CAREFUL<br>

#### reset-item-usage

`Description:` Enables Intave to reset item usage (for examples eating) when Intave detects
anomalies.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### close-inventory-on-detection

`Description:` Enables Intave to close the player inventory when Intave setbacks the player.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### thresholds

### timer

Settings for the [Timer](checks-12-timer.md) check.

#### high-tolerance

`Description:` Enables high tolerance mode for the check. Use this if many players on your server
have a bad internet connection.<br>
`Type:` Boolean<br>
`Default:` false<br>

#### thresholds

### heuristics

Settings for the [Heuristics](checks-06-heuristics.md) check.

#### enabled

`Description:` Enables the [Heuristics](checks-06-heuristics.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### combat-sampling

`Description:` Grants Intave the permission to record combat data and upload it to our servers.<br>
`Type:` Boolean<br>
`Default:` false<br>

#### disable-reducing

`Description:` Fixes an 1.8 bug that causes players to receive less knockback when spam clicking
entities. While this greatly reduces the effect of autoclickers, it heavily changes 1.8 PVP.<br>
`Type:` Boolean<br>
`Default:` false<br>

#### confidence-thresholds

### attackraytrace

Settings for the [AttackRaytrace](checks-02-attackraytrace.md) check.

#### enabled

`Description:` Enables the [AttackRaytrace](checks-02-attackraytrace.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### applicable-thresholds
##### reach

##### hitbox

### interactionraytrace

Settings for the [InteractionRaytrace](checks-07-interactionraytrace.md) check.

#### enabled

`Description:` Enables the [InteractionRaytrace](checks-07-interactionraytrace.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### thresholds

### clickpatterns

Settings for the [ClickPatterns](checks-04-clickpatterns.md) check.

#### enabled

`Description:` Enables the [ClickPatterns](checks-04-clickpatterns.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### thresholds

### clickspeedlimiter

Settings for the [ClickSpeedLimiter](checks-05-clickspeedlimiter.md) check.

#### enabled

`Description:` Enables the [ClickSpeedLimiter](checks-05-clickspeedlimiter.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### max-cps

`Description:` Sets the maximum amount of clicks per second a player may use.<br>
`Type:` Integer<br>
`Default:` 20<br>

#### thresholds

### breakspeedlimiter

Settings for the [BreakSpeedLimiter](checks-03-breakspeedlimiter.md) check.

#### enabled

`Description:` Enables the [BreakSpeedLimiter](checks-03-breakspeedlimiter.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### thresholds

### protocolscanner

Settings for the [ProtocolScanner](checks-11-protocolscanner.md) check.

#### enabled

`Description:` Enables the [ProtocolScanner](checks-11-protocolscanner.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### invokant

`Description:` *Currently unused.*<br>
`Type:` Boolean<br>
`Default:` false<br>

#### check_sent_slot_twice_vl

`Description:` Allows you to modify the violation level of when the client sends a slot twice.
If you experience false positives, lower this number or set it to 0.<br>
`Type:` Intave<br>
`Default:` 100<br>

#### thresholds

### placementanalysis

Settings for the [PlacementAnalysis](checks-10-placementanalysis.md) check.

#### enabled

`Description:` Enables the [PlacementAnalysis](checks-10-placementanalysis.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### check_timings

`Description:` Enables time based scaffold checks. Please test this setting before enabling it on
production as some servers may experience false positives with it.<br>
`Type:` Boolean<br>
`Default:` false<br>

#### thresholds

### inventoryclickanalysis

Settings for the [InventoryClickAnalysis](checks-08-inventoryclickanalysis.md) check.

#### enabled

`Description:` Enables the [InventoryClickAnalysis](checks-08-inventoryclickanalysis.md) check.<br>
`Type:` Boolean<br>
`Default:` true<br>

#### high-tolerance

`Description:` Enables high tolerance mode for the check. Use this if many players on your server
have a bad internet connection.<br>
`Type:` Boolean<br>
`Default:` false<br>

#### thresholds

## blacklist
### apply

`Description:` Enables Intave's internal blacklist of known cheaters and players dangerous to your
server and Intave.<br>
`Type:` Boolean<br>
`Default:` true<br>

## proxy
### enable

`Description:` Enables Intave's proxy support. Only enable this option if you are using the
[Proxy Support](/guides/i03-proxy.md) plugin.<br>
`Type:` Boolean<br>
`Default:` false<br>

## clientwarning
### enable

`Description:` Warning system for bugged legit clients.<br>
`Type:` Boolean<br>
`Default:` true<br>

## filter
### health

`Description:` If enabled, Intave will not send health data of other entities to the client. This
doesn't affect legitimate players but may impact (cheat) clients with damage indicators.<br>
`Type:` Boolean<br>
`Default:` true<br>

### equipmentdata

`Description:` If enabled, Intave will not send equipment data of other entities to the client. This
doesn't affect legitimate players but may impacts cheat clients.<br>
`Type:` Boolean<br>
`Default:` true<br>

### chat-insults

`Description:` _Currently unused._<br>
`Type:` Boolean<br>
`Default:` true<br>

### chat-spam

`Description:` _Currently unused._<br>
`Type:` Boolean<br>
`Default:` true<br>

## command
### hide

`Description:` If activated, hides Intave's commands from normal players. Messages with the regular
Intave command are replaced with a command that does not exist. This way, your custom error messages
will apply.<br>
`Type:` Boolean<br>
`Default:` true<br>

## rejoin

Configuration for Intave's behavior when a player that has recently been kicked rejoins.

### delay

`Description:` How many ticks (1 tick = 50ms) a recently kicked player must wait until they can
rejoin.<br>
`Type:` Integer<br>
`Default:` 3600<br>

### refresh

`Description:` Whether Intave should reset the delay timer if a player tries to rejoin before the
delay has expired.<br>
`Type:` Boolean<br>
`Default:` true<br>

### message

`Description:` What kick message Intave should use in this scenario.<br>
`Type:` String<br>
`Default:` "&cYou were recently removed, please wait before connecting again"<br>

## logging
### console-log

`Description:` Whether Intave should log verbose messages to the console.<br>
`Type:` Boolean<br>
`Default:` false<br>

### file-log

`Description:` Whether Intave should log verbose messages to the file system.<br>
`Type:` Boolean<br>
`Default:` true<br>

## layout
### verbose

`Description:` The verbose message format. Please note you can use
[placeholders](configuration-04-placeholders.md)<br>
`Type:` String<br>
`Default:` "{prefix} &c{player}&7/{trust-color}&7 {message} {details} (+{vladded} -> {vl})"<br>

### notify

`Description:` The notify message format. Please note you can use
[placeholders](configuration-04-placeholders.md)<br>
`Type:` String<br>
`Default:` "{prefix} &c&lNotify&8: &7{text}"<br>

### prefix

`Description:` Value of the `{prefix}` placeholder.
[placeholders](configuration-04-placeholders.md)<br>
`Type:` String<br>
`Default:` "&8[&c&lIntave&8]&7 "<br>
