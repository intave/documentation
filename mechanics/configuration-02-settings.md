# settings.yml

In the `settings.yml` file you can change Intave's behavior.

## version

* **Description:** Configuration version used internally. Do not change this value.
* **Type:** String
* **Default:** "14.0.0"

## state

* **Description:** Internally used value. Do not change this.
* **Type:** Integer
* **Default:** 0

## check
### physics
#### high-tolerance

* **Description:** Enables Intave's high tolerance mode. Use this if many players on your server
  have a bad internet connection.
* **Type:** Boolean
* **Default:** false

#### mitigation

* **Description:** Determines how aggressive Intave's setbacks are.
* **Type:** Enum (values: AGGRESSIVE, CAREFUL, LENIENT, SILENT)
* **Default:** CAREFUL

#### reset-item-usage

* **Description:** Enables Intave to reset item usage (for examples eating) when Intave detects
  anomalies.
* **Type:** Boolean
* **Default:** true

#### close-inventory-on-detection

* **Description:** Enables Intave to close the player inventory when Intave setbacks the player.
* **Type:** Boolean
* **Default:** true

#### TODO

## blacklist
### apply

* **Description:** Enables Intave's internal blacklist of known cheaters and players dangerous to
  your server and Intave.
* **Type:** Boolean
* **Default:** true

## proxy
### enable

* **Description:** Enables Intave's proxy support. Only enable this option if you are using
  the [Proxy Support](/guides/i03-proxy.md) plugin.
* **Type:** Boolean
* **Default:** false

## clientwarning
### enable

* **Description:** TODO
* **Type:** Boolean
* **Default:** true
