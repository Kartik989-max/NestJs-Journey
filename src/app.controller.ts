import { Controller, Get, Post } from '@nestjs/common';
import { AppService,AuthService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}
  @Get()
  getAuth(): string {
    return this.authservice.getAuth();
  }
  @Post()
  postAuth(): string {
    return this.authservice.postAuth();
  }
}
