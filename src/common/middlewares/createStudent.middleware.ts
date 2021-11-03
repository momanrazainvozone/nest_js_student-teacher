import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { StudentsRepository } from 'src/student/repository/student.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateStudentMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(StudentsRepository)
    private studentRepository: StudentsRepository,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const student = await this.studentRepository.findOne({
      email: req.body.email,
    });
    if (student) {
      throw new HttpException(
        'Student already exist with this email address',
        400,
      );
    }
    next();
  }
}
