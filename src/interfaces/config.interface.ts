// config.interface.ts

interface DatabaseConfigProps {
    hostName: string;
    userName: string;
    password: string;
    databaseName: string;
    port: number;
  }
  
  export interface AppConfigProps {
    port: number;
    secretKey: string;
    database: DatabaseConfigProps;
  }
  