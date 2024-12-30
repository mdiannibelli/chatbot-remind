import 'dotenv/config'
import env from 'env-var'

export const config = {
    PORT: env.get('PORT').required().asPortNumber(),
    POSTGRES_DB_HOST: env.get('POSTGRES_DB_HOST').required().asString(),
    POSTGRES_DB_USER: env.get('POSTGRES_DB_USER').required().asString(),
    POSTGRES_DB_NAME: env.get('POSTGRES_DB_NAME').required().asString(),
    POSTGRES_DB_PASSWORD: env.get('POSTGRES_DB_PASSWORD').required().asString(),
    POSTGRES_DB_PORT: env.get('POSTGRES_DB_PORT').required().asPortNumber(),
};