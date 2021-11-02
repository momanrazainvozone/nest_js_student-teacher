import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teachers')
export class Teachers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: String;

  @Column({
    type: 'varchar',
  })
  name: string;
}
