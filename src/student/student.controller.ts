import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  FindStudentsResponseDto,
  CreateStudentDto,
  StudentResponseDto,
  UpdateStudentDto,
  loginStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';
import { Students } from './entity/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent() {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): Promise<Students> {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): Promise<Students> {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(body, studentId);
  }

  @Post('/loginStudent')
  loginStudent(@Body() body: loginStudentDto) {
    return this.studentService.loginStudent(body);
  }
}
