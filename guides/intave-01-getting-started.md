# Getting started
## Purchase
The first step is to buy Intave, available at [https://intave.de](https://intave.de)

## Installation
#### Installing Intave with Bootstrap
1. [Download Intave Bootstrap](https://app.intave.de/download)
2. Copy the downloaded file into your server's plugin folder.
3. Generate the configuration file by booting your server and stopping it after startup.
4. Get your authentication token from the download page or from your [Account Settings](https://app.intave.de/me)
5. Paste the token into the bootstrap configuration file.
6. Boot your server again.

#### Installing Intave manually
1. [Download Intave](https://app.intave.de/download)
2. Copy the downloaded file into your server's plugin folder.
3. Boot your server.

<br>
You have successfully installed Intave, congratulations!
But we need more step to boot Intave properly.
<br>

## Verification
Before you begin, you must verify the machine you are using.

1. Visit [https://intave.de/hardware](https://app.intave.de/hardware)
2. Alongside verified hardware, you can see currently pending verification requests.
3. Carefully review and accept verification requests.
::: danger 
If you do not recognize a verification request, contact us
4. .
:::
5. Start your server once again. Intave should now properly boot.

::: tip
In case you are using Pterodactyl, Docker or Kubernetes,
you need to mount the folder ~/.intave/ (in the home directory of the current user in the virtual machine) 
to a custom, shared folder.
All virtual machines on the same root machine should have the same folder mounted.
Virtual machines on different root machines must not share the same folder.<br>
A [guide](/guides/asset-02-bootstrap.md) is available for Pterodactyl users.
:::

## Further Information

### Security
Carefully consider who to grant access to your servers.
Use password-protected SSH keys to securely access your servers.<br>
You take full responsibility for the safety of your Intave copy and
are liable for any damages. If you run into irreversible and serious security problems
with Intave installed, contact us immediately. We offer help to mitigate any potential damage.