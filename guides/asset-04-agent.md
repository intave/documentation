# Agent

The optional Agent allows Intave to improve performance. The plugin offers Intave access to the Java Instrumentation
API, providing it with the tools necessary to change classes at runtime. This means that Intave will be able to
temporarily patch the Minecraft server.

## Requirements

Agent may have a minimal impact on startup time (0.1s-0.5s). Additionally, at least 50MB of available heap space (RAM)
will be used to store the original class bytes of server classes.

Please note that Agent bypasses sandboxing of plugins. If you are isolating your plugins with java security features,
you may want to not use Agent.

## Setup

1. [Download](https://intave.de/go/agent) the Agent `.jar` file.
2. Put the `.jar` file into the same directory as your server `.jar`.
3. Add `-javaagent:IntaveAgent.jar` to your server startup flags.
4. On startup, Intave will notify you if it found the Agent.

## Will My Server Be Modified Permanently?

No. All changes made by Intave through the agent will only affect the server on runtime. The `.jar` itself will remain
untouched; any changes expire when the server shuts down.
