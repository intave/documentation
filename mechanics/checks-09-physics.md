# Physics

`Name` Physics<br>
`Coverage` Movement related cheats<br>
`Developers` DarkAndBlue, ventolotl, Jpx3<br>
`Since` Intave 14<br>
`Links` [Config](/mechanics/configuration-02-settings.md#physics)<br>

### Issue
Movement-related cheats allow players to use fly, move faster/slower or ignore knockback.
The client just [informs the server](https://wiki.vg/Protocol#Player_Position) about its new position, 
making it challenging to spot deviations.

### History

#### First generation
Very simple and early anticheats including the server's default anti-fly mechanism use constraint-based checks, checking for very simple conditions occurring simultaneously.
<br>
::: details Example for a constraint-based, 1st generation check
Player is moving upwards, but is in air for longer than 20 ticks -> flying
```kotlin
fun checkMovement(
  player: Player,
  motion: Motion,
  ticksInAir: Int,
) {
  if (ticksInAir > 20 && motion.motionY() >= 0) {
    player.kick("Floating too long in the air")
  }
}
//...
```
:::
::: danger High amount of false negatives
In practice, this approach is useless.
A cheater could just move with a vertical motion of -0.001 blocks/tick and bypass our entire example check.
Or fly a total of 80 blocks straight upwards, no problem here.
:::
::: tip Few false positives
Our example check ignores a wide range of edge cases, like jump effects, elytra, water, velocity, etc - and
writing a constraint-based check for every possible edge case doesn't help much.
But with all edge cases in mind, the extremely poor protection shouldn't have a big impact on the game.
Although when false positives occur, they tend to be punished very harshly, in our example with a forced disconnection.
:::

#### Second generation
Slightly more advanced anticheats including older version of Intave hardcode a basic conversion formula for motion on the Y-Axis and use limiting checks for motion on the XZ-Axes.

::: details Example for a limiting, 2nd generation check
Player is jumping (defined by vertical motion), so he can't move faster than 0.6 blocks horizontally
```kotlin
fun checkMovement(
  player: Player,
  motion: Motion,
) {
  val isJumping = motion.getY() === 0.42 + 0.1 * player.jumpEffectAmplifier
  val maxHorizontalSpeed: Double = 0.6 + 0.1 * player.speedEffectAmplifier
  if (isJumping && motion.horizontalLength > maxHorizontalSpeed) {
    // incorrect movement
  }
}
// ...
```
:::

::: warning Medium amount of false negatives
The more edge cases covered, the fewer false negatives / bypasses occur.
And with newer versions of the game, it gets unbelievably hard to cover all of them.
The reactive nature of this approach will not cover proactive mechanics, like velocity or slime jumps.
Since it is necessary to hardcode every possible edge case, these types of movement checks usually grow exponentially in size and complexity.
:::
::: warning Medium amount of false positives
The better edge cases are covered, the fewer false positives occur.
But newer movement features require very complex coverage, making it unbelievably hard to natively support them.
:::

#### Third generation
With the third generation movement checks, often incorrectly labelled *prediction* or *predictions*,
manually figuring out if a movement is legit or not is mostly avoided, simply by self-simulating the correct solution.

::: details Example for a simulating, 3rd generation check

We already know the correct motion, so we can simply check if the player's motion is correct

```kotlin
fun checkMovement(
  player: Player,
  motion: Motion,
  lastMotion: Motion,
) {
  val correctMotion: Motion = simulateCorrectMotionFrom(lastMotion)
  if (motion.distance(simulatedMotion) > 0.01) {
    // incorrect movement
  }
}

fun simulateCorrectMotionFrom(lastMotion: Motion): Motion {
  // ...
}
```
:::
::: tip Few false negatives
By its very nature, this approach is almost impossible to circumvent.
:::
::: warning Medium amount of false positives
In theory, this approach shouldn't have any false positives once all movement features are covered.
But in practice, a NP-complete problem originating from uncertainties in the Minecraft protocol prevents archiving zero false positives.
:::

### Detection
By comparing player movement with its own simulations of game code, the physics check can spot almost all movement
cheats. Spanning over thousands of lines of code in more than a hundred class files, it is the most sophisticated check in Intave.<br>

::: details Supported features
The simulations account for<br> 
*cross-version support*,<br>
*elytra gliding*,<br>
*vehicles*,<br>
*velocity* and _fireworks_,<br>
_slime- & bed physics_,<br>
_fluids_,<br>
_1.13+ swimming_ and _advanced water physics_,<br>
_scaffolding blocks_,<br>
_player latency_,<br>
_block-changes_ and _placements_,<br>
_item attributes_,<br>
_effects_ like _speed_ and _jumpboost_<br>
and much, much more.
:::

### Setbacks

A setback system will correct deviations, mitigating any advantage gained.<br>
To mitigate incorrect setbacks, a three-layered structure is in place:<br>

The first level - called the prefilter, will label correct movement as suspicious in <~5% of cases and incorrect movement as suspicious in >~99% of cases.<br>
On the second level - called the buffer, a prefilter suspicion will lead to a trigger in <~20% for correct and >~98% on incorrect movement.<br>
The third level - called the mitigation strategy, is user configurable to allow for custom detection accuracy bounaries.<br>

### Mitigation Strategy

For deciding on how aggressive a violation should be translated to a mitigation/setback,
a set of pre-build mitigation strategies is available:

| Strategy   | Mitigate                          | False negatives | False positives |
|------------|-----------------------------------|-----------------|-----------------|
| AGGRESSIVE | all violations                    | ~1%             | ~5%             |
| CAREFUL    | most violations (default)         | ~5%             | ~3%             |
| LENIENT    | only highly-suspicious violations | ~35%            | ~1%             |
| SILENT     | only impossible violations        | >99.9%          | 0%              |

#### On AGGRESSIVE, this means:<br>

A false positive requires: <br>
Correct Movement <b><b>-</b></b>(~5% prefilter)-> Violation <b><b>-</b></b>(~5% buffer)-> Trigger <b><b>-</b></b>(~10% mit strat)-> Mitigation (~0.1% combined)
<br>
<br>
A false negative requires: <br>
Incorrect Movement <b><b>-</b></b>(~1% prefilter)-> Violation <b><b>-</b></b>(~2% buffer)-> Trigger <b><b>-</b></b>(~1% mit strat)-> Mitigation (~5% combined)

::: details What is a false negative/positive?
`False negatives` refers to violations that did not lead to a setback when cheating.<br>
`False positives` refers to violations that led to a setback when not cheating.<br>
:::

::: tip
Use [trustfactors](/mechanics/trust-01-introduction.md) to significantly lower false positive/negative rates.
:::

### Accuracy
The check is able to detect any deviation in movement, meaning we can detect any movement-related cheats like *Speed*, *Fly* and *Anti-Knockback*.

### Issues
Although the physics check is Intave's most accurate, the sheer amount of data processed can cause problems.<br>
Given a hundred million movements, a false positive rate of just 0.01%^[This average was measured over a period of
several weeks on a subserver on GommeHD.net with 350 concurrent players at peak times.] (five immediately consecutive false positives per player per hour) would still result in ten thousand false positives overall.<br>

To combat the impact of this issue, the mitigation/setback system needs to operate as smoothly as possible, for the player himself and others.
The mitigation system is designed so that other players shouldn't be able to differentiate a player moving normally and him/her trying to fly.<br>
To ensure a setback/mitigation feels smooth to the player too, we apply the expected motion as velocity, additional to the rotationless teleport.

::: warning
As of April 2022, not all movement-features of 1.16+ are supported, yet.
You may experience some issues with newer versions.
:::
