import { useState ,useEffect } from 'react'
import SearchFrom from "./components/SearchFrom";
import RecipeList from "./components/RecipeList";

import './App.scss';

const App = () => {
    const APP_ID = '933a95c8';
    const API_KEY = 'b300433be262962cecc111dc09bdb41e';

    const [recipes, setRecipes] = useState([])
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

    return (
        <div className="App">
            <SearchFrom 
                getQuerry={(q) => setQuerry(q)} 
            />
            {querry ? 
                <RecipeList recipes={recipes}/> 
                : 
                <h1 className="type-something" >Type Something in Searchbar</h1>
            }
        </div>
    )
}

export default App
