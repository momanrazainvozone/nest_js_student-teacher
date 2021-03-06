import {
  Injectable,
  HttpException,
  UnauthorizedException,
  HttpStatus,
  NotFoundException,
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
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsRepository } from './repository/student.repository';
import { Students } from './entity/student.entity';
import { JwtService } from '@nestjs/jwt';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
const bcrypt = require('bcrypt');

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentsRepository)
    private studentRepository: StudentsRepository,
    private jwtService: JwtService,
    private eventEmitter: EventEmitter2,
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
    // emitting event
    this.eventEmitter.emit('student.created', {
      ..._newStudent,
    });
    // // return response
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
    return student;
  }

  //Login
  async loginStudent(payload: loginStudentDto) {
    const student = await this.studentRepository.findOne({
      email: payload.email,
    });
    if (!student) {
      throw new HttpException('Invalid email or password', 400);
    }
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
  //========================={EVENT HANDLER}======================\\
  @OnEvent('student.created')
  handleStudentCreatedEvent(payload) {
    // handle and process "OrderCreatedEvent" event
    console.log(payload, 'payload of event emitter');
  }
}
