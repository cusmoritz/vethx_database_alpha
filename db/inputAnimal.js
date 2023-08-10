import { client } from "index.js";

const inputAnimal = async (animalInfo) => {
    try {
        await client.query(`
        INSERT INTO pets (name, age, pet_sex, pet_birth_date, pet_birth_estimate, pet_weight, pet_owner)
        VALUES ($1, $2, $3, $4, $5, $6) 
        ;
        `, [animalInfo.name, animalInfo.age, animalInfo.petSex, animalInfo.petBirthDate, animalInfo.petBirthEstimate, animalInfo.petWeight, animalInfo.petOwner])
        
    } catch (error) {
        console.log('there was an error inputting an animals information into the database')
        throw error;
    }
}