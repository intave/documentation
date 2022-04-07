# Bootstrap

Instead of manually downloading and updating Intave, there is another process to install Intave. Intave Bootstrap
automatically downloads and updates Intave on your server.

## Setup
### Download

1. If you haven't downloaded Bootstrap yet, please do so now. Visit the [download page](https://app.intave.de/download)
   or [GitHub](https://github.com/intave/bootstrap/releases) and download the latest Bootstrap `.jar` file.
2. Copy the `.jar` file into your server's `plugins` folder. Please keep in mind Bootstrap is a **Spigot** plugin, not a
   BungeeCord plugin. You can add BungeeCord support to Intave by using [Proxy Support](/guide/i03-proxy.html).
3. Make sure no Intave `.jar` file is in your `plugins` folder. Otherwise, Boostrap is not able to load Intave
   correctly.

### Authorization

Now you need to authorize Bootstrap to download Intave:

1. [Log in](https://app.intave.de) to your Intave account.
2. Go to your [account settings](https://app.intave.de/me).
3. There, generate and copy your *authentication key*.
4. Paste the authentication key into the Bootstrap configuration located at `plugins/IntaveBootstrap/config.yml`. **Keep
   the authentication key secret.**
5. Start your server and Bootstrap should load Intave, notifying you with an error that your hardware is not verified.

### Hardware Verification

To ensure the legitimate use of your license, you must verify your hardware before being able to use Intave. Luckily,
this step is a matter of two clicks.

1. Please visit the [hardware page](https://app.intave.de/hardware).
2. You will see all your currently verified server hardware. Additionally, you will see verification requests if your
   Intave license has been used on a machine not currently verified.
3. Please carefully review any verification requests. **If you do not recognize a verification request, please contact
   us immediately – your license may be in danger!** Once you have reviewed the request details, you can verify the
   machine with a simple click.
4. Start your server once again. Now, Bootstrap should load Intave without any errors.

## Control the Update Channel

By default, Bootstrap will download and update to the *last stable* version of Intave. You can change this behavior in
the configuration, so it downloads the *latest version*. The plugin only downloads new versions when required, saving up
bandwidth.

## Security

Please carefully consider who has access to your servers. Having access to your authentication key, third parties are
able to download Intave. You are responsible for the safety of your Intave license and may be held liable for possible
damages. **If you notice any suspicious activity or leaks, please contact us immediately and generate a new
authentication key.** We can help you mitigate any fraudulent activity involving your Intave license.
