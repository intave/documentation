# Recommendations
## What Trust Factor Should I Set?

Give **high-level**, **long-time-playing** and **trusted** players a 🟨 Yellow Trust Factor.<br>
Only give a 🟩 Green Trust Factor to players you **trust blindly** - e.g. your **staff members**, **yourself** and
players with something like the **Badlion (Client) AntiCheat** enabled.<br>
If a player's Ip-Address has been banned recently or is similar to a banned Ip-Address' Subnet, set a 🟥 Red or a 
Dark-Red Trust Factor.<br>
If you have Bedrock players on your server, give them the :white_large_square: White Trust Factor. Minecraft Bedrock
significantly changes the protocol and would get flagged otherwise.

## Indicators for Trust
Any interaction with your server that requires time or money, like player ranks and playtime, is by our means considered
a good indicator for trust. Best if you combine the two factors - e.g. `100h playtime or (50h playtime and rank)`.

A player with a rank-purchase and an overall (non-afk) playtime of over 50 hours can be considered an active,trusted
player.<br>
In theory it's possible that cheaters get ranks and a lot of playtime. Most cheaters don't keep their respective
account for long and just don't bother investing hours into an account, however. When banned or kicked, it would require
them to play another X hours and get another rank, just to abuse minor trust factor advantages.

*Note: Please take chargebacks/refunds into account; a purchase that can arbitrarily be refunded is a questionable trust
indicator.*

## Indicators for Distrust

Any irregular context a player is in (like a recent ban on the players ip) can be used to assign a lower
trustfactor.<br>
Servers not requiring Mojang-authenticated accounts might consider players without proper authentication suspicious.

*Note: In [intave/access](https://github.com/intave/access), you can use
[TrustFactor.unsafer()](https://github.com/intave/access/blob/e212600accd7aa647fe812a586f298ce4cf7d7eb/src/main/java/de/jpx3/intave/access/player/trust/TrustFactor.java#L33)
to lower a trust factor*

## Avoid

* **Showing players their trust factor.** They may try to reverse your trust factor mappings that way.
* **Publishing your trust factor mappings/code.** This will make it easier for cheaters to try abusing the system.
* **Giving new players a high (🟨 Yellow, 🟩 Green, :white_large_square: White) trustfactor.** This will lead to
  many cheaters having a good trust factor.
