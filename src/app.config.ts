import convict from "convict";
import "dotenv/config";

const config = convict({
    env: {
        doc: "The application environment",
        format: ["production", "development"],
        default: 'development',
        env: "NODE_ENV"
    },
    db: {
        host: {
            doc: "Database host name or IP address",
            format: "*",
            default: "localhost",
            env: "DB_HOST"

        },
        name: {
            doc: "The database's name",
            format: String,
            default: "mydb",
            env: "DB_NAME"
        },
        port: {
            doc: "The port to bind",
            format: "port",
            default: 8080,
            env: "DB_PORT"
        },
        username: {
            doc: "The database's username",
            format: String,
            default: "user",
            env: "DB_USERNAME"
        },
        password: {
            doc: "The database's password",
            default: "password",
            format: String,
            env: "DB_PASSWORD"
        }
    }
})

config.validate({ allowed: 'strict' });

export default config;
