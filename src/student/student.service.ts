import { Injectable, HttpException } from '@nestjs/common';
import { students } from '../db';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsRepository } from './repository/student.repository';
import { Students } from './entity/student.entity';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentsRepository)
    private studentRepository: StudentsRepository,
  ) {}
  //private students = students;

  async getStudents() {
    return await this.studentRepository.find({});
  }

  async getStudentById(id: string): Promise<Students> {
    return await this.studentRepository.findOne({ where: { id: id } });
  }

  async createStudent(payload: CreateStudentDto): Promise<Students> {
    const _newStudent = await this.studentRepository.save(payload);
    return _newStudent;
  }

  async updateStudent(payload: UpdateStudentDto, id: string) {
    let updatedStudent = await this.studentRepository.update(
      { id },
      { ...payload },
    );
    console.log(updatedStudent, 'updatedStudent');
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
}
