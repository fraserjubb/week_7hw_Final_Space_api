import React from "react";
import CharacterOverview from "./Character";

const CharacterDetails = ({character}) => {
    return <ul>{character.name}</ul>
}

export default CharacterDetails