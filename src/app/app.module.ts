import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { teacherController } from '../teacher/teacher.controller';
@Module({
  imports: [],
  controllers: [StudentController, teacherController],
})
export class AppModule {}
