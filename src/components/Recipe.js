import style from '../modules/recipe.module.css'

const Recipe = ({ title, img, cal, ings }) => {
    return (
        <div className={style.recipe}>
            <h1  >{title}</h1>
            <ol>
                {ings.map(ing => (
                    <li>{ing.text}</li>
                ))}
            </ol>
            <p>{cal}</p>
            <img src={img} alt="img"/>
        </div>
    )
}

export default Recipe
