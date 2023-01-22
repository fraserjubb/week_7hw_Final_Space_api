import {useState, useEffect} from "react";
import CharacterList from "../components/CharacterList";

const CharacterBox = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState("")


    const fetchCharacters = () => {
        fetch("https://finalspaceapi.com/api/v0/character")
        .then((response) => response.json())
        // .then(characters => console.log(characters))
        .then(characters => setCharacters(characters))
    }
    useEffect(() => { 
        fetchCharacters()
        console.log("fetched") 
    }, [])
  
    const onCharacterSelected = function (character) {
        setSelectedCharacter(character)
    }
  
    return (
        <>
        <CharacterList characters={characters} onCharacterSelected={onCharacterSelected}></CharacterList>
        </>
    )
}

export default CharacterBox