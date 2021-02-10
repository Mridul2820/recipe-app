
const Recipe = ({ title, img, cal }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{cal}</p>
            <img src={img} alt="img"/>
        </div>
    )
}

export default Recipe
