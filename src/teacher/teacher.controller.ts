import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  getTeacherStudentDto,
  createTeacherStudentDto,
  returnTeacherStudentDto,
} from './teacerDto/teacher.dto';
import { TeacherService } from './teacher.service';
@Controller('teacher')
export class teacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  get() {
    return 'All teachers';
  }
  @Get('/:teacher_id')
  getTeacherById(@Param() param: { teacher_id: string }): getTeacherStudentDto {
    console.log(param, 'param');
    return this.teacherService.getTeacherById();
  }
  @Post()
  createTeacher(
    @Body() Body: createTeacherStudentDto,
  ): returnTeacherStudentDto {
    console.log('Body is:', Body);
    return this.teacherService.createTeacher();
  }
  @Put('/:teacher_id')
  updateTeacherById(
    @Param() Param: { teacher_id: string },
  ): returnTeacherStudentDto {
    console.log(Param, 'param');
    return this.teacherService.updateTeacherStudent();
  }
}
