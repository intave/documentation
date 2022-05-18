# Thresholds

Intave allows you to customize actions executed at certain violation levels.<br>

```
thresholds:
  <number>: <command>
  <number>:
    - <command>
    - <command>
```

Here's an example threshold section:
```yaml
thresholds:
  1: "tell {player} You are cheating!"
  2: "tell {player} You are cheating!"
  # ...
  99: "tell {player} You are cheating!"
  100:
    - "tell {player} I told you to stop cheating! Now deal with the consequences."
    - "ban {player} Intave is always watching."
```
Once a player has reached a threshold, the given commands are executed in given order.<br>
The `{player}` placeholder will be replaced with the detected player's name.<br>
You can assign multiple commands to a single threshold with the [YAML list notation](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html).
More placeholders are available [here](configuration-04-placeholders.md).
## Multiple thresholds
A check can have multiple thresholds, too.

```yaml
thresholds:
  a:
    - "tell {player} you are a cheater"
    100:
      - "tell {player} you are a bad cheater"
      - "kick {player}"
  b:
    25: "tell {player} you are a cheater"
    100:
      - "tell {player} you are a very bad cheater"
      - "ban {player}"
```

::: warning NOTE
Additional thresholds are pre-defined, you can not add more or remove existing ones.
:::

### Confidence thresholds

The Heuristic's [confidence thresholds](configuration-02-settings.md#heuristics) makes use of this feature.<br>
It allows you to define separate thresholds for the confidences ?, ! and !!.

```yaml
confidence-thresholds:
  "!!":
    25: "ban {player} You have been banned by Intave (Automatic Cheat Detection)."
  "!":
    25: "ban {player} You have been banned by Intave (Automatic Cheat Detection)."
  "?!":
    25: "tell {player} INTAVE IS ALWAYS WATCHING. 42 players have been banned in the last 5 minutes."
    50: "ban {player} You have been banned by Intave (Automatic Cheat Detection)."
```

### AttackRaytrace thresholds
Same goes for the [AttackRaytrace thresholds](configuration-02-settings.md#attackraytrace).<br>
Here we want to differentiate between attacking others from too far away and not even looking at the attacked.

```yaml
applicable-thresholds:
  reach:
    50: "tell {player} INTAVE IS ALWAYS WATCHING. 42 players have been banned in the last 5 minutes."
    100:
      - "alert {player} was banned for reach"
      - "ban {player} You have been banned by Intave (Automatic Cheat Detection)."
  hitbox:
    50: "tell {player} INTAVE IS ALWAYS WATCHING. 42 players have been banned in the last 5 minutes."
    100: 
      - "alert {player} was kicked for hitbox"
      - "kick {player} Cheating detected (hitbox)"
```
