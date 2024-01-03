// config.ts
import { AppConfigProps } from '../interfaces/config.interface';

export const appConfig = (): AppConfigProps => ({
  port: parseInt(process.env.APP_PORT, 10) || 5050,
  secretKey: process.env.SECRET_KEY || '7L1G3v-7q5yN54ZsU1W8pR2bD3mH9eT5',
  database: {
    hostName: process.env.DB_HOST_NAME || 'localhost',
    userName: process.env.USER_NAME || 'postgres',
    password: process.env.PASSWORD || '2710',
    databaseName: process.env.DATABASE_NAME || 'air-line',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
  },
});
