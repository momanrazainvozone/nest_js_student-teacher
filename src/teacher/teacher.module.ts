import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { StudentsModule } from '../student/student.module';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { validateTeacherMiddleware } from '../common/teacher.midddleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersRepository } from './repository/teacher.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TeachersRepository]), StudentsModule],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validateTeacherMiddleware).forRoutes({
      path: 'teachers/:teacherId',
      method: RequestMethod.GET,
    });
  }
}
