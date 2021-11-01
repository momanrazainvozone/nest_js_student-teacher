import { Controller, Get, Post, Put, Param } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:student_id')
  // direct get id in var
  getStudentById(@Param('student_id') student_id: string) {
    console.log(student_id, 'param');
    return 'get student by ID';
  }

  @Post()
  createStudent() {
    return 'Student created';
  }

  // get id in object
  @Put('/:student_id')
  updateStudentById(@Param() param: { student_id: string }) {
    console.log('student_id is:', param);
    return 'Update student';
  }
}
