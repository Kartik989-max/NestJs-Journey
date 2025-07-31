import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
@Injectable()
export class AuthService {
  getAuth(): string {
    return 'Auth Endpoint';
  }
  postAuth(): string{
    return 'Auth Posted';
  }
}