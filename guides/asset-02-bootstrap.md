# Bootstrap

Instead of manually downloading and updating Intave with every update, 
use Intave Bootstrap to automatically download and update Intave for you.

## Setup
### Download
1. Visit the [download page](https://app.intave.de/download) or [GitHub](https://github.com/intave/bootstrap/releases) to download the latest Bootstrap jar-file.
2. Copy the jar-file into your server's plugin directory.
3. Make sure not to have Intave in your plugin folder - you can't start Intave twice.

### Authorization
Now you need to authorize Bootstrap to download Intave:

1. Go to your [account settings](https://app.intave.de/me).
2. Copy your authentication key.
3. Paste the authentication key into the Bootstrap configuration.
4. Start your server.

## Channel
By default, Bootstrap will download and update to the *last stable* version of Intave. You can change this behavior in
the configuration, switching to the *latest version*. The plugin only downloads new versions when required, saving up
bandwidth.

## Security
Do not share your authentication key with anyone else. 
You take full responsibility for the safety of your Intave copy and
are liable for any damages. If you run into irreversible and serious security problems
with Intave installed, contact us immediately. We offer help to mitigate any potential damage.