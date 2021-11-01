import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacher_id/students')
export class teacherStudentController {
  @Get()
  getStudents(@Param() Param: { teacher_id: string }) {
    console.log(Param, 'param');
    return 'Get specific teacher student';
  }
  @Put('/:student_id')
  updateTeacherStudent(
    @Param() Param: { teacher_id: string; student_id: string },
  ) {
    console.log(Param, 'param');
    return 'Update teacher student';
  }
}
