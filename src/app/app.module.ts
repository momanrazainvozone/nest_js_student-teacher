import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { teacherController } from '../teacher/teacher.controller';
import { teacherStudentController } from '../teacher/student.controller';
@Module({
  imports: [],
  controllers: [StudentController, teacherController, teacherStudentController],
})
export class AppModule {}
