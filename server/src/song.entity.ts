import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
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
}
