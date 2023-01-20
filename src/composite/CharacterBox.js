import {useState, useEffect} from "react";
import CharacterList from "../components/CharacterList";

const CharacterBox = () => {

    const [characters, setCharacters] = useState([])


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
  
    // const characterItems = characters.map(character => {
    //   return <li key = {character.id}>{character.name}</li>
    // })
  
    return (
        <>
        <CharacterList characters={characters} ></CharacterList>
        </>
    )
}

export default CharacterBox