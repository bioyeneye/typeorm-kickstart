import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany} from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata";
import { Author } from "./Author";
import { Album } from "./Album";
import { BaseDateModel } from "./base/BaseDateModel";

@Entity()
export class Photo extends BaseDateModel{

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo)
    metadata: Promise<PhotoMetadata>;

    @ManyToOne(type => Author, author => author.photos)
    author: Author;
    
    @ManyToMany(type => Album, album => album.photos)
    albums: Album[];
}