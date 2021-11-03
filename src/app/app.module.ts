import { Module } from '@nestjs/common';
import { StudentsModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { Cron } from '@nestjs/schedule';
import { config } from '../config/orm.config';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ScheduleModule.forRoot(),
    StudentsModule,
    TeacherModule,
  ],
})
export class AppModule {
  @Cron('* * * * * *')
  log() {
    console.log('Every seconds');
  }
}
