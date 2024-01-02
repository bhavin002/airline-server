// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Auth/auth.module';
import { User } from './Auth/entities/user.entity';
import { appConfig } from './config/config'; // Import the new configuration file

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig], // Include the new configuration file
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.hostName'),
        port: configService.get<number>('database.port'),
        password: configService.get<string>('database.password'),
        username: configService.get<string>('database.userName'),
        entities: [User],
        database: configService.get<string>('database.databaseName'),
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
