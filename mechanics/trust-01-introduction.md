# Trustfactor

A trust factor can be<br>
<!-- Table please -->
|        Color         |   Name   |     Description     |       Permission        |
|:--------------------:|:--------:|:-------------------:|:-----------------------:|
| :white_large_square: |  White   |   Full tolerance    |     `intave.bypass`     |
|          🟩          |  Green   | Very high tolerance | `intave.trust.green`    |
|          🟨          |  Yellow  |  Higher tolerance   |  `intave.trust.yellow`  |
|          🟧          |  Orange  |  Default tolerance  |  `intave.trust.orange`  |
|          🟥          |   Red    |  Little tolerance   |   `intave.trust.red`    |
|          🟥          | Dark-red |   Zero tolerance    | `intave.trust.darkred`  |
and every player has one assigned.<br>

### How to assign trust factors
Intave does not choose trust factors by itself. You will have to - either with
[intave/access](https://github.com/intave/access) or with good old permissions, otherwise we will just assign the 🟧
Orange Trust Factor or a different given default.

Only set the trust factor through permissions when [intave/access](https://github.com/intave/access) is not an option
for you.