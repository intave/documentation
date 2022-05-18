# Rationale

The line between cheating and legit is blurry to say the least. In a lot of cases it even overlaps, and it's impossible
to tell which is which.

**A few of the many examples:**

* A player is not sending packets for 5 seconds - then sends them all; is that legitimate lag or the player
  intentionally buffering packets?
* A player attacked another players hitbox 7 movements behind; is that automated packet buffering or just legitimate
  lag?
* A player is jumping in the exact same tick when he received velocity, mitigating most of it; is that player just
  very, very lucky or is this automated behavior?

## The Issue

As anticheat developer, you start drawing a fixed line of differentiation between the two categories, praying to the
gods that it is somewhat balanced.

::: tip An example
Any lag over 3 seconds is illegitimate and needs to be mitigated/set-backed.
:::

Experience shows in cases where our line is blurry, this never really works, no matter where you put it. Either players
will complain about false positives or complain about bypasses.

::: danger Issues with this example
With three seconds as limit, cheaters can now buffer packets and blink-teleport
(`3s * 20 ticks/second * ~0.4 blocks/ticks = 20 blocks`) **and** players with a weak connection will complain about
being mitigated wrongfully.
:::

## The Standard/Old Way

While most anticheats just ignore this blurry territory, some systems including older versions of Intave 'solved' it by
outsourcing key decisions of distinction via an easy-to-change configuration file to their respective, often
inexperienced customers.

This led to a massive amount of bypasses and false-positives, with a lot of customers spending **years** and a lot of
money just to pinpoint the most balanced configuration values. It **never** really worked.

And Intave 14's accuracy actually contributes to even more uncertainty for us to address. 

## Our Way

We learned three things:

1. Anti-Cheat developers **alone** must be responsible for differentiations between cheating and legit.
2. Don't let customers change highly-technical details.
3. Different rules are required for different players.

We came up with the idea of categorizing players in six groups: the ignored, the highly trusted, the trusted, the casuals,
the suspicious, and the very suspicious. This translates quite nicely to color and to the idea of something like a
trust factor.

A general categorization of players allows for incredible flexibility in differentiation, allowing the line to be very
strict for some, and very relaxed with others.

Even if it does not solve the unsolvable, it is quite effective in avoiding a full-out war with your player base, whilst
casually declaring it on cheaters.
