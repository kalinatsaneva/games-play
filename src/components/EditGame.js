

const EditGame = () => {

  return (
    <section id="edit-page" class="auth">
      <form id="edit">
        <div class="container">

          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" />

          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" />

          <label htmlFor="levels">MaxLevel:</label>
          <input type="number" id="maxLevel" name="maxLevel" min="1" />

          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input class="btn submit" type="submit" value="Edit Game" />

        </div>
      </form>
    </section>
  )
};

export default EditGame;