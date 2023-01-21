import React from "react";
// import CharacterFurtherDetails from "./CharacterFurtherDetails";

const Character = ({character}) => {
    return (
        <>
            <li key={character.id} character={character}>{character.name}</li>
            <img src={character.img_url}></img>
        </>
)}

export default Character