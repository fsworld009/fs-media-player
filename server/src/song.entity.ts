import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'song' })
@Unique(['sid', 'service'])
export class SongEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sid: string;

  @Column({ default: 'youtube' })
  service: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  comment: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
