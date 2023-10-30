import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  getHello(): string { 
    return 'Hello World!';
  }

  constructor(config:  ConfigService){
    console.log('log: ', config.get<string>('dbConfig'))
  }
}
