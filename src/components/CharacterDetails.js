import React from "react";
import CharacterOverview from "./CharacterOverview";

const CharacterDetails = ({character}) => {
    return <ul>{character.name}</ul>
}

export default CharacterDetails