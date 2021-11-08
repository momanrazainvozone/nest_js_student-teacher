import { Module } from '@nestjs/common';
import { StudentsModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { Cron } from '@nestjs/schedule';
import { config } from '../config/orm.config';
import { EventEmitterModule } from '@nestjs/event-emitter';
require('dotenv').config();

@Module({
  imports: [
    EventEmitterModule.forRoot({ ignoreErrors: false }), // ignore if event have not listners
    TypeOrmModule.forRoot(config),
    ScheduleModule.forRoot(),
    StudentsModule,
    TeacherModule,
  ],
})
export class AppModule {
  // CRON JOB
  @Cron('* * * * * *')
  log() {
    console.log('CRON Working Every Seconds');
  }
}
