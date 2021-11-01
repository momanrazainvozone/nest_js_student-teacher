import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }
  @Get('/:student_id')
  getStudentById() {
    return 'get student by ID';
  }
  @Post()
  createStudent() {
    return 'Student created';
  }
  @Put('/:student_id')
  updateStudentById() {
    return 'Update student';
  }
}
