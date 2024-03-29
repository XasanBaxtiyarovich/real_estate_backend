import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admin} from './entities/admin.entity';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        Admin
      ]
    ),
    JwtModule.register(
      {}
    )
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
