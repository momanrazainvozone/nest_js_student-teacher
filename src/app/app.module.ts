import { Module } from '@nestjs/common';
import { StudentsModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config), StudentsModule, TeacherModule],
})
export class AppModule {}
