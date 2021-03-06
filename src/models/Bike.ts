import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bikes')
export class Bike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column('integer')
  cost: number;

  @Column('boolean')
  availability: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
