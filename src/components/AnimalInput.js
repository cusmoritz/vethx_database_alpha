import React from "react";

export const AnimalInput = () => {

    // const [animalState, setAnimalState] = useState("")

    const animalType = [
        "Bird",
        "Cat",
        "Dog",
        "Rodent"
    ]

    const dogBreedsTest = [
        "Unknown / mutt",
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

    const birdTypes = [
        "Canary",
        "Goose",
        "Chicken",
        "Pigeon",
        "Finch",
        "Quail",
        "Duck",
        "Rhea",
        "Dove",
        "Finch",
        "Turkey",
        "Cockatiel",
    ]

    const rodentTypes = [
        "Guinea Pig",
        "Chinchillas",
        "Mice",
        "Hamster",
        "Rat",
        "Gerbil",
    ]

    return (
        <div>
            <label htmlFor="animal-input-form">Input pet information:</label>
            <form className="animal-input-form">

            <label htmlFor="animal-name">Name:</label>
            <input className="animal-name" placeholder="Pet name..."></input>

            <label htmlFor="animal-age">Age:</label>
            <input type="number" className="animal-age"></input>

            <label htmlFor="animal-sex">Sex:</label>
            <select className="animal-sex" placeholder="M/F" >
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label htmlFor="neutered">Click if the animal is neutered</label>
            <input type="checkbox" value="false"></input>

            <label htmlFor="animal-type">Animal type:</label>
            <select className="animal-type" placeholder="Dog, cat, bird...">
                {animalType.map((type) => (<option value={type} >{type}</option>))}
                {/* onClick={(setAnimalState(type))} */}
            </select>

            {/* will need conditional statement to select breed */}
            <label htmlFor="animal-breed">Breed / Type:</label>
            <select className="animal-breed" placeholder="Frenchie, shorthair...">
                {dogBreedsTest.map((breed) => 
                    <option value={breed}>{breed}</option>)}
            </select>
            </form>
        </div>
    )
}