import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
@PrimaryGeneratedColumn('uuid')
id: string

  @Column()
  firstName: string;

  @Column()
  email: string

  @Column()
  password: string
}
