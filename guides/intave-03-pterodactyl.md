# Pterodactyl Guide

## Introduction

Intave limits usage by the number of machines/VPS on which it runs.<br> 
Pterodactyl starts each server as a separate Docker instance, which is identified as an additional machine. 

Below are instructions on how to create a mount with Pterodactyl to ensure correct machine detection.

::: warning
This guide only works with full root access and not with third-party providers.
:::

## 1. Create mount

To create a mount, you must first log into the administrative backend of your Pterodactyl. At the bottom right you will find the option "Mounts", select it. Next, click on "Create New" to begin the setup.

- Name and description can be freely chosen.

- Enter `/root/intave` in the **Source** field.

- In the **Target** field, enter `/home/container/?/.intave`

- Keep the settings "Read Only" and "User Mountable" to default.

::: tip
Please note that both are case-sensitive!
:::

Now click on "Create" to create the mount.


Before you can use the mount, select the eggs and nodes for which the mount should be available.

## 2. Intave folder

Connect via SSH to your machine/VPS on which the Pterodactyl Wings are installed.<br>
Navigate to the root directory (not /home) and create a “intave” folder here. `mkdir intave`

The read/write permissions for this folder must be set to "777"\*, without these permissions the Docker instance will not be able to access this folder later. `chmod 777 /root/intave`

\*You can also try a different configuration of permissions, but then it is up to you to up to you to configure this correctly.<br>
After all, the Docker instance needs to be able to to access, read and write this intave folder.

## 3. Allow mount

We will now add the directory (/intave) to the allow-list for Pterodactyl Wings (Docker instances). To do this, the Wings configuration on the node machine/VPS must be edited. `nano /etc/pterodactyl/config.yml`

Now scroll all the way down until you reach the **allowed_mounts** option, add the /intave folder here.

```yaml
remote_query:
  timeout: 30
  boot_servers_per_page: 50
allowed_mounts:
- /root/intave # add the /intave folder here.
allowed_origins: []
```

Once you have saved the configuration, restart the wings service. `systemctl restart wings`

## 4. Add mount

The last step is to assign the Minecraft server (Docker instance) on which Intave is installed. 

To do this, switch back to the administrative backend. Go to the "Servers" overview page on the left-hand side and select the desired Minecraft server. Click the "Mounts" tab in the top navigation bar.

If you click on the green +, this status will be changed to "Mounted". The /intave folder is now linked.

---

If you have followed all the steps in this guide, you can now start the Minecraft server with Intave. To activate Intave, the machine/VPS must now be [approved](https://app.intave.ac/hardware) once. Enjoy Intave on Pterodactyl (Docker).

*For questions about the setup, contact the [Intave Support](https://app.intave.ac/go/discord) or write me a message on Discord. (@pfandleiher)*
