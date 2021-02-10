import { useState ,useEffect } from 'react'
import './App.css';

import Recipe from "./components/Recipe";

const App = () => {
    const APP_ID = '933a95c8';
    const API_KEY = 'b300433be262962cecc111dc09bdb41e';

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [querry, setQuerry] = useState('chicken')

    useEffect(() => {
        getRecipes()
    }, [querry])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${API_KEY}`)

        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }


    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuerry(search)
        setSearch('')
    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input 
                    type="text" 
                    className="search-bar" 
                    value={search} 
                    onChange={updateSearch}
                />
                <button type="submit"className="search-button">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe 
                        key={recipe.recipe.label} 
                        title={recipe.recipe.label} 
                        img={recipe.recipe.image} 
                        cal={recipe.recipe.calories}
                        ings={recipe.recipe.ingredients}
                    />
                ))}
            </div>

        </div>
    )
}

export default App
