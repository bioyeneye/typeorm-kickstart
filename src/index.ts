import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./database/entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const users = await connection.manager.find(User);
    if (users.length < 1) {
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        await connection.manager.save(user);
        console.log("Saved a new user with id: " + user.id);
    }else{
        
    }



    // let photoRepository = connection.getRepository(Photo);
    // let savedPhotos = await photoRepository.find({relations: ["metadata"]});
    // let metadataRepository = connection.getRepository(PhotoMetadata);
    // let savedMetadata = await metadataRepository.find();

    // if (savedPhotos.length < 0) {
    //     let photo = new Photo();
    //     photo.name = "Me and Bears";
    //     photo.description = "I am near polar bears";
    //     photo.filename = "photo-with-bears.jpg";
    //     photo.views = 1;
    //     photo.isPublished = true;
    //     await photoRepository.save(photo);
    // } else {
    //     var photo = savedPhotos[0];

    //     console.log(await photo.metadata);

    //     if (savedMetadata.length < 1) {
    //         let metadata = new PhotoMetadata();
    //         metadata.height = 640;
    //         metadata.width = 480;
    //         metadata.compressed = true;
    //         metadata.comment = "cybershoot";
    //         metadata.orientation = "portait";
    //         metadata.photo = photo; // this way we connect them

    //         await metadataRepository.save(metadata);
    //     }
    // }


    // console.log("All photos from the db: ", savedPhotos);


}).catch(error => console.log(error));
