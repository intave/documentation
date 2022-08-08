# Getting started
## Purchase
In case you don't already have Intave, it is available at [https://intave.de](https://intave.de)

## Install
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

::: tip NOTE
Current versions of Intave automatically download [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) if missing.
:::

## Verify
Before you begin, you must verify the machine you are using.
::: tip NOTE
Learn more about machine verifications [here](intave-02-machines.md)
:::

1. Visit [https://intave.de/hardware](https://app.intave.de/hardware)
2. Alongside verified hardware, you can see currently pending verification requests.
3. Carefully review and accept verification requests.
::: danger 
If you do not recognize a verification request, contact us.
:::
4. Start your server once again.
5. Done!
::: tip NOTE
In case you are using Pterodactyl, Docker or Kubernetes,
you need to mount the folder ~/.intave/ (in the home directory of the current user in the virtual machine) 
to a custom, shared folder.
All virtual machines on the same root machine should have the same folder mounted.
Virtual machines on different root machines must not share the same folder.<br>
A [guide](https://docs.intave.de/external/Intave__Pterodactyl_EN.pdf) is available for Pterodactyl users.
:::

### Next steps
Head over to the [configuration](../mechanics/configuration-01-config.md)
