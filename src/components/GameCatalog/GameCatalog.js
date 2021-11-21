import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService'
import GameCard from './GameCard';

const GameCatalog = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      gameService.getAll()
      .then(gamesResult => {
        setGames(gamesResult);
      });
    }, 1000)
  }, []);
  


  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.length > 0
        ? games.map(game => <GameCard key={game._id} game={game} />)
        : <h3 className="no-articles">No articles yet</h3>
      }

    </section>
  )
};

export default GameCatalog;