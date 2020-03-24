import {Entity, PrimaryGeneratedColumn, Column, BeforeUpdate, BeforeInsert} from "typeorm";
import { BaseDateModel } from "./base/BaseDateModel";

@Entity()
export class User extends BaseDateModel {

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
}
