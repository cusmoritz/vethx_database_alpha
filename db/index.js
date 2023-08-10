const {Client} = require('pg');
const { DATABASE_URL = 'postgres://localhost:5432' } = process.env;
// Create a client for connecting to the server.
const client = new Client({
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : undefined,

});
client.connect();

const dogBreedsTest = [
"French Bulldogs",
"Labrador Retrievers",
"Golden Retrievers",
"German Shepherd Dogs",
"doodles",
"Bulldogs",
"Rottweilers",
"Beagles",
"Dachshunds",
"German Shorthaired Pointers",
"Pembroke Welsh Corgis",
"Australian Shepherds",
"Yorkshire Terriers",
"Cavalier King Charles Spaniels",
"Doberman Pinschers",
"Boxers",
"Miniature Schnauzers",
"Cane Corso",
"Great Danes",
"Shih Tzu",
"Siberian Huskies",
"Bernese Mountain Dogs",
"Pomeranians",
"Boston Terriers",
"Havanese",
"English Springer Spaniels",
"Shetland Sheepdogs",
"Brittanys",
"Cocker Spaniels",
"Border Collies",
"Miniature American Shepherds",
"Belgian Malinois",
"Vizslas",
"Chihuahuas",
"Pugs",
"Basset Hounds",
"Mastiffs",
"Maltese",
"Collies",
"English Cocker Spaniels",
"Rhodesian Ridgebacks",
"Newfoundlands",
"Shiba Inu",
"Weimaraners",
"West Highland White Terriers",
"Portuguese Water Dogs",
"Bichons Frises",
"Australian Cattle Dogs",
"Dalmatians",
"Bloodhounds",
"Papillons"
]

const createDatabase = async() => {
    try {
        console.log('Creating database...')
        await client.query(`
        CREATE TABLE IF NOT EXISTS owners (
            owner_id SERIAL PRIMARY KEY,
            owner_first_name VARCHAR(100) NOT NULL,
            owner_last_name VARCHAR(100) NOT NULL,
            owner_address TEXT NOT NULL,
            owner_phone_main INT NOT NULL,
            owner_phone_secondary INT NOT NULL,
            owner_email VARCHAR(100)
        );

        CREATE TABLE IF NOT EXISTS pets (
            pet_unique_id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT NOT NULL,
            pet_sex BOOLEAN NOT NULL,
            pet_birth_date DATE NOT NULL,
            pet_birth_estimate BOOLEAN DEFAULT FALSE,
            pet_weight FLOAT NOT NULL,
            pet_owner INT REFERENCES owners(owner_id)
        );

        CREATE TABLE IF NOT EXISTS dog_breeds (
            dog_breed_unique_id SERIAL PRIMARY KEY,
            dog_breed_name VARCHAR(100) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS bird_types (
            bird_type_unique_id SERIAL PRIMARY KEY,
            bird_breed_name VARCHAR(100) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS rodent_types (
            rodent_type_unique_id SERIAL PRIMARY KEY,
            rodent_breed_name VARCHAR(100) NOT NULL
        );

        `, [])
        console.log('Done creating database...')
    } catch (error) {
        console.log('There was an error creating the database.');
        throw error;
    }
};

const dropTables = async() => {
    try {
        console.log('Dropping tables...')
        await client.query(`
        DROP TABLE IF EXISTS pets;
        DROP TABLE IF EXISTS owners;
        `);
        console.log('Done dropping tables...')
    } catch (error) {
        console.log('There was an error dropping the tables.');
        throw error;
    }
};

dropTables();
createDatabase();

module.exports = {
    createDatabase,
    dropTables,

}