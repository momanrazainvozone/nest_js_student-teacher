import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teacher')
export class teacherController {
  @Get()
  get() {
    return 'All teachers';
  }
  @Get('/:teacher_id')
  getTeacherById() {
    return 'get teacher by ID';
  }
  @Post()
  createTeacher() {
    return 'teacher created';
  }
  @Put('/:teacher_id')
  updateTeacherById() {
    return 'Update teacher';
  }
}
