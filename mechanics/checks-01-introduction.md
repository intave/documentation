# Checks
## What is a check?

A check is an algorithm or algorithm cluster designed to find and mitigate aspects of cheating.

Each check is responsible for covering a fairly large part of the spectrum, seeking high efficiency and accuracy,
each with a different purpose, goal and structure.

All checks combined should cover the entire spectrum of cheats. This leads to a cheat-free server experience.

## What checks does Intave have?

In total, we have 11 checks:

* [**AttackRaytrace**](/mechanics/checks-02-attackraytrace.md): Detects all reach and hitbox cheats.
* [**BreakSpeedLimiter**](/mechanics/checks-03-breakspeedlimiter.md): Patches FastBreak cheats
* **ClickPatterns**
* **ClickSpeedLimiter**
* [**Heuristics**](/mechanics/checks-06-heuristics.md): Searches for kill aura like patterns and other combat related
  cheats.
* **InteractionRaytrace**
* **InventoryClickAnalysis**
* [**Physics**](/mechanics/checks-09-physics.md): Checks for deviations from vanilla movement like fly, speed and
  velocity. A setback system corrects any deviation detected, mitigating any possible advantage. 
* **PlacementAnalysis**
* **ProtocolScanner**
* **Timer**

Together, these checks provide a strong protection for your server against any cheater.
