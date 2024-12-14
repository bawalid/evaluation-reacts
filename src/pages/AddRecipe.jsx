

function AddRecipe() {
  // TODO: Initialiser l'état pour le titre et la description "useState"

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Ajouter la logique pour soumettre le formulaire
  };

  return (
    <div>
      <h1>Ajouter une nouvelle recette</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre : </label>
          <input type="text" placeholder="Titre" />
        </div>
        <div>
          <label>Description : </label>
          <textarea placeholder="Description"></textarea>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddRecipe;