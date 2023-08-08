import styles from './Description.module.css';
import React from 'react';

RecipeAuthor();{
    let authorLink = "https://www.thepioneerwoman.com/food-cooking/recipes/a99178/instant-pot-pot-roast/"
    let authorPhoto = "https://hips.hearstapps.com/hmg-prod/images/pwspringset2-96-1644080194.jpg?crop=1.00xw:0.336xh;0,0.231xh&resize=980:*"
    let authorName = "Ree Drummond"


    return (
        <div className = {StyleSheet.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Ree Drummond laughing as she cooks for family" className={StyleSheet.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>The Pioneer Woman</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {

    render() {
        return( 
            <div> 
                <div>
                    <h1>Instant Pot Pot Roast</h1>
                    <p>Quick and Easy Pot Roast that will fall apart on your fork</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;