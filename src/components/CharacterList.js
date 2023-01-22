import React from "react";
import Character from "./Character";

const CharacterList = ({characters, onCharacterSelected}) => {

    // const selectCharacter = function(evt) {
    //     const chosenCharacter = characters[evt.target.value]
    //     onCharacterSelected(chosenCharacter)
    // }

    const characterItems = characters.map((character) => {
        return <Character key={character.id} character={character}>{character.name}</Character>
    })

    return (
        <>
        <ol>{characterItems}</ol>
        {/* <ol onClick={selectCharacter}>{characterItems}</ol> */}
        </>
    )
}

// Character picturex


export default CharacterList