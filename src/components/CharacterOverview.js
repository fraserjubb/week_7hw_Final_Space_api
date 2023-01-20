import React from "react";
import CharacterDetails from "./CharacterDetails";

const CharacterOverview = ({character}) => {
    return <CharacterDetails character={character}>{character.name}</CharacterDetails>
}

export default CharacterOverview