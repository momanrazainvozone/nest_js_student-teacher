import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  FindStudentsResponseDto,
  CreateStudentDto,
  StudentResponseDto,
  UpdateStudentDto,
  loginStudentDto,
  CreateStudentResponseDto,
  logoutStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';
import { Students } from './entity/student.entity';
import { AuthGuard } from '@nestjs/passport';

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
  createStudent(
    @Body() body: CreateStudentDto,
  ): Promise<CreateStudentResponseDto> {
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

  @Post('/logoutStudent')
  @UseGuards(AuthGuard('jwt'))
  logoutStudent(@Body() body: logoutStudentDto) {
    return this.studentService.logoutStudent(body);
  }
}
