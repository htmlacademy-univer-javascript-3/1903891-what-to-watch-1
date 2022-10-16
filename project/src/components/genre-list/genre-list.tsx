import ItemGenreList from '../item-genre-list/item-genre-list';
import {Genre} from '../../types/genre';
import {useAppSelector} from '../../hooks/hooks-toolkit';

type GenreListProps = {
  genres: Genre[];
}

function GenreList(props: GenreListProps) {
  const {genres} = props;
  const selectGenre = useAppSelector((state) => state.films.genre);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem) => (
        <ItemGenreList key={genreItem.id} genre={genreItem.genre} active={selectGenre === genreItem.genre}/>
      ))}
    </ul>
  );
}

export default GenreList;
