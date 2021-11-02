import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students, teachers } from '../db';

@Injectable()
export class validateTeacherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware Called validateTeacherMiddleware');
    const teacherId = req.params.teacherId;
    let teacherExists = teachers.some((teaher) => {
      return teaher.id === teacherId;
    });
    if (!teacherExists) {
      throw new HttpException('Teacher not found', 400);
    }
    next();
  }
}
