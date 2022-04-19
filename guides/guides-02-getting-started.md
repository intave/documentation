# Getting started
## Purchase
Before purchasing Intave, please make yourself familiar with the [EULA](https://policy.intave.de/eula)<br>
If you don't own a copy of Intave yet, you can get one with the following steps:
1. Visit the [purchase page](https://app.intave.de/purchase)
2. A click on the `Purchase` button will redirect you to our payment gateway, PayPal.
3. Once the payment is completed, you are now able to [download Intave](https://app.intave.de/download)

## Setup

There are several ways to set up Intave:

* [Intave Bootstrap](i02-bootstrap.md): This allows for automatic downloading and updating of Intave.
* Manual Installation: This involves manually downloading updates for Intave.

This section covers the manual installation.

### Download

1. If you haven't downloaded Intave yet, please do so now. Visit the [download page](https://app.intave.de/download) and
   download the `Latest` branch.
2. Copy the `.jar` file into your server's `plugins` folder. Please keep in mind Intave is a **Spigot** plugin, not a
   BungeeCord plugin. You can add BungeeCord support to Intave by using [Proxy Support](i03-proxy.md).
3. Start your server and Intave should load, notifying you with an error that your hardware is not verified.

### Hardware Verification

To ensure the legitimate use of your license, you must verify your hardware before being able to use Intave.

1. Visit the [hardware page](https://app.intave.de/hardware).
2. Alongside currently verified server hardware, you will see pending verification requests for machines currently not verified.
3. Carefully review any verification requests. In case you do not recognize a verification request, your license might be compromised - contact us immediately.
4. Start your server once again. Intave should now load without any errors.

#### Note for Pterodactyl, Docker and Kubernetes
In case you are using Pterodactyl, Docker or Kubernetes,
you need to mount the folder `~/.intave/` (in the current users home directory of the virtual machine) 
to a custom, shared folder.
All virtual machines on the same root machine should have the same folder mounted.<br>
*Intuitively, virtual machines on different root machines must not share the same folder.*<br>
A [guide](/guides/i02-bootstrap.md) is available for Pterodactyl users.


### Security
Carefully consider who to grant access to your servers. 
Use password-protected SSH keys to securely access your servers.<br>
You take full responsibility for the safety of your Intave copy and
are liable for any damages. If you run into irreversible and serious security problems
with Intave installed, contact us immediately. We offer help to mitigate any potential damage.
