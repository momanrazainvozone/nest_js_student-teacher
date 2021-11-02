import { EntityRepository, Repository } from 'typeorm';
import { Students } from '../entity/student.entity';

@EntityRepository(Students)
export class StudentsRepository extends Repository<Students> {}
