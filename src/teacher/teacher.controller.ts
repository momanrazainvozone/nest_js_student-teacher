import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CraeteTeacherResponseDto } from './dto/teacher.dto';
import { Teachers } from './entity/teacher.entity';
import { TeachersRepository } from './repository/teacher.repository';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers() {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string): Promise<Teachers[]> {
    return this.teacherService.getTeacherById(teacherId);
  }

  @Post()
  createTeacher(@Body() body: CraeteTeacherResponseDto): Promise<Teachers> {
    return this.teacherService.createTeacher(body);
  }
}
