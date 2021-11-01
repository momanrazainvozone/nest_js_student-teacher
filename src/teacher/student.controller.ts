import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { getTeacherStudentDto } from './teacerDto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers/:teacher_id/students')
export class teacherStudentController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getStudents(@Param() Param: { teacher_id: string }): getTeacherStudentDto[] {
    console.log(Param, 'param');
    return this.teacherService.getStudents();
  }
  @Put('/:student_id')
  updateTeacherStudent(
    @Param() Param: { teacher_id: string; student_id: string },
    @Body() Body,
  ): getTeacherStudentDto {
    console.log(Param, 'param and Body is:', Body);
    return this.teacherService.updateTeacherStudent();
  }
}
