import React, { useState } from "react";
import CharacterFurtherDetails from "./CharacterFurtherDetails";

const Character = ({character}) => {

    const [characterDetails, setCharacterDetails] = useState([])

    const clicked = (evt) => {
        console.log(evt.target.value)
        console.log("I've been clicked")
        // const setCharacterDetails = [...characterDetails, characterObject]
        // return <CharacterFurtherDetails  key={character.id} character={character} setCharacterDetails={setCharacterDetails}></CharacterFurtherDetails>
    }
    return (
        <>
            <button onClick={clicked}>{character.name}</button>
            <li key={character.id} character={character}>{character.name}</li>
            {/* <CharacterFurtherDetails key={character.id} setCharacterDetails={setCharacterDetails} character={character}>{character.name}</CharacterFurtherDetails> */}
            <img src={character.img_url}></img>
        </>
)}

export default Character