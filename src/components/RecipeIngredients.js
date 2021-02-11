import uuid from 'react-uuid';
import React from 'react'

const RecipeIngredients = ({ ings }) => {
    return (
        <ol>
            {ings.map(ing => (
                <li key={uuid()}>{ing.text}</li>
            ))}
        </ol>
    )
}

export default RecipeIngredients
