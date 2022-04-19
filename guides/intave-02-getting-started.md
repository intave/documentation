# Getting started
## Purchase
See [Purchase](/guides/intave-01-purchase.md) on how to get Intave.

## Setup
Choose between installing the auto-installer [Bootstrap](#bootstrap-install) or fall back to [Manual Installation](#manual-install).

#### Bootstrap Install
1. [Download](https://app.intave.de/download) Intave Bootstrap.
2. Copy the downloaded file into your server's plugin folder.
3. Generate the configuration file by booting your server and stopping it after startup.
4. Get your authentication token from the download page or from your [Account Settings](https://app.intave.de/me)
5. Paste the token into the bootstrap configuration file.
6. Boot your server again.

*We have dedicated an [entire section](/guides/asset-02-bootstrap.md) to bootstrap*

#### Manual Install
1. [Download Intave](https://app.intave.de/download) from either the Latest or Stable branch.
2. Copy the downloaded file into your server's plugin folder.
3. Boot your server.

<br>

After first startup, Intave won't be able to start, telling you that your hardware is not verified.

## Hardware Verification
Before using Intave, you must verify your machine.

1. Visit the [hardware page](https://app.intave.de/hardware) where you can, alongside currently verified hardware, see pending verification requests.
2. Carefully review and accept verification requests. [Don't recognize your hardware?](#unknown-hardware) 
3. Start your server once again. Intave should now load without any errors.

#### Note for Pterodactyl, Docker and Kubernetes users
In case you are using Pterodactyl, Docker or Kubernetes,
you need to mount the folder `~/.intave/` (in the current users home directory of the virtual machine) 
to a custom, shared folder.
All virtual machines on the same root machine should have the same folder mounted.<br>
*Intuitively, virtual machines on different root machines must not share the same folder.*<br>
A [guide](/guides/asset-02-bootstrap.md) is available for Pterodactyl users.

## Further Information

### Security
Carefully consider who to grant access to your servers.
Use password-protected SSH keys to securely access your servers.<br>
You take full responsibility for the safety of your Intave copy and
are liable for any damages. If you run into irreversible and serious security problems
with Intave installed, contact us immediately. We offer help to mitigate any potential damage.


### Unknown hardware
In case you do not recognize a verification request, your license might be compromised - contact us immediately.
