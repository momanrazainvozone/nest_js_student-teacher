import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { StudentService } from './student.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly studentService: StudentService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: 'abcssjsjsjaajdkj',
    });
  }

  async validate(payload) {
    console.log(payload, 'payload');
    // const user = await this.studentService.validateUser(payload);
    // if (!user) {
    //   throw new Error();
    // }
    return { name: 'moman' };
  }
}
