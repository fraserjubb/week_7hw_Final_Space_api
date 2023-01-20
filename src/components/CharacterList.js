import React from "react";
import CharacterOverview from "./CharacterOverview";

const CharacterList = ({characters}) => {

    const characterItems = characters.map(character => {
        return <CharacterOverview key={character.id} character={character}>{character.name}</CharacterOverview>
    })

    return (
        <>
        {characterItems}
        </>
    )
}


export default CharacterList