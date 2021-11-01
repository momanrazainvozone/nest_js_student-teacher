import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

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
  createStudent(@Body() Body) {
    console.log(Body, 'BODY');
    return 'Student created';
  }

  // get id in object
  @Put('/:student_id')
  updateStudentById(@Param() param: { student_id: string }, @Body() Body) {
    console.log('student_id is:', param, 'And the body is', Body);
    return 'Update student';
  }
}
