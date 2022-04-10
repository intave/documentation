# Storage

Storage is a Spigot plugin that allows Intave to remember your players and their actions. Using this
addon unlocks the `/intave history <name>` command and various other features.

Optionally, you can use a central database that allows Intave to remember players across Spigot
servers. You can use your existing PostgreSQL, MariaDB, MySQL or MongoDB database, or fall back to a
per-machine file storage option.

## Setup

1. Visit the [storage GitHub page](https://github.com/intave/storage/releases).
2. Click on the latest release.
3. Choose a `.jar` file to download:
   * `intavestorage-X.Y.Z-all.jar` contains **all** storage implementations
   * `intavestorage-X.Y.Z-file.jar` contains only the **file-based** storage implementation
   * `intavestorage-X.Y.Z-mariadb.jar` contains only the file-based and the **MariaDB-based**
      storage implementations
   * `intavestorage-X.Y.Z-mongodb.jar`contains only the file-based and the **MongoDB-based** storage
      implementations
   * `intavestorage-X.Y.Z-mysql.jar` contains only the file-based and the **MySQL-based** storage
      implementations
   * `intavestorage-X.Y.Z-postgresql.jar` contains only the file-based and the **PostgreSQL-based**
     storage implementations
4. Deploy the `.jar` file to your server's `plugins` folder and start the server once, so it can
   generate the configuration.
5. Modify the configuration to your individual needs; enter your database credentials, for example.
   Once you start the server again, the plugin should load without errors. You will now have access
   to a new command `/intave history <name>`.
