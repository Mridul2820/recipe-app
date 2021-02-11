import uuid from 'react-uuid';
import React from 'react'
import './RecipeIngredients.scss'

const RecipeIngredients = ({ ings }) => {
    return (
        <div className="ingredients">
            <strong>Ingredients : </strong>
            <ul>
                {ings.map(ing => (
                    <li key={uuid()}>{ing.text}</li>
                ))}
            </ul>
        </div>

    )
}

export default RecipeIngredients
