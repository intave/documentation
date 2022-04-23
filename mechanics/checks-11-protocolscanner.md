# ProtocolScanner

`Name` ProtocolScanner<br>
`Coverage` Game protocol changes<br>
`Developers` Jpx3<br>
`Since` Intave 12<br>

### Issue

While some cheat clients conform to the game protocol, some slightly change it and perform impossible actions. 

### Detection

Intave has a rule set to check for changes in the Minecraft protocol.

### Accuracy

ProtocolScanner is able to detect many game protocol changes. Since those actions are usually impossible to achieve with
a vanilla client, the check is fairly accurate.

### Issues

Some servers have reported issues with "sent_slot_twice". If you are experiencing issues, have a look at the
[configuration](configuration-02-settings.md#check-sent-slot-twice-vl).
