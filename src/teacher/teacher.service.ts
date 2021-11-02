import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { CraeteTeacherResponseDto } from './dto/teacher.dto';
import { TeachersRepository } from './repository/teacher.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Teachers } from './entity/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeachersRepository)
    private teachersRepository: TeachersRepository,
  ) {}

  private teachers = teachers;

  async getTeachers() {
    return await this.teachersRepository.find();
  }

  async getTeacherById(id: string): Promise<Teachers[]> {
    return await this.teachersRepository.find({ where: { id: id } });
  }

  async createTeacher(payload: CraeteTeacherResponseDto): Promise<Teachers> {
    const _teacher = await this.teachersRepository.save({ ...payload });
    return _teacher;
  }
}
