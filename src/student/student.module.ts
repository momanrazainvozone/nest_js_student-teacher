import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { ValidStudentMiddleware } from '../common/middlewares/validStudent.middleware';
import { CreateStudentMiddleware } from '../common/middlewares/createStudent.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsRepository } from './repository/student.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.startegy';

@Module({
  controllers: [StudentController],
  providers: [StudentService, JwtStrategy],
  exports: [StudentService],
  imports: [
    TypeOrmModule.forFeature([StudentsRepository]),
    JwtModule.register({
      secret: 'abcssjsjsjaajdkj',
      signOptions: { expiresIn: '24h' },
    }),
  ],
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.PUT,
    });
    consumer.apply(CreateStudentMiddleware).forRoutes({
      path: 'students/',
      method: RequestMethod.POST,
    });
  }
}
