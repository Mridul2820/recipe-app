import RecipeIngredients from "./RecipeIngredients";
import style from '../modules/recipe.module.scss'

const Recipe = ({ recipe }) => {
    return (
        <div className={style.recipe}>
            <h1>{recipe.recipe.label}</h1>

            <RecipeIngredients ings={recipe.recipe.ingredients} />
            
            <p>{recipe.recipe.calories}</p>
            <img src={recipe.recipe.image} alt="img"/>
        </div>
    )
}

export default Recipe
