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
#### high-tolerance

`Description:` Enables Intave's high tolerance mode. Use this if many players on your server
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
#### high-tolerance

#### thresholds

### heuristics
#### enabled

#### combat-sampling

#### disable-reducing

#### confidence-thresholds

### attackraytrace
#### enabled

#### applicable-thresholds
##### reach

##### hitbox

### interactionraytrace
#### enabled

#### thresholds

### clickpatterns
#### enabled

#### thresholds

### clickspeedlimiter
#### enabled

#### max-cps

#### thresholds

### breakspeedlimiter
#### enabled

#### thresholds

### protocolscanner
#### enabled

#### invokant

#### check_sent_slot_twice_vl

#### thresholds

### placementanalysis
#### enabled

#### check_timings

#### thresholds

### inventoryclickanalysis
#### enabled

#### high-tolerance

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

`Description:` Currently unused.<br>
`Type:` Boolean<br>
`Default:` true<br>

### chat-spam

`Description:` Currently unused.<br>
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
