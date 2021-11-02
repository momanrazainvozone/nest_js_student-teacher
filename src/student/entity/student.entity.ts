import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class Students extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  teacher: string;
}