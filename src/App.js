import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import Page from './components/Page';

function App() {
  const pages = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=200."
  const [pokemon, setPokemon] = useState([])
  const [current, setCurrent] = useState(pages)
  const [nextpage, setNextPage] = useState(pages)
  const [prevpage, setPrevPage] = useState(pages)

useEffect(() =>
{
  axios.get(current).then(res => {
  setNextPage(res.data.next)
  setPrevPage(res.data.previous)
  setPokemon(res.data.results.map(p => p.name))
})

}, [current])


function GoToNext() 
{
  setCurrent(nextpage)

}

function GoToPrev() 
{
  setCurrent(prevpage)

}



  return (
    <div className="App">
    <PokemonList pokemon ={pokemon}/>
    <Page GoToNext ={GoToNext} GoToPrev ={GoToPrev}/>

    </div>
  );
}

export default App;
