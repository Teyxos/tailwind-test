import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.authService.signup(username, password);
    return user;
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.authService.login(username, password);
    return user;
  }
}
