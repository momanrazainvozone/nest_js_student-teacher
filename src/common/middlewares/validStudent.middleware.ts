import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { StudentsRepository } from 'src/student/repository/student.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { students } from '../../db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(StudentsRepository)
    private studentRepository: StudentsRepository,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const student = await this.studentRepository.findOne({
      where: { id: studentId },
    });
    if (!student) {
      throw new HttpException('Student not found', 400);
    }
    next();
  }
}
