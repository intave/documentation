# Trustfactor

Intave's trust factor system allows you to configure checks differently for different players. In contrast, the
`mitigation mode` option configures [Physics](guides/check-09-physics.md) for all players.

A trust factor is either<br>
:white_large_square: White (`intave.bypass`): Bypass<br>
🟩 Green (`intave.trust.green`): Very tolerant<br>
🟨 Yellow (`intave.trust.yellow`): Tolerant<br>
🟧 Orange (`intave.trust.orange`): Normal<br>
🟥 Red (`intave.trust.red`): Agressive<br>
🟥 Dark-Red (`intave.trust.darkred`): Very agressive<br>
and every player will have one assigned.

## Usage

Intave does not choose trust factors by itself. You will have to - either with
[intave/access](https://github.com/intave/access) or with good old permissions, otherwise we will just assign the 🟧
Orange Trust Factor or a different given default.

Only set the trust factor through permissions when [intave/access](https://github.com/intave/access) is not an option
for you.
