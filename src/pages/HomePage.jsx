
import { Link } from 'react-router-dom';
import recipes from '../data/recipes';

function HomePage() {
  return (
    <div>
      <h1>Recettes</h1>
      <ul className='recipes-list'>
        {/* Ajouter une boucle pour afficher chaque recette dans le tableau importer "recipes"*/}
        {/* Chaque recette doit s'afficher sous cette forme:
        <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        */}
        <Link to="/add-recipe" className='new-recipe'>+ Ajouter une nouvelle recette</Link>
      </ul>
    </div>
  );
}

export default HomePage;