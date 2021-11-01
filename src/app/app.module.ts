import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { teacherController } from '../teacher/teacher.controller';
import { teacherStudentController } from '../teacher/student.controller';
import { StudentService } from '../student/student.service';
import { TeacherService } from '../teacher/teacher.service';
@Module({
  imports: [],
  controllers: [StudentController, teacherController, teacherStudentController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
