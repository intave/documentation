# Trustfactor

Most of the time, it is not a very good idea to correct errors within Intave with changes in configuration.
The configuration file just outsourced critical decisions, exposing extremely complicated thresholds to a lot of very inexperienced users. 
And it's not an issue to be inexperienced, it's the issue that a configuration basically shouldn't leave room for mistakes of such a big magnitude. 
So, we decided to remove the concept of a cancel_vl (or later "prevention-activation") for good.
With Intave 14.0.0, we would like to introduce a suitable and adaptive alternative, easy to understand and to work with, simplifying the entire concept to a trust factor.

A trust factor is either<br>
:white_large_square: White<br>
🟩 Green<br>
🟨 Yellow<br>
🟧 Orange<br>
🟥 Red<br>
🟥 Dark-Red<br>
and every player will have one assigned.

Intave does not set the trust factor by itself, you will have to - either via access (API) or with permissions, otherwise Intave will just assign the 🟧 Orange Trust Factor or a different given default.
Give high-level, long-time-playing and trusted players a 🟨 Yellow Trust Factor.
Only give a 🟩 Green Trust Factor to players you really can trust - e.g. players with the Badlion AntiCheat enabled.
If a player's Ip-Address has been banned recently or is similar to a banned Ip-Address' Subnet, set a 🟥 Red or a 🟥 Dark-Red Trust Factor.
If you have Bedrock players on your server, give them the :white_large_square: White Trust Factor.

So what does this trust factor accomplish?
A trust-factor is a very convenient way to communicate Intave, how much you trust your players, so Intave can decide on a suitable attitude towards individual potential threats. 
Other than that, Intave will use the Trust Factor to spot false positives.
Intave will regularly download the latest internal trust-factor recommendations, always staying up-to-date.

If you have any further questions or need help with the implementation, feel free to ask around in #support