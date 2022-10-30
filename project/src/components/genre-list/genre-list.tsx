import ItemGenreList from '../item-genre-list/item-genre-list';
import {useAppSelector} from '../../hooks/hooks-toolkit';

function GenreList() {
  const genres = useAppSelector((state) => state.filmList.genreList);
  const selectGenre = useAppSelector((state) => state.filmList.currentGenre);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem) => (
        <ItemGenreList key={genreItem.id} genre={genreItem.genre} active={selectGenre === genreItem.genre}/>
      ))}
    </ul>
  );
}

export default GenreList;
