export class Database {
    private static instance: Database;
    private constructor() {}

    public static getInstance() {
        if (!Database.instance) {

        }
        return Database.instance;
    }
}
