// config.ts
import { AppConfigProps } from '../interfaces/config.interface';

export const appConfig = (): AppConfigProps => ({
  port: 5050,
  secretKey: '7L1G3v-7q5yN54ZsU1W8pR2bD3mH9eT5',
  database: {
    hostName: 'localhost',
    userName: 'root',
    password: 'mysql2710',
    databaseName: 'air_line',
    port: 3306,
  },
});
