import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import {
  studentCreateDto,
  studentResponseDto,
  studentUpdateDto,
  studentGetDto,
} from './student_dto/student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  // defing the data tyoe what we will return
  getStudents(): studentResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:student_id')
  // direct get id in var
  getStudentById(@Param('student_id') student_id: string): studentGetDto {
    console.log(student_id, 'param');
    return this.studentService.getStudentById();
  }

  @Post()
  createStudent(@Body() Body: studentCreateDto): studentGetDto {
    console.log(Body, 'BODY');
    return this.studentService.createStudent();
  }

  // get id in object
  @Put('/:student_id')
  updateStudentById(
    @Param() param: { student_id: string },
    @Body() Body: studentUpdateDto,
  ): studentGetDto {
    console.log('student_id is:', param, 'And the body is', Body);
    return this.studentService.updateStudentById();
  }
}
