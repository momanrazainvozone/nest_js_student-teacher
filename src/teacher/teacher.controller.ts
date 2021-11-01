import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teacher')
export class teacherController {
  @Get()
  get() {
    return 'All teachers';
  }
  @Get('/:teacher_id')
  getTeacherById(@Param() param: { teacher_id: string }) {
    console.log(param, 'param');
    return 'get teacher by ID';
  }
  @Post()
  createTeacher(@Body() Body) {
    console.log('Body is:', Body);
    return 'teacher created';
  }
  @Put('/:teacher_id')
  updateTeacherById(@Param() Param: { teacher_id: string }) {
    console.log(Param, 'param');
    return 'Update teacher';
  }
}
