# Thresholds

Intave allows you to customize actions executed at certain violation levels. A threshold
configuration in the [settings.yml](configuration-02-settings.md) may look like this:

```
thresholds:
  50: "tell {player} Stop cheating or I will ban you!"
  69: "tell {player} nice"
  100:
    - "tell {player} I told you to stop cheating! Now deal with the consequences."
    - "ban {player} Intave is always watching.
```

In this example, we defined custom violation level thresholds (50, 69 and 100). Once a player has
a violation level meeting a certain threshold, Intave executes the given command(s).

`{player}` is a variable which Intave will automatically replace with the detected player's name.
Please read the [placeholder documentation](configuration-04-placeholders.md) for information on
which variables Intave provides you with.

## Confidence Threshold

The [Heuristics configuration](configuration-02-settings.md#heuristics) introduces a variation of
the standard thresholds system: You can configure thresholds for each confidence ("!!", "!", "?!").
Apart from that, everything from the normal threshold system applies.

Here's an example:

```
confidence-thresholds:
  "!!":
    25: "ban {player} You have been banned by Intave (Automatic Cheat Detection)."

  "!":
    25: "ban {player} You have been banned by Intave (Automatic Cheat Detection)."

  "?!":
    25: "tell {player} INTAVE IS ALWAYS WATCHING. 42 players have been banned in the last 5 minutes."
    50: "ban {player} You have been banned by Intave (Automatic Cheat Detection)."
```
