# Proxy

Intave is a Spigot plugin, but likely you'd like kicks and bans to be executed on your whole network. Use our Proxy
Support plugin to execute commands on your Bungeecord instance remotely from spigot.

## Setup

1. Download the latest Proxy Support `.jar` file from (GitHub)[https://github.com/intave/proxy/releases].
2. Deploy the plugin to your Bungeecord.
3. **(Optional)** If you want this proxy plugin to be your ban system, you can setup a sql connection in its
   configuration. Otherwise, this plugin will simply execute commands issued by Intave on the Bungeecord, allowing you
   to use a custom ban system.
4. Enable `ipc_proxy_support` in Intave's configuration and apply your changes.

## Usage
### Execute a Kick through Intave

Kick a given player for a provided reason:

`/intave proxy proxkick [player] [reason...]`

*Example:* `execute->intave proxy proxkick {player} You were caught cheating`

### Execute a Tempban through Intave

Temporarily ban a given player for a provided reason:

`/intave proxy proxtempban [player] [reason...]`

*Example:* `execute->intave proxy proxtempban {player} You were caught cheating`

### Execute a Ban through Intave

Permanently ban the given player for a provided reason:

`/intave proxy proxban [player] [reason...]`

*Example:* `execute->intave proxy proxban {player} You were caught cheating`

### Execute a Generic Command

Execute a command on the proxy through a player's connection (we use the player's connection to transfer the data to
Bungeecord):

`/intave proxy proxcommand [player] [command...]`

*Example:* `execute->intave proxy proxcommand {player} ban {player} Hacking`
