import { Module } from '@nestjs/common';

import { AccountsModule } from '../accounts';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [AccountsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
