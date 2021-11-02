import { EntityRepository, Repository } from 'typeorm';
import { Teachers } from '../entity/teacher.entity';

@EntityRepository(Teachers)
export class TeachersRepository extends Repository<Teachers> {}
