const RecipeAuthor = () => {
   let authorLink = "https://www.thepioneerwoman.com/food-cooking/recipes/a99178/instant-pot-pot-roast/";
   let authorPhoto = "https://hips.hearstapps.com/hmg-prod/images/pwspringset2-96-1644080194.jpg?crop=1.00xw:0.336xh;0,0.231xh&resize=980:*";
   let authorName = "Ree Drummond";

   return (
      <div>
         <img src={authorPhoto} alt = "Ree Drummond laughing" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Ree Drummond's website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['Chuck Roast', 'Potato', 'Carrot', 'Onion', 'Red Wine'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Instant Pot Pot Roast</h1>
            <p>A wonderful and fast Roast recipe that will shred apart with just a fork!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://hips.hearstapps.com/hmg-prod/images/instant-pot-pot-roast-1591310014.jpg?crop=0.804xw:1.00xh;0.0272xw,0&resize=980:*" alt="Roast with Potato and Carrot" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}