import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT? parseInt(process.env.DB_PORT) : 1433,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["src/entities/**/*.ts"],
});

export async function initializeDatabase(): Promise<DataSource> {
    try {
        if(AppDataSource.isInitialized)
            return AppDataSource;
        await AppDataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (err) {
        console.error("Error during Data Source initialization", err);
    }
    return AppDataSource;
}
