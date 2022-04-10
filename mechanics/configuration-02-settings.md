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

`Description:` TODO<br>
`Type:` Boolean<br>
`Default:` true<br>

## filter
### health

### equipmentdata

### chat-insults

### chat-spam

## command
### hide

## rejoin
### delay

### refresh

### message

## logging
### console-log

### file-log

## layout
### verbose

### notify

### prefix
