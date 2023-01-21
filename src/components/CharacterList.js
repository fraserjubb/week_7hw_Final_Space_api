import React from "react";
import Character from "./Character";

const CharacterList = ({characters}) => {

    const characterItems = characters.map(character => {
        return <Character key={character.id} character={character}>{character.name}</Character>
    })

    return (
        <>
        <ol>{characterItems}</ol>
        </>
    )
}

// Character picturex


export default CharacterList