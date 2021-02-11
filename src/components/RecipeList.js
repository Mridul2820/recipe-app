import uuid from 'react-uuid';
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipes">

            {recipes.map(recipe => (

                <Recipe key={uuid()} recipe={recipe} />
                
            ))}
        </div>
    )
}

export default RecipeList
