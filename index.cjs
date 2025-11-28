const { Database: BunSqliteDatabase } = require("bun:sqlite");
class Database extends BunSqliteDatabase {
    constructor(filename, options) {
        super(filename, {
            create: true,
            strict: true,
            readonly: !!options.readonly,
        });
    }
}
module.exports = Database;
