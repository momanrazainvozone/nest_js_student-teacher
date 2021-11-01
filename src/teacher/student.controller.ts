import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers/:teacher_id/students')
export class teacherStudentController {
  @Get()
  getStudents() {
    return 'Get specific teacher student';
  }
  @Put('/:student_id')
  updateTeacherStudent() {
    return 'Update teacher student';
  }
}
