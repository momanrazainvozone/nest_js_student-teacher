import {
  Injectable,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  CreateStudentDto,
  CreateStudentResponseDto,
  FindStudentsResponseDto,
  loginStudentDto,
  logoutStudentDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsRepository } from './repository/student.repository';
import { Students } from './entity/student.entity';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentsRepository)
    private studentRepository: StudentsRepository,
    private jwtService: JwtService,
  ) {}
  //private students = students;

  async getStudents() {
    return await this.studentRepository.find({});
  }

  async getStudentById(id: string): Promise<Students> {
    return await this.studentRepository.findOne({ where: { id: id } });
  }

  async createStudent(
    payload: CreateStudentDto,
  ): Promise<CreateStudentResponseDto> {
    // hashing password
    let access_token;
    let new_student = { ...payload };
    const hash = await bcrypt.hash(payload.password, 10);
    new_student.password = hash;
    const _newStudent = await this.studentRepository.save(new_student);
    //Generating access token
    access_token = this.jwtService.sign({
      ..._newStudent,
    });
    await this.studentRepository.update(
      { email: payload.email },
      { ..._newStudent, accessToken: access_token },
    );
    return { ..._newStudent, accessToken: 'JWT ' + access_token };
  }

  async updateStudent(payload: UpdateStudentDto, id: string) {
    let updatedStudent = await this.studentRepository.update(
      { id },
      { ...payload },
    );
    return payload;
  }

  async getStudentsByTeacherId(teacherId: string) {
    let student = await this.studentRepository.find({
      where: { id: teacherId },
    });
    if (!student) {
      throw new HttpException('Student not found', 400);
    }
    return student;
  }

  //Login
  async loginStudent(payload: loginStudentDto) {
    const student = await this.studentRepository.findOne({
      email: payload.email,
    });
    const isPasswordMatching = await bcrypt.compare(
      payload.password,
      student.password,
    );

    if (!isPasswordMatching) {
      throw new UnauthorizedException();
    }
    return student;
  }

  //logout
  async logoutStudent(payload: logoutStudentDto) {
    console.log(payload, 'payload in logut');
    return 'logout';
  }

  //validate
  validateUser(payload) {
    return { username: 'rosa' };
  }
}
