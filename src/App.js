import './App.css';
import { useEffect, useState } from 'react';
import CharacterBox from './composite/CharacterBox';

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((response) => response.json())
      // .then(characters => console.log(characters))
      .then(characters => setCharacters(characters))

  }, [])

  const characterItems = characters.map(character => {
    return <li key = {character.id}>{character.name}</li>
  })

  return(
  <>
  <CharacterBox></CharacterBox>
  <ul>{characterItems}</ul>
  </>
)}

export default App;
